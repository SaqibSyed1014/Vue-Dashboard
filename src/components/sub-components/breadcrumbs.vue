<template>
  <div style="" class="breadcome-area">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="breadcome-list">
            <div class="row">
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <div class="breadcome-heading">
                  <form role="search" class="sr-input-func">
                    <input type="text" placeholder="Search..." class="search-int form-control">
                    <a href="#"><i class="fa fa-search"></i></a>
                  </form>
                </div>
              </div>
              <div class="col-lg-6 col-md-6 col-sm-6 col-xs-12">
                <ul class="breadcome-menu">
                  <li><a href="#">Home</a> <span class="bread-slash">/</span>
                  </li>
                  <li><span class="bread-blod">Dashboard V.1</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "breadcrumbs"
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";

.sr-input-func {
  position: relative;
  margin: 0;
  width: 180px;
  right: 0px;
  transition: .5s ease-out;
}
.breadcome-heading .form-control {
  border: 1px solid #ececec;
  font-size: 14px;
  height: 34px;
  color: #303030;
  padding-left: 20px;
  padding-right: 40px;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: none;
  border-radius: 30px;
  width: 200px;
}
.form-control {
  display: block;
  padding: 6px 12px;
  transition: border-color 0.15s ease-in-out 0s, box-shadow 0.15s ease-in-out 0s;
  line-height: 1.42857143;
}

button, input {
  overflow: visible;
}
button, input, optgroup, select, textarea {
  font-family: inherit;
  margin: 0;
}


.sr-input-func a {
  position: absolute;
  top: 8px;
  right: -5px;
  color: #999;
  transition: .5s ease-out;
  font-size: 14px;
}

.breadcome-list {
  padding: 20px;
  background: #fff;
  margin-bottom: 30px;
  margin-top: 20px;
}
ul.breadcome-menu {
  text-align: right;
}
ul.breadcome-menu {
  padding-top: 8px;
}
ul {
  list-style: outside none none;
  margin: 0;
  padding: 0;
}
ol, ul {
  margin-top: 0;
  margin-bottom: 10px;
}
ul.breadcome-menu li {
  font-size: 14px;
  display: inline-block;
  color: #444;
}
ul.breadcome-menu li a {
  color: #444;
}
</style>