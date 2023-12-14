<template>
  <main>
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-3"></div>
        <div class="col-sm-6">
          <div class="a-section">
            <div class="a-spacing-top-medium"></div>
            <h2 style="text-align: center">Add a new Product</h2>
            <form>
              <!-- Category Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Category</label>
                <select class="a-select-option" v-model="categoryID">
                  <option v-for="category in categories" :value="category._id" :key="category._id">
                    {{ category.type }}
                  </option>
                </select>
              </div>
              <!-- Owner Dropdown -->
              <div class="a-spacing-top-medium">
                <label>Owner</label>
                <select class="a-select-option" v-model="ownerID">
                  <option v-for="owner in owners" :value="owner._id" :key="owner._id">
                    {{ owner.name }}
                  </option>
                </select>
              </div>
              <!-- Title input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Title</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="title" />
              </div>
              <!-- Price input -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Price</label>
                <input type="text" class="a-input-text" style="width: 100%" v-model="price" />
              </div>
              <!-- Description textarea -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Description</label>
                <textarea
                  placeholder="Provide details such as a product description"
                  style="width: 100%"
                  v-model="description"
                ></textarea>
              </div>

              <!-- Photo file -->
              <div class="a-spacing-top-medium">
                <label style="margin-bottom: 0px">Add Photo</label>
                <div class="a-row a-spacing-top-medium">
                  <label class="choosefile-button">
                    <i class="fal fa-plus"></i>
                    <input type="file" @change="onFileSelected" />
                    <p style="margin-top: -70px">{{ fileName }}</p>
                  </label>
                </div>
              </div>
              <!-- Button -->
              <hr />
              <div class="a-spacing-top-large">
                <span class="a-button-register">
                  <span class="a-button-inner">
                    <span class="a-button-text">Add Product</span>
                  </span>
                </span>
              </div>
            </form>
          </div>
        </div>
        <div class="col-sm-3"></div>
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      categories: [],
      owners: [],
      categoryID: null,
      ownerID: null,
      title: '',
      price: 0,
      description: '',
      selectedFile: null,
      fileName: '',
    };
  },
  async mounted() {
    await this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        let categoriesResponse = await this.$axios.$get('http://localhost:3000/api/categories');
        let ownersResponse = await this.$axios.$get('http://localhost:3000/api/owners');

        this.categories = categoriesResponse.categories;
        this.owners = ownersResponse.owners;
      } catch (err) {
        console.error(err);
      }
    },
    onFileSelected(event) {
      this.selectedFile = event.target.files[0];
      this.fileName = event.target.files[0].name;
    },
  },
};
</script>
