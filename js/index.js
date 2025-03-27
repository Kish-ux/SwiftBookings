document.getElementById("flight-form").addEventListener("submit", function(e) {
    e.preventDefault();

     // Get input values
     const from = document.getElementById("from").value;
     const to = document.getElementById("to").value;
     const departureDate = document.getElementById("departure-date").value;
     const returnDate = document.getElementById("return-date").value;
     const passengers = document.getElementById("passengers").value;
 
      // Validate inputs
    if (!from || !to || !departureDate || !passengers) {
        alert("Please fill in all required fields.");
        return;
    }

    // Mock flight data (replace with actual API call for real data)
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

    // Display results
    displayFlights(mockFlights);
});

function displayFlights(flights) {
    const flightList = document.getElementById("flight-list");
    flightList.innerHTML = ""; // Clear previous results

    