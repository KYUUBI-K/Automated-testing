<template>
  <div>
    <div>Корзина: {{ addedProductsNumber }}</div>
    <div>Кількість кліків: {{ clickNum }}</div>
    <div>Total: {{ totalSum }}</div>
    <!-- 3.Використовуємо компонент -->
    <div class="list-container">
      <product-card
        v-for="item in productListData"
        :key="item.id"
        :img-src="item.imgSrc"
        :title="item.title"
        :price="item.price"
        :sales="item.sales"
        @on-add-to-cart="onAdd"
        @mouse-down-container="clickNum++"
        @open-product-detail="onProductDetail(item.id)"
        @delete-item="onDelete(item.id)"
        @edit-product="onProductEdit(item.id)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
//1. Іморт зовнішнього компонента
import ProductCard from './ProductCard.vue'
export default {
  name: 'ProductList',

  //2. Реєструємо компонент
  components: {
    ProductCard,
  },

  props: {
    productListData: {
      type: Array,
      default: () => [],
    },
  },

  data() {
    return {
      addedProductsNumber: 0,
      clickNum: 0,
      totalSum: 0,
    }
  },

  methods: {
    ...mapActions(['deleteItemAction']),
    onAdd(priceValue) {
      this.totalSum += priceValue
    },
    onProductDetail(itemId) {
      this.$router.push({
        name: 'products',
        params: { id: itemId },
      })
    },
    onDelete(itemId) {
      this.deleteItemAction(itemId)
    },
    onProductEdit(itemId) {
      this.$router.push({
        name: 'edit',
        params: { id: itemId },
      })
    },
  },
}
</script>

<style lang="css" scoped>
.list-container {
  display: flex;
}
</style>
