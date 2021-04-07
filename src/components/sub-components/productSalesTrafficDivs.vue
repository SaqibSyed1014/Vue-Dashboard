<template>
  <div class="white-box analytics-info-cs mg-b-10 res-mg-b-30 res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
    <h3 class="box-title">{{ boxTitle }}</h3>
    <ul class="list-inline two-part-sp">
      <li>
        <div id="sparklinedash"><canvas width="67" height="30" style="display: inline-block; width: 67px; height: 30px; vertical-align: top;"></canvas></div>
      </li>
      <li class="text-right sp-cn-r"><i class="fa fa-level-up" aria-hidden="true"></i> <span class="counter">{{ value }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "productSalesTrafficDivs",
  props: {
    boxTitle: String,
    value: Number
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";
.white-box {
  padding: 20px;
  background: #fff;
  overflow: hidden;
}
.analytics-info-cs{
  padding: 20px;
  background: #fff;
}
.mg-b-10 {
  margin-bottom: 23px;
}
.white-box.analytics-info-cs h3 {
  font-size: 16px;
  color: #303030;
}
h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.list-inline {
  padding-left: 0;
  list-style: none;
  margin-left: -5px;
}
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
.list-inline>li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
ul.two-part-sp li {
  display: inline-block;
  width: 49%;
  font-size: 20px;
  font-weight: 700;
}
.list-inline>li {
  display: inline-block;
  padding-right: 5px;
  padding-left: 5px;
}
.text-right {
  text-align: right;
}
.sp-cn-r i, .graph-two-ctn i, .graph-three-ctn i, .graph-four-ctn i {
  font-size: 14px;
}
.sp-cn-r i {
  color: #006DF0;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.sp-cn-r .text-success {
  color: #303030;
}


</style>