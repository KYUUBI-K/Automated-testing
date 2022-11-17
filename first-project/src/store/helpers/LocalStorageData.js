class LocalStorageData {
  static loadProductList() {
    if (localStorage.getItem('productList'))
      return JSON.parse(localStorage.getItem('productList'))
    else return []
  }
  static saveProductList(list = []) {
    localStorage.setItem('productList', JSON.stringify(list))
  }
  static clearProductList() {
    this.saveProductList([])
  }
  static addNewProduct(newProduct) {
    const list = this.loadProductList()
    list.push(newProduct)
    this.saveProductList(list)
    return list
  }
  static removeProductById(idForRemove) {
    let list = this.loadProductList()
    list = list.filter((item) => item.id !== idForRemove)
    this.saveProductList(list)
    return list
  }
  static updateProduct(productForUpdate) {
    const list = this.loadProductList()
    const productIndex = list.findIndex(
      (item) => item.id == productForUpdate.id
    )
    list[productIndex] = { ...productForUpdate }
    this.saveProductList(list)
    return list
  }
}

export default LocalStorageData
