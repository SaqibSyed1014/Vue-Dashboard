<template>
  <div class="analysis-progrebar res-mg-t-30 mg-ub-10 res-mg-b-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
    <div class="analysis-progrebar-content">
      <h5>Usage</h5>
      <h2 class="storage-right"><span class="counter">{{value}}</span>%</h2>
      <div class="progress progress-mini ug-1">
        <div style="width: 68%;" class="progress-bar"></div>
      </div>
      <div class="m-t-sm small">
        <p>Server down since 1:32 pm.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sedulesAreaDivs",
  props: {
    value: String
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";
.mg-ub-10 {
  margin-bottom: 17px;
}
.analysis-progrebar{
  padding: 20px;
  background: #fff;
}
.analysis-progrebar .analysis-progrebar-content h5 {
  font-size: 16px;
  color: #303030;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.analysis-progrebar .analysis-progrebar-content h2, .analytics-edu .skill .progress .lead-content h3 {
  font-size: 20px;
  color: #303030;
}
.storage-right {
  float: right;
  margin-bottom: 0px;
  margin-top: -25px;
  font-size: 16px !important;
}
.analysis-progrebar-content .progress {
  width: 100%;
  margin-bottom: 6px;
}
.analysis-progrebar-content .progress {
  height: 5px;
  margin-bottom: 10px;
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  /*box-shadow: inset 0 1px 2px rgb(0 0 0);*/
}
/*.ug-1 .progress-bar {*/
/*  background: #006DF0;*/
/*}*/
/*.ug-2 .progress-bar {*/
/*  background: #933EC5;*/
/*}*/
/*.ug-3 .progress-bar.progress-bar-danger {*/
/*  background: #65b12d;*/
/*}*/
/*.ug-4 .progress-bar.progress-bar-danger {*/
/*  background: #D80027;*/
/*}*/
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  /*background-color: #337ab7;*/
  /*box-shadow: inset 0 -1px 0 rgb(0 0 0);*/
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
}
.small{
  font-size: 85%;
}
.analysis-progrebar-content .small p {
  font-size: 14px;
  color: #303030;
  margin: 0px;
}

</style>