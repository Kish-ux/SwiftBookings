document.getElementById("flight-form").addEventListener("submit", function(e) {
    e.preventDefault();

     
     const from = document.getElementById("from").value;
     const to = document.getElementById("to").value;
     const departureDate = document.getElementById("departure-date").value;
     const returnDate = document.getElementById("return-date").value;
     const passengers = document.getElementById("passengers").value;
 
    
    if (!from || !to || !departureDate || !passengers) {
        alert("Please fill in all required fields.");
        return;
    }

    
    const mockFlights = [
        {
            flightNumber: "AA101",
            departureTime: "10:00 AM",
            arrivalTime: "1:00 PM",
            price: "$250",
        },

        {
            flightNumber: "UA202",
            departureTime: "2:00 PM",
            arrivalTime: "5:00 PM",
            price: "$300",
        },

        {
            flightNumber: "DL303",
            departureTime: "6:00 PM",
            arrivalTime: "9:00 PM",
            price: "$275",
        },
    ];


    displayFlights(mockFlights);
});

function displayFlights(flights) {
    const flightList = document.getElementById("flight-list");
    flightList.innerHTML = ""; 

    if (flights.length === 0) {
        flightList.innerHTML = "<li>No flights available</li>";
    } else {
        flights.forEach(flight => {
            const flightItem = document.createElement("li");
            flightItem.innerHTML = `
                <strong>Flight ${flight.flightNumber}</strong><br>
                Departure: ${flight.departureTime}<br>
                Arrival: ${flight.arrivalTime}<br>
                Price: ${flight.price}
            `;
            flightList.appendChild(flightItem);
        });
    }
}
