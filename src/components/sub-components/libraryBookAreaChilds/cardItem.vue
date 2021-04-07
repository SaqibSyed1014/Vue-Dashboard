<template>
  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-4">
   <div class="cards-dtn">
     <h3><span class="counter">{{ value }}</span></h3>
     <p>{{social}}</p>
   </div>
  </div>
</template>

<script>
export default {
name: "cardItem",
  props: {
    value: Number,
    social: String
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.cards-dtn {
  margin-top: 27px;
}
.cards-dtn h3 {
  font-size: 18px;
  color: #303030;
  margin: 0;
}
.cards-dtn p {
  font-size: 14px;
  color: #303030;
  margin: 0;
}
h3{
  font-weight: 700;
}

</style>