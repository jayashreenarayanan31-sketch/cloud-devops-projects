function searchTravel() {

    const destination =
        document.getElementById("destinationSearch")
        .value;

    if (destination.trim() === "") {

        alert(
            "Please enter a destination."
        );

        return;

    }

    alert(
        "Searching travel options for " +
        destination
    );

}


function searchDestinations() {

    const search =
        document.getElementById("destinationSearch")
        .value
        .toLowerCase();


    const destinations =
        document.querySelectorAll(
            ".destination-card"
        );


    destinations.forEach(function(card) {

        const name =
            card.dataset.name.toLowerCase();


        if (name.includes(search)) {

            card.style.display = "block";

        } else {

            card.style.display = "none";

        }

    });

}


function bookDestination(destination) {

    alert(
        "Opening travel packages for " +
        destination
    );

}


function bookHotel(hotel) {

    alert(
        "Opening booking details for " +
        hotel
    );

}


function showAllDestinations() {

    const destinations =
        document.querySelectorAll(
            ".destination-card"
        );


    destinations.forEach(function(card) {

        card.style.display = "block";

    });

}


function showTrips() {

    alert(
        "You don't have any upcoming trips yet."
    );

}
