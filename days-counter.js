// Calculate days since project launch (Oct 9, 2011)
function updateDaysCounter() {
  var launchDate = new Date('2011-10-09T16:04:43-04:00');
  var now = new Date();
  var millisecondsDiff = now - launchDate;
  var daysDiff = Math.floor(millisecondsDiff / (1000 * 60 * 60 * 24));

  var counterElement = document.getElementById('occupy-length-days');
  if (counterElement) {
    counterElement.textContent = daysDiff + ' days';
  }
}

// Run when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateDaysCounter);
} else {
  updateDaysCounter();
}
