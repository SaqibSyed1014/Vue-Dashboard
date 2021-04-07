<template>
  <div class="product-sales-area mg-tb-30">
    <div class="container-fluid">
      <div class="row">
        <productSalesGraph2/>
        <productSalesSedulesArea/>

      </div>
    </div>
  </div>
</template>

<script>
import productSalesGraph2 from './sub-components/productSalesGraph-2'
import productSalesSedulesArea from './sub-components/sedulesArea'
export default {
name: "productSalesArea2",
  components: {
    productSalesGraph2,
    productSalesSedulesArea
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