<template>
  <div class="product-sales-area mg-tb-30">
    <div class="container-fluid">
      <div class="row">
        <productSalesGraph1/>
        <productSalesTrafficSource/>

      </div>
    </div>
  </div>
</template>

<script>
import productSalesGraph1 from './sub-components/productSalesGraph-1'
import productSalesTrafficSource from './sub-components/productSalesTrafficSource'
export default {
  name: "productSalesArea",
  components: {
    productSalesGraph1,
    productSalesTrafficSource
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.mg-tb-30 {
  margin: 30px 0px;
}
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
.row {
  margin-right: -15px;
  margin-left: -15px;
}



</style>