<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
    <div class="analytics-sparkle-line reso-mg-b-30">
      <div class="analytics-content">
        <h5>{{ analytic_name }}</h5>
        <h2>$<span class="counter">{{ fees }}</span> <span class="tuition-fees">Tuition Fees</span></h2>
        <span class="textColor">{{percentage}}</span>
        <div class="progress m-b-0">
          <div class="progress-bar progress-bar-success barColor" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"> <span class="sr-only">20% Complete</span> </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "analyticContentsDivs",
  props: {
    analytic_name: String,
    fees: Number,
    percentage: Number,
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.analytics-content .progress {
  height: 5px;
  margin-bottom: 0;
}

.analytics-sparkle-line{
  padding: 20px;
  background: #fff;
}
.analytics-sparkle-line .analytics-content h5{
  font-size: 16px;
  color: #303030;
}
.analytics-sparkle-line .analytics-content h2{
  font-size: 20px;
  color: #303030;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.analytics-sparkle-line .analytics-content .tuition-fees {
  font-size: 14px;
  float: right;
  margin-top: 8px;
  color: #999;
  font-weight: 300;
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  /*box-shadow: inset 0 1px 2px rgb(0 0 0);*/
}
</style>