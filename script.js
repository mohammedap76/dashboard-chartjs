fetch('data.json')
  .then(response => response.json())
  .then(json => {
    const ctx = document.getElementById('salesChart').getContext('2d');
    
    const salesChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: json.labels,
        datasets: [{
          label: 'Sales',
          data: json.data,
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: '#36A2EB',
          borderWidth: 2,
          tension: 0.3
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  })
  .catch(error => console.error("Error loading data:", error));
