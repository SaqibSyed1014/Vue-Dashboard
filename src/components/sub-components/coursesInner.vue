<template>
  <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <div class="courses-inner res-mg-t-30 table-mg-t-pro-n tb-sm-res-d-n dk-res-t-d-n">
      <div class="courses-title">
        <a href="#"><img src="@/assets/images/people/child.jpg" alt=""></a>
        <h2>Apps Development</h2>
      </div>
      <div class="courses-alaltic">
        <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-clock"></i></span> 1 Year</span>
        <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-heart"></i></span> 50</span>
        <span class="cr-ic-r"><span class="course-icon"><i class="fa fa-dollar"></i></span> 500</span>
      </div>
      <div class="course-des">
        <p><span><i class="fa fa-clock"></i></span> <b>Duration:</b> 6 Months</p>
        <p><span><i class="fa fa-clock"></i></span> <b>Professor:</b> Jane Doe</p>
        <p><span><i class="fa fa-clock"></i></span> <b>Students:</b> 100+</p>
      </div>
      <div class="product-buttons">
        <button type="button" class="button-default cart-btn">Read More</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "coursesInner"
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";

.courses-inner{
  padding: 20px;
  background: #fff;
}
a:visited, a:link, a:active {
  text-decoration: none;
}
.courses-title h2 {
  font-size: 18px;
  color: #303030;
  margin-top: 10px;
}
h1, h2, h3, h4, h5, h6 {
  margin: 0 0 10px;
  font-weight: 700;
}
.courses-alaltic .cr-ic-r, .single-item-comment-view .cr-ic-r {
  margin-right: 10px;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
  /*-moz-osx-font-smoothing: grayscale;*/
}
.course-des {
  margin: 10px 0px;
}
.course-des p {
  margin: 2px 0px;
  font-size: 14px;
  color: #303030;
}
b {
  font-weight: bolder;
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
button, select {
  text-transform: none;
}
button, input {
  overflow: visible;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  /*font-size: 100%;*/
  line-height: 1.15;
  margin: 0;
}
img {
  max-width: 100%;
  height: auto;
}
audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}
img {
  border-style: none;
  border: 0;
}
</style>