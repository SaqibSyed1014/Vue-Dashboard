<template>
  <li>
    <h2><span class="counter">{{ audience }}</span></h2> <small>From {{ countryName }}</small>
    <div class="pull-right">{{value}} </div>
    <div class="progress">
      <div class="progress-bar progress-bar-danger ctn-vs-1" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" style="width:75%;">
        <span class="sr-only">Complete</span></div>
    </div>
  </li>
</template>

<script>
export default {
name: "countryStateChild",
  props: {
    countryName: String,
    audience: Number,
    value: Number
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.country-state li {
  margin: 26px 0px;
}
.country-state h2 {
  font-size: 18px;
  color: #444;
  margin-bottom: 2px;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.country-state small {
  font-size: 14px;
  color: #303030;
}
.pull-right {
  float: right!important;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  /*-moz-osx-font-smoothing: grayscale;*/
}
.country-state .progress {
  height: 4px;
  margin-bottom: 0px;
}
.progress {
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  /*-webkit-box-shadow: inset 0 1px 2px rgb(0 0 0 / 10%);*/
  /*box-shadow: inset 0 1px 2px rgb(0 0 0);*/
}
/*.progress-bar.progress-bar-danger.ctn-vs-1 {*/
/*  background: yellow;*/
/*}*/
.progress-bar {
  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  /*background-color: red;*/
  /*-webkit-box-shadow: inset 0 -1px 0 rgb(0 0 0 / 15%);*/
  /*box-shadow: inset 0 -1px 0 rgb(0 0 0);*/
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