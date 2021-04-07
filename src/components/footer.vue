<template>
  <div class="footer-copyright-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12">
          <div class="footer-copy-right">
            <p>Copyright © 2018. All rights reserved. Template by <a href="https://colorlib.com/wp/templates/">Colorlib</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "footerArea"
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
.footer-copyright-area {
  background: #006DF0;
  padding: 20px 0px;
  text-align: center;
}
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
.footer-copy-right p {
  margin: 0px;
  font-size: 15px;
  color: #fff;
}
.footer-copy-right a {
  color: #fff;
  text-decoration: none;
}

</style>