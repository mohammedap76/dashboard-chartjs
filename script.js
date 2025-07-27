const ctx = document.getElementById('salesChart').getContext('2d');

const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Sales',
      data: [150, 200, 180, 220, 300, 250],
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
