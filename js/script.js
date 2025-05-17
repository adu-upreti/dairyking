fetch('http://127.0.0.1:8000/api/products/')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // Log the data to the console
        document.getElementById('product-data').textContent = JSON.stringify(data); //Display data on page.
    })
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
        document.getElementById('product-data').textContent = "Error loading data.";
    });