<template>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
    <productSalesTrafficDivs box-title="Total Visit" value="1500"/>
    <productSalesTrafficDivs box-title="Page Views" value="3000"/>
    <productSalesTrafficDivs box-title="Unique Visitor" value="500"/>
    <productSalesTrafficDivs box-title="Bounce Rate" value="18%"/>
  </div>

</template>

<script>
import productSalesTrafficDivs from './productSalesTrafficDivs'
export default {
  name: "productSalesTrafficSource",
  components: {
    productSalesTrafficDivs
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";



</style>