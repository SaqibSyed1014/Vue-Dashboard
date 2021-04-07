<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="white-box res-mg-t-30 table-mg-t-pro-n">
      <h3 class="box-title">Visits from countries</h3>
      <ul class="country-state">
        <countryStateChild class="first" countryName="Australia" audience=1250 value="75%"/>
        <countryStateChild class="second" countryName="Pakistan" audience="1100" value="55%"/>
        <countryStateChild class="third" countryName="USA" audience="900" value="80%"/>
        <countryStateChild class="forth" countryName="CANADA" audience="1200" value="20%"/>
        <countryStateChild class="fifth" countryName="India" audience="1015" value="45%"/>
      </ul>
    </div>
  </div>
</template>

<script>
import countryStateChild from './sub-components/countryStateChild'
export default {
name: "countryState",
  components: {
    countryStateChild
  }
}
</script>

<style scoped>
@media (min-width: 1200px){
  .col-lg-4 {
    width: 33.33333333%;
  }
  @media (min-width: 1200px){
    .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9 {
      float: left;
    }
    @media (min-width: 992px){
      .col-md-6 {
        width: 50%;
      }
      @media (min-width: 992px){
        .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9 {
          float: left;
        }
        @media (min-width: 768px){
          .col-sm-6 {
            width: 50%;
          }
          @media (min-width: 768px){
            .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9 {
              float: left;
            }
            .col-xs-12 {
              width: 100%;
            }
            .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
              float: left;
            }
            .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xs-1, .col-xs-10, .col-xs-11, .col-xs-12, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9 {
              position: relative;
              min-height: 1px;
              padding-right: 15px;
              padding-left: 15px;
            }
          }
        }
      }
    }
  }
}
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
.first >>> .progress-bar.progress-bar-danger.ctn-vs-1{
  background-color: #337ab7;
}
.second >>> .progress-bar.progress-bar-danger.ctn-vs-1{
  background-color: #933EC5;
}
.third >>> .progress-bar.progress-bar-danger.ctn-vs-1{
  background-color: #65b12d;
}
.forth >>> .progress-bar.progress-bar-danger.ctn-vs-1{
  background-color: #D80027;
}
.fifth >>> .progress-bar.progress-bar-danger.ctn-vs-1{
  background-color: #555;
}
.fifth >>> .country-state .progress{
  margin-bottom: 0;
}

</style>