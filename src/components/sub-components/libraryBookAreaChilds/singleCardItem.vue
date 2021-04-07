<template>
  <div class="col-lg-4 col-md-6 col-sm-6 col-xs-12">
    <div class="single-cards-item">
      <div class="single-product-image">
        <a href="#"><img src="@/assets/images/others/profile-bg.jpg" alt=""></a>
      </div>
      <div class="single-product-text">
        <img src="@/assets/images/people/pro4.jpg" alt="">
        <h4><a class="cards-hd-dn" href="#">Abdul Wahab</a></h4>
        <h5>Web Designer &amp; Developer</h5>
        <p class="ctn-cards">Lorem ipsum dolor sit amet, this is a consectetur adipisicing elit</p>
        <a class="follow-cards" href="#">Follow</a>
        <div class="row">
          <cardItem value="200" social="Articles"/>
          <cardItem value="5000" social="Likes"/>
          <cardItem value="2000" social="Comments"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import cardItem from './cardItem'
export default {
name: "singleCardItem",
  components: {
    cardItem
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.single-cards-item{
  background: #fff;
  overflow: hidden;
}
a:link{
  text-decoration: none;
}
.single-product-image img {
  width: 100%;
}
img {
  max-width: 100%;
  height: auto;
  border-style: none;
  border: 0;
}
audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}
.single-product-text {
  padding: 20px;
  text-align: center;
}
.single-product-text img {
  width: 100px;
  height: 100px;
  /*-webkit-box-shadow: 0 0 15px rgb(0 0 0);*/
  /*box-shadow: 0 0 15px rgb(0 0 0);*/
  border-radius: 100%;
  margin-top: -70px;
}
h1, h2, h3, h4, h5, h6 {
  font-family: inherit;
  margin: 0 0 10px;
  font-weight: 700;
}
.single-product-text a, .single-latest-text a {
  color: #444;
  display: block;
  padding-top: 10px;
}
h4 {
  font-size: 18px;
}
.single-product-text h5 {
  font-size: 14px;
  color: #999;
  font-weight: 300;
}
.single-product-text .ctn-cards {
  font-size: 14px;
  color: #444;
  line-height: 24px;
}
p {
  margin: 0 0 15px;
}
.single-product-text .follow-cards {
  font-size: 14px;
  color: #fff;
  background: #006DF0;
  display: inline-block;
  padding: 5px 20px;
  border-radius: 3px;
}



</style>