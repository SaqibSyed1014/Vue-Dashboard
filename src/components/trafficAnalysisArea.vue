<template>
  <div class="traffic-analysis-area">
    <div class="container-fluid">
      <div class="row">
        <trafficAnalysisDivs social_growth="50k Likes"/>
        <trafficAnalysisDivs social_growth="30k Followers"/>
        <trafficAnalysisDivs social_growth="7k Connections"/>
        <trafficAnalysisDivs social_growth="50k Subscribers"/>
      </div>
    </div>
  </div>
</template>

<script>
import trafficAnalysisDivs from './sub-components/trafficAnalysisDivs'
export default {
name: "trafficAnalysisArea",
  components: {
    trafficAnalysisDivs
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
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
.social-media-edu i {
  font-size: 40px;
  line-height: 54px;
  color: #006DF0;
}

.social-edu-ctn {
  margin-left: 15px;
}



</style>