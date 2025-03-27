document.getElementById("flight-form").addEventListener("submit", function(e) {
    e.preventDefault();

     // Get input values
     const from = document.getElementById("from").value;
     const to = document.getElementById("to").value;
     const departureDate = document.getElementById("departure-date").value;
     const returnDate = document.getElementById("return-date").value;
     const passengers = document.getElementById("passengers").value;
 