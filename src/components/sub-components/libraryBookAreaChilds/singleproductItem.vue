<template>
  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <div class="single-product-item res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
      <div class="single-product-image">
        <a href="#"><img src="@/assets/images/others/book-4.jpg" alt=""></a>
      </div>
      <div class="single-product-text edu-pro-tx">
        <h4><a href="#">Title Demo Here</a></h4>
        <h5>Lorem ipsum dolor sit amet, this is a consec tetur adipisicing elit</h5>
        <div class="product-price">
          <h3>$45</h3>
          <div class="single-item-rating">
            <i class="educate-icon educate-star"></i>
            <i class="educate-icon educate-star"></i>
            <i class="educate-icon educate-star"></i>
            <i class="educate-icon educate-star"></i>
            <i class="educate-icon educate-star-half"></i>
          </div>
        </div>
        <div class="product-buttons">
          <button type="button" class="button-default cart-btn">Read More</button>
          <button type="button" class="button-default"><i class="fa fa-heart"></i></button>
          <button type="button" class="button-default"><i class="fa fa-share"></i></button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "singleproductItem"
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";

.single-product-item{
  padding: 20px;
  background: #fff;
}
.single-product-image img {
  width: 100%;
}
img {
  max-width: 100%;
  height: auto;
}
.single-product-text.edu-pro-tx {
  text-align: left;
}
.single-product-text.edu-pro-tx {
  padding: 20px 0 0 0;
}
.single-product-text.edu-pro-tx a {
  margin-top: -1px;
}
.single-product-text a, .single-latest-text a {
  color: #444;
  display: block;
  font-size: 18px;
}
.single-product-text.edu-pro-tx h5 {
  line-height: 20px;
  margin-bottom: 5px;
  color: #444;
}
.single-product-text h5 {
  font-size: 14px;
  font-weight: 300;
}
.product-price h3 {
  font-size: 25px;
}
.single-item-rating {
  float: right;
  margin-top: -32px;
  color: #ffb463;
}


.product-buttons button {
  border: none;
  background: #006DF0;
  color: #fff;
  padding: 5px 10px;
  border-radius: 3px;
  transition: all .4s ease 0s;
  font-size: 14px;
}
button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}
button {
  text-transform: none;
}
button {
  overflow: visible;
}
button {
  font-family: inherit;
  line-height: 1.15;
  margin: 0;
}

</style>