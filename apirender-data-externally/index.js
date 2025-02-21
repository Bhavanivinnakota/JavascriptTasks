document.addEventListener("DOMContentLoaded", () => {
    const apiUrl = "https://api.npoint.io/bc6397dc772b698de96f";
    const productContainer = document.getElementById("productContainer");

    // Function to create a product card
    const createProductCard = (product) => {
      const card = document.createElement("div");
      card.classList.add("product-card");
  
      card.innerHTML = `
        <div class="product-header">
          <img src="${product.images[0]}" alt="${product.name}" />
          <div>
            <h2>${product.name}</h2>
            <p><strong>Category:</strong> ${product.category}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
            <p><strong>Stock:</strong> ${product.stock} units</p>
            <p><strong>Rating:</strong> ${product.rating} ⭐</p>
          </div>
        </div>
        <div class="product-details">
          <p>${product.description}</p>    
        </div>
        <div class="reviews">
          <h3>Reviews:</h3>
          ${product.reviews
            .map(
              (review) =>
                `<div class="review">
                  <p><strong>${review.user}</strong> (${review.rating} ⭐)</p>
                  <p>${review.comment}</p>
                </div>`
            )
            .join("")}
        </div>
      `;
  
      return card;
    };
  
    // Fetch products from API and render them
    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((products) => {
        products.forEach((product) => {
          const productCard = createProductCard(product);
          productContainer.appendChild(productCard);
        });
      })
      .catch((error) => {
        productContainer.innerHTML = `<p style="color: red;">Failed to load data: ${error.message}</p>`;
      });
  });