import { createStore } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
// import LocalStorageData from './helpers/LocalStorageData'

// Create a new store instance.
const store = createStore({
  state() {
    return {
      count: 0,
      listData: [
        {
          id: 1,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 2000,
          sales: true,
        },
        {
          id: 2,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 5999,
          sales: false,
        },
        {
          id: 3,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 1000,
          sales: true,
        },
        {
          id: 4,
          imgSrc:
            'https://content1.rozetka.com.ua/goods/images/preview/231359985.png',
          title: 'Смарт-годинник Amazfit GTR 3 Pro Brown Leather',
          price: 1000,
          sales: false,
        },
      ],
    }
  },

  getters: {
    getProductList: (state) => state.listData,
    // getProductById: (state) => {
    //   return function (id) {
    //     return id ? state.listData.find((item) => item.id == id) : {}
    //   }
    // },
    getProductById: (state) => (id) =>
      id ? state.listData.find((item) => item.id == id) : {},

    getCount: (state) => {
      return state.count
    },
    // getCount: ({count}) => count,
  },

  mutations: {
    increment(state) {
      state.count++
    },
    increaseCount(state, val) {
      state.count += val
    },
    deleteItem(state, itemIdForDelete) {
      state.listData = state.listData.filter(
        (item) => item.id !== itemIdForDelete
      )
    },
    addNewProduct(state, prod) {
      state.listData.push({
        id: uuidv4(),
        ...prod,
      })
    },
    updateProduct(state, product) {
      const index = state.listData.findIndex((item) => item.id == product.id)
      state.listData[index] = {
        ...JSON.parse(JSON.stringify(product)),
      }
    },
  },

  actions: {
    addValueCount({ commit }, val) {
      commit('increaseCount', val)
    },
    deleteItemAction({ commit }, id) {
      commit('deleteItem', id)
    },
    addNewProduct({ commit }, prod) {
      commit('addNewProduct', prod)
    },
    updateProduct({ commit }, product) {
      commit('updateProduct', product)
    },
  },
})

export default store
