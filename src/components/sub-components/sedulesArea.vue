<template>
  <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12">
    <sedulesAreaDivs class="first" value="90"/>
    <sedulesAreaDivs class="second" value="70"/>
    <sedulesAreaDivs class="third" value="50"/>
    <sedulesAreaDivs class="forth" value="30"/>
    </div>
</template>

<script>
import sedulesAreaDivs from './sedulesAreaDivs'
export default {
name: "productSalesSedulesArea",
  components: {
    sedulesAreaDivs
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";

.first >>> .ug-1 .progress-bar{
  background: #006DF0;
}
.second >>> .ug-1 .progress-bar{
  background: #933EC5;
}
.third >>> .ug-1 .progress-bar{
  background: #65b12d;
}
.forth >>> .ug-1 .progress-bar{
  background: #D80027;
}


</style>