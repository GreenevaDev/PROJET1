document.getElementById('productForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const productName = document.getElementById('productName').value;
  const productCategory = document.getElementById('productCategory').value;
  const productPrice = document.getElementById('productPrice').value;
  const productDescription = document.getElementById('productDescription').value;

  console.log('Produit ajouté:', {
      productName,
      productCategory,
      productPrice,
      productDescription
  });

  // Réinitialiser le formulaire
  document.getElementById('productForm').reset();
});