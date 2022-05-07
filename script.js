

// Using Chart.js to design portfolio chart

const ctx = document.getElementById('myChart').getContext('2d');

// adding gradient 
Chart.defaults.font.size = 10;
let gradient = ctx.createLinearGradient(200,50,200,140);
gradient.addColorStop(0, "#C9D3FF");
gradient.addColorStop(1, "#E9E9ED");

const myChart = new Chart(ctx, {
type: 'line',
data: {
     labels: ['Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon', 'Wed'],
     datasets: [{
     data: [250, 200, 270, 160, 300, 120, 220, 100, 160],
     label: "Total Portfolio",
     borderColor: "#4162FF",
     pointBackgroundColor: "#59CCFB",
}]
},
options: {

maintainAspectRatio: false,

plugins: {

 legend: {

     display: true,
     labels: {

         boxWidth: 16,
         boxHeight: 16,
         fill: true,
         backgroundColor: "#4162FF",
         font: {

             size: 14,
         }
         
         
     },
 }
 
},
elements: {
 line: {
     display: true,
     borderWidth: 2,
     tension: 0.6,
     fill: true,
     backgroundColor: gradient,

 },
 point: {

     pointStyle: 'circle',
     backgroundColor: "#59CCFB",
     borderWidth: 0,
     radius: 5,
     hitRadius: 30,
     hoverRadius: 6,

 }

},
scales: {
 y: {
     beginAtZero: true,
     ticks: {

         callback: function(value) {
             return '$' + value;
         }

     }
 }
}
}
});