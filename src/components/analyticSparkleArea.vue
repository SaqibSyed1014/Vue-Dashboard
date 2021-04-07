<template>
  <div class="analytics-sparkle-area">
    <div class="container-fluid">
      <div class="row">
        <analyticContentsDivs class="first" analytic_name="Computer Technologies" fees="5000" percentage="20%"/>
        <analyticContentsDivs class="second" analytic_name="Accounting Technologies" fees="3000" percentage="40%"/>
        <analyticContentsDivs class="third" analytic_name="Electrical Engineering" fees="2000" percentage="60%"/>
        <analyticContentsDivs class="forth" analytic_name="Chemical Engineering" fees="3500" percentage="80%"/>
      </div>
    </div>
  </div>
</template>

<script>
import analyticContentsDivs from './sub-components/analyticContentsDivs'
export default {
name: "analyticSparkleArea",
  components: {
    analyticContentsDivs,
  },
}
</script>

<style scoped>
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
.first >>> .analytics-sparkle-line .barColor{
  background: #006DF0;
  width: 20%;
}
.first >>> .textColor{
  color: #006DF0;
}
.second >>> .analytics-sparkle-line .barColor{
  background: #933EC5;
  width: 40%;
}
.second >>> .textColor{
  color: #933EC5;
}
.third >>> .analytics-sparkle-line .barColor{
  background: #65b12d;
  width: 60%;
}
.third >>> .textColor{
  color: #65b12d;
}
.forth >>> .analytics-sparkle-line .barColor{
  background: #D80027;
  width: 80%;
}
.forth >>> .textColor{
  color: #D80027;
}



.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-transition: width .6s ease;
  -o-transition: width .6s ease;
  transition: width .6s ease;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
}


</style>