 function getProducts() {
      fetch("https://dummyjson.com/products")
        .then((response) => response.json())
        .then((result) => showProduct(result));
    }

    function showProduct(result) {
      const { products } = result;
      let cardElementContainer = document.getElementById("container");
      products.map((element) => {
        cardElementContainer.innerHTML += `
          <div class="product-card">
              <img src="${element.thumbnail}" alt="${element.title}" />
              <div class="stats-container">
                  <span class="product_name">${element.title}</span>
                  <span class="product_price">$${element.price}</span>

                  <div class="product-options">
                      <strong>${element.description}</strong>

                  </div>
              </div>
          </div>`;
      });
    }

    getProducts();