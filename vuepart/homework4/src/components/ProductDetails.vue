<template>
  <div class="product-details">
    <h1>{{ product.name }}</h1>
    <p>{{ formattedPrice }}</p>
    <p>{{ product.available ? 'Available' : 'Out of stock' }}</p>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  data () {
    return {
      product: {
        name: 'Sample Product',
        price: 99.99,
        available: true
      }
    }
  },
  computed: {
    formattedPrice () {
      return `$${this.product.price.toFixed(2)}`
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
