<template>
  <div>
    <div>
      <label>
        Шлях до зображення
        <input type="text" v-model="imgSrc" />
      </label>
    </div>
    <div>
      <label>
        Назва товару
        <input type="text" v-model="title" />
      </label>
    </div>
    <div>
      <label>
        Ціна товару
        <input type="number" v-model.number="price" />
      </label>
    </div>
    <div>
      <label>
        Акційний товар
        <input type="checkbox" v-model="sales" />
      </label>
    </div>
    <button @click="onChange">{{ buttonTitle }}</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'EditProduct',

  data() {
    return {
      imgSrc: null,
      title: null,
      price: 0,
      sales: false,
    }
  },

  computed: {
    ...mapGetters(['getProductById']),
    receivedProductId() {
      return this.$route.params.id
    },
    isEditMode() {
      return this.receivedProductId
    },
    buttonTitle() {
      return this.receivedProductId ? 'Save' : 'Add'
    },
  },

  methods: {
    ...mapActions(['addNewProduct', 'updateProduct']),

    onChange() {
      if (this.isEditMode)
        this.updateProduct({
          id: this.receivedProductId,
          imgSrc: this.imgSrc,
          title: this.title,
          price: this.price,
          sales: this.sales,
        })
      else
        this.addNewProduct({
          imgSrc: this.imgSrc,
          title: this.title,
          price: this.price,
          sales: this.sales,
        })
      this.$router.push({
        name: 'products',
      })
    },
    onAddNewProduct() {
      this.addNewProduct({
        imgSrc: this.imgSrc,
        title: this.title,
        price: this.price,
        sales: this.sales,
      })
    },
  },

  mounted() {
    if (this.isEditMode) {
      const product = this.getProductById(this.receivedProductId)
      if (product) {
        this.imgSrc = product.imgSrc
        this.title = product.title
        this.price = product.price
        this.sales = product.sales
      }
    }
  },
}
</script>

<style lang="scss" scoped></style>
