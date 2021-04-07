<template>
  <div class="col-lg-3 col-md-6 col-sm-6 col-xs-12">
    <div class="social-media-edu">
<!--      <font-awesome-icon :icon="['fab', 'twitter']" class="fab"/>-->
<!--      <font-awesome-icon icon="facebook-f" />-->
      <i class="fab fa-facebook-f">::before</i>
      <div class="social-edu-ctn">
        <h3>{{ social_growth }}</h3>
        <p>You main list growing</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "trafficAnalysisDivs",
  props: {
    social_growth: String
  }
}
</script>

<style scoped lang="scss">
@import "../../assets/responsive";
.fa-facebook-f:before {
  content: "\f09a";
}
.fab {
  display: inline-block;
  background-color: red;
  margin: 20px;
  font-size: 50px;
  font: normal normal normal 14px/1 FontAwesome;
  /*font-size: inherit;*/
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
.social-media-edu i {
  font-size: 40px;
  line-height: 54px;
  color: #006DF0;
}
.social-media-edu{
  display: flex;
  padding: 20px;
  background: #fff;
}
.social-edu-ctn h3 {
  font-size: 16px;
  text-transform: capitalize;
  /*color: #006DF0;*/
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.social-edu-ctn p {
  font-size: 14px;
  margin: 0;
  color: #303030;
}
/*2nd box*/
/*.social-media-edu.twitter-cl i {*/
/*  color: #933EC5;*/
/*}*/
/*.twitter-cl .social-edu-ctn h3 {*/
/*  color: #933EC5;*/
/*}*/
/*!*3rd box*!*/
/*.social-media-edu.linkedin-cl i {*/
/*  color: #65b12d;*/
/*}*/
/*.linkedin-cl .social-edu-ctn h3 {*/
/*  color: #65b12d;*/
/*}*/
/*!*4th box*!*/
/*.social-media-edu.youtube-cl i {*/
/*  color: #D80027;*/
/*}*/
/*.youtube-cl .social-edu-ctn h3 {*/
/*  color: #D80027;*/
/*}*/
</style>