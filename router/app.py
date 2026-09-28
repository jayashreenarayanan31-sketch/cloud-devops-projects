from flask import Flask, Response, request
import os
import requests

app = Flask(__name__)

WEBSITES = {
    "1": "http://shopsphere",
    "2": "http://fooddash",
    "3": "http://travelgo",
    "4": "http://fintrack"
}

active_site = os.environ.get("ACTIVE_SITE", "1")


def proxy_request():
    target = WEBSITES.get(active_site, WEBSITES["1"])

    path = request.path

    if request.query_string:
        path += "?" + request.query_string.decode()

    url = target + path

    try:
        response = requests.get(
            url,
            timeout=10,
            headers={
                "Host": request.host
            }
        )

        excluded_headers = [
            "content-encoding",
            "content-length",
            "transfer-encoding",
            "connection"
        ]

        headers = [
            (name, value)
            for name, value in response.headers.items()
            if name.lower() not in excluded_headers
        ]

        return Response(
            response.content,
            response.status_code,
            headers
        )

    except Exception as e:
        return f"Router error: {e}", 502


@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def proxy(path):
    return proxy_request()


@app.route("/health")
def health():
    return {
        "status": "healthy",
        "active_site": active_site
    }


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
