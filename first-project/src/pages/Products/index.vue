<template>
  <div>
    <h1>Products</h1>
    <h2>{{ getCount }}</h2>
    <div>
      <button @click="onClick">Add 1 to count</button>
    </div>
    <product-card
      v-if="receivedProductId"
      :img-src="currentProduct.imgSrc"
      :title="currentProduct.title"
      :price="currentProduct.price"
      :sales="currentProduct.sales"
    />
    <product-list v-else :product-list-data="getProductList" />
  </div>
</template>

<script>
import ProductList from '@/components/ProductList'
import ProductCard from '@/components/ProductList/ProductCard'

//1.Імпортуємо mapGetters
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'Products',

  components: {
    ProductList,
    ProductCard,
  },

  computed: {
    //2.Імпорт геттерів зі стора
    ...mapGetters(['getCount', 'getProductList', 'getProductById']),
    receivedProductId() {
      return this.$route.params.id
    },
    currentProduct() {
      return this.getProductById(this.receivedProductId)
    },
  },

  methods: {
    //Імпортуємо actions з стора
    ...mapActions(['addValueCount']),
    onClick() {
      this.addValueCount(1)
    },
  },
}
</script>

<style lang="scss" scoped></style>
