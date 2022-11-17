<template>
  <div class="card-container" @mousedown="$emit('mouse-down-container')">
    <div class="card-header">
      <span v-show="sales" class="card-sales">Акція</span>
      <button @click.stop="$emit('edit-product')">Edit</button>
      <button @click.stop="$emit('delete-item')">Delete</button>
      <button @click.stop="$emit('on-add-to-cart', price)" @mousedown.stop="">
        +
      </button>
    </div>
    <div class="card-image">
      <img :src="imgSrc" />
    </div>
    <div class="card-title">
      {{ title }}
    </div>
    <div class="card-price">
      {{ priceToShow }}
    </div>
    <button @click="$emit('open-product-detail')">getDetails</button>
  </div>
</template>

<script>
export default {
  name: "ProductCard",

  props: {
    imgSrc: {
      type: String,
      default:
        "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg",
    },
    title: {
      type: String,
      default: "No title",
    },
    price: {
      type: Number,
      default: 0,
    },
    sales: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    priceToShow() {
      return `${this.price} грн.`;
    },
  },

  methods: {
    onAddToCart() {
      this.$emit("on-add-to-cart");
    },
  },
};
</script>

<style lang="css" scoped>
.card-container {
  width: 200px;
  height: 300px;
  border: 2px solid green;
  border-radius: 10px;
  margin: 20px;
  padding: 10px;
  cursor: pointer;
}
.card-header {
  text-align: right;
}

.card-sales {
  background-color: greenyellow;
  color: white;
  margin-left: 10px;
  border-radius: 8px;
  padding: 8px;
}
.card-image {
  padding: 10px;
}
.card-image img {
  width: 100%;
}
</style>
