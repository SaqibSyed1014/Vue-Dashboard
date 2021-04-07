<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="white-box">
      <h3 class="box-title">Browser Status</h3>
      <ul class="basic-list">
        <basicListChilds class="first" browserName="Google Chrome" value="95.8%"/>
        <basicListChilds class="second" browserName="Mozila Firefox" value="85.8%"/>
        <basicListChilds class="third" browserName="Apple Safari" value="23.8%"/>
        <basicListChilds class="forth" browserName="Internet Explorer" value="55.8%"/>
        <basicListChilds class="fifth" browserName="Opera mini" value="28.8%"/>
        <basicListChilds class="sixth" browserName="Mozila Firefox" value="26.8%"/>
        <basicListChilds class="seventh" browserName="Safari" value="51.8%"/>
      </ul>
    </div>
  </div>
</template>

<script>
import basicListChilds from './sub-components/basicListChilds'
export default {
name: "basicList",
  components: {
    basicListChilds
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.white-box {
  padding: 20px;
  background: #fff;
  overflow: hidden;
}
.white-box h3 {
  font-size: 16px;
  color: #444;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.first >>> .label-color{
  background: #006DF0;
}
.second >>> .label-color{
  background: #933EC5;
}
.third >>> .label-color{
  background: #65b12d;
}
.forth >>> .label-color{
  background: #D80027;
}
.fifth >>> .label-color{
  background: #f0ad4e;
}
.sixth >>> .label-color{
  background: #9675ce;
}
.seventh >>> .label-color{
  background: #555;
}

</style>