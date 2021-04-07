<template>
  <div class="single-review-st-text">
    <img src="@/assets/images/people/1.jpg" alt="">
    <div class="review-ctn-hf">
      <h3>{{ name }}</h3>
      <p>Highly recommend</p>
    </div>
    <div class="review-item-rating">
      <i class="educate-icon educate-star"></i>
      <i class="educate-icon educate-star"></i>
      <i class="educate-icon educate-star"></i>
      <i class="educate-icon educate-star"></i>
      <i class="educate-icon educate-star-half"></i>
    </div>
  </div>

</template>

<script>
export default {
name: "librarySinglereview",
  props: {
  name: String
  }
}
</script>

<style scoped lang="scss">
@import "../../../assets/responsive";
.single-review-st-text {
  padding: 7.7px 0px;
  display: flex;
}
.single-review-st-text img {
  height: 50px;
  width: 50px;
  border-radius: 50%;
}
img {
  max-width: 100%;
  height: auto;
  border: 0;
  border-style: none;
  vertical-align: middle;
}
.review-ctn-hf {
  margin-top: 5px;
}
.review-ctn-hf, .review-item-rating {
  margin-left: 15px;
}
.review-ctn-hf h3 {
  font-size: 14px;
  color: #303030;
  margin-bottom: 5px;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.review-ctn-hf p {
  font-size: 14px;
  color: #303030;
  margin: 0;
}
.review-item-rating {
  text-align: right;
  margin-left: auto;
  margin-top: 5px;
}
.review-item-rating i {
  font-size: 14px;
  margin-top: 15px;
  color: #ffb463;
}
.educate-icon {
  font-family: 'educate-icon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
}

</style>