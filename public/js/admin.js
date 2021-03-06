function deleteProduct(btn) {
  const productId = btn.parentNode.querySelector('[name="productId"]').value;
  const csrf = btn.parentNode.querySelector('[name="_csrf"]').value;
  const productElement = btn.closest("article");

  fetch(`/admin/product/${productId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      productElement.remove();
    })
    .catch((err) => console.error(err));
}
