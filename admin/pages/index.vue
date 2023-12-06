<template>
  <main>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-sm-8 col-8">
          <h1 class="a-size-large a-spacing-none a-text-normal">All products</h1>
          <div class="a-spacing-large"></div>
          <!-- Button -->
          <a href="#" class="a-button-buy-again">Add a new product</a>
          <a href="#" class="a-button-history margin-right-10">Add a new category</a>
          <a href="#" class="a-button-history margin-right-10">Add a new owner</a>

          <!-- Listing page -->
        </div>
      </div>
    </div>
    <div class="a-spacing-large"></div>
    <div class="container-fluid browsing-history">
      <div class="row">
        <div class="col-xl-2 col-lg-2 col-md-3 col-sm-6 col-6 br bb">
          <div class="history-box">
            <!-- Product image -->
            <a herf="#" class="a-link-normal">
              <img src="#" class="img-fluid" />
            </a>
            <!-- Product title -->
            <div class="a-spacing-top-base asin-title">
              <span class="a-text-normal">
                <div class="p13n-sc-truncated">Product title</div>
              </span>
            </div>
            <!-- Product rating -->
            <div class="a-row">
              <a href="#">
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
                <i class="fas fa-star"> </i>
              </a>
              <span class="a-letter-space"></span>
              <span class="a-color-tertiary a-size-small asin-reviews">(1732)</span>
            </div>
            <!-- Product price -->
            <div class="a-row">
              <span class="a-size-base a-color-price">
                <span class="p13n-sc-price">$23</span>
              </span>
            </div>
            <div class="a-spacing-large"></div>
            <!-- Product Buttons -->
            <div class="a-row">
              <a href="a" class="a-button-history margin-right-10">Update</a>
              <a href="a" class="a-button-history margin-right-10">Delete</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  async data({ $axios }) {
    try {
      let response = await $axios.$get('http://localhost:3000/api/products');
      return {
        products: products,
      };
    } catch (err) {}
  },
};
</script>
