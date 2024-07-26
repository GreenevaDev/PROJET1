function toggleForm() {
  document.getElementById('clientFormContainer').classList.toggle('show');
}

document.getElementById('clientForm').addEventListener('submit', function(event) {
  event.preventDefault();
  // Add client registration logic here
  alert('Client enregistré avec succès!');
  toggleForm();
});