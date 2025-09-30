$(document).ready(function() {
  $(".btn-cart").on("click", function() {
    alert("Product added to cart!");
  });

  const minPrice = 50;
  const maxPrice = 5000;

  $(".product-card").each(function() {

    const randomPrice = Math.floor(Math.random() * (maxPrice - minPrice + 1)) + minPrice;
    $(this).find(".price").text(`₹${randomPrice}`);
  });
});
