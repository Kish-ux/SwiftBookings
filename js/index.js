document.addEventListener("DOMContentLoaded", () => {
    const flightList = document.getElementById("flight-list");
    const flightForm = document.getElementById("flight-form");
    const bookingContainer = document.getElementById("booking-container-section");
    const fromInput = document.getElementById("from");
    const toInput = document.getElementById("to");
    const departureDate = document.getElementById("departure-date");
    const returnDate = document.getElementById("return-date");
    const passengers = document.getElementById("passengers");

    
    fetch("db.json")
        .then(response => response.json())
        .then(data => {
            displayFlights(data.flights);
        })
        .catch(error => console.error("Error fetching flights:", error));

    function displayFlights(flights) {
        flightList.innerHTML = "";
        flights.forEach(flight => {
            const li = document.createElement("li");
            li.textContent = `${flight.from} → ${flight.to} | $${flight.price}`;
            const bookButton = document.createElement("button");
            bookButton.textContent = "Book Now";
            bookButton.onclick = () => bookFlight(flight);
            li.appendChild(bookButton);
            flightList.appendChild(li);
        });
    }

    function bookFlight(flight) {
        bookingContainer.innerHTML = "";
        const flightCard = document.createElement("div");
        flightCard.classList.add("flight-card");
        flightCard.innerHTML = `
            <div style="display: flex; align-items: center; gap: 20px;">
                <div>
                    <h3>Flight Booking Confirmed</h3>
                    <p><strong>From:</strong> ${flight.from}</p>
                    <p><strong>To:</strong> ${flight.to}</p>
                    <p><strong>Price:</strong> $${flight.price}</p>
                </div>
                <img src="${flight.image}" alt="${flight.to}" style="width: 200px; height: 150px; border-radius: 5px;">
            </div>
        `;
        bookingContainer.appendChild(flightCard);
    }

    
    flightForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const from = fromInput.value;
        const to = toInput.value;

        fetch("db.json")
            .then(response => response.json())
            .then(data => {
                const filteredFlight = data.flights.find(flight => 
                    flight.from.toLowerCase() === from.toLowerCase() &&
                    flight.to.toLowerCase() === to.toLowerCase()
                );
                if (filteredFlight) {
                    bookFlight(filteredFlight);
                } else {
                    bookingContainer.innerHTML = "<p>No flights found for the selected route.</p>";
                }
            })
            .catch(error => console.error("Error searching flights:", error));
    });

    
    fromInput.addEventListener("input", () => {
        console.log("From input changed:", fromInput.value);
    });

    toInput.addEventListener("input", () => {
        console.log("To input changed:", toInput.value);
    });

    departureDate.addEventListener("change", () => {
        console.log("Departure date selected:", departureDate.value);
    });

    returnDate.addEventListener("change", () => {
        console.log("Return date selected:", returnDate.value);
    });

    passengers.addEventListener("change", () => {
        console.log("Passenger count changed:", passengers.value);
    });

    fromInput.addEventListener("focus", () => {
        fromInput.style.backgroundColor = "#f0f8ff";
    });

    fromInput.addEventListener("blur", () => {
        fromInput.style.backgroundColor = "";
    });

    toInput.addEventListener("focus", () => {
        toInput.style.backgroundColor = "#f0f8ff";
    });

    toInput.addEventListener("blur", () => {
        toInput.style.backgroundColor = "";
    });
});