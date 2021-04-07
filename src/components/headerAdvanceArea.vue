<template>
  <div class="header-advance-area">
    <div class="header-top-area">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <div class="header-top-wraper">
              <div class="row">
                <div class="col-lg-1 col-md-0 col-sm-1 col-xs-12">
                  <div class="menu-switcher-pro">
                    <button @click="changeNav" type="button" id="sidebarCollapse" class="btn bar-button-pro header-drl-controller-btn btn-info navbar-btn">
                      <span class="angle-down-topmenu"><i class="fa fa-hamburger"></i></span>
                    </button>
                  </div>
                </div>
                <div class="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                  <div class="header-top-menu tabl-d-n">
                    <ul class="nav navbar-nav mai-top-nav">
                      <li class="nav-item"><a href="#" class="nav-link">Home</a>
                      </li>
                      <li class="nav-item"><a href="#" class="nav-link">About</a>
                      </li>
                      <li class="nav-item"><a href="#" class="nav-link">Services</a>
                      </li>
                      <li class="nav-item dropdown res-dis-nn">
                        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">Project
<!--                          <span class="angle-down-topmenu"><i class="fa fa-angle-down"></i></span>-->
                        </a>

                        <div role="menu" class="dropdown-menu animated zoomIn">
                          <a href="#" class="dropdown-item">Documentation</a>
                          <a href="#" class="dropdown-item">Expert Backend</a>
                          <a href="#" class="dropdown-item">Expert FrontEnd</a>
                          <a href="#" class="dropdown-item">Contact Support</a>
                        </div>
                      </li>
                      <li class="nav-item"><a href="#" class="nav-link">Support</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                  <div class="header-right-info">
                    <ul class="nav navbar-nav mai-top-nav header-right-menu">
<!--                      Message icon omitted                    -->
<!--                      Notification icon omitted               -->
                      <li class="nav-item">
                        <a href="#" data-toggle="dropdown" role="button" aria-expanded="false" class="nav-link dropdown-toggle">
                          <img src="@/assets/images/people/pro4.jpg" alt="">
                          <span class="admin-name">Prof.Anderson</span>
                          <i class="fa fa-angle-down edu-icon edu-down-arrow"></i>
                        </a>
                        <ul role="menu" class="dropdown-header-top author-log dropdown-menu animated zoomIn">
                          <li><a href="#"><span class="edu-icon edu-home-admin author-log-ic"></span>My Account</a>
                          </li>
                          <li><a href="#"><span class="edu-icon edu-user-rounded author-log-ic"></span>My Profile</a>
                          </li>
                          <li><a href="#"><span class="edu-icon edu-money author-log-ic"></span>User Billing</a>
                          </li>
                          <li><a href="#"><span class="edu-icon edu-settings author-log-ic"></span>Settings</a>
                          </li>
                          <li><a href="#"><span class="edu-icon edu-locked author-log-ic"></span>Log Out</a>
                          </li>
                        </ul>
                      </li>
<!--                      setting icon and its sub menu omitted   -->
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Mobile Menu start -->
    <mobileMenuArea/>
    <!-- Mobile Menu end -->
    <breadcrumbs/>
  </div>
</template>

<script>
import mobileMenuArea from './sub-components/mobileMenuArea'
import breadcrumbs from './sub-components/breadcrumbs'
export default {
name: "headerAdvanceArea",
  data(){
  return{
    test: false
  }
  },
  methods: {
    changeNav() {
      this.test = !this.test
      console.log('test = ', this.test)
      this.$emit('changeNav', this.test)

    }
  },
  components: {
    mobileMenuArea,
    breadcrumbs
  }
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
//@import "src/assets/css/educate-custon-icon";

.header-top-menu ul, .header-right-info ul{
  display: inline;
}
.header-top-area {
  position: fixed;
  z-index: 99;
  left: 200px;
  right: 0;
  top: 0;
  margin: 0 auto;
  transition: all 0.3s;
  background: #006DF0;
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



.menu-switcher-pro {
  transition: all .4s ease 0s;
}
.menu-switcher-pro button {
  background: none;
  border: none;
}
.bar-button-pro {
  margin: 13px 0px;
  font-size: 16px;
  color: #fff;
}
button, [type="button"], [type="reset"], [type="submit"] {
  -webkit-appearance: button;
}
.btn-info {
  color: #fff;
  background-color: #5bc0de;
  border-color: #46b8da;
}
.btn {
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  touch-action: manipulation;
  cursor: pointer;
  padding: 6px 12px;
  line-height: 1.42857143;
  border-radius: 4px;
  user-select: none;
}
button, select {
  text-transform: none;
  overflow: visible;
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
/*menu div start*/


.header-top-menu .navbar-nav>li>a {
  padding: 20px 20px;
  color: #fff;
  font-size: 14px;
}

a:visited, a:link, a:active {
  text-decoration: none;
}
a {
  transition: all 0.3s ease 0s;
  text-decoration: none;
}
a {
  background-color: transparent;
}

.header-top-menu .navbar-nav>li a .angle-down-topmenu {
  margin-left: 4px;
}
.fa {
  display: inline-block;
  font: normal normal normal 14px/1 FontAwesome;
  font-size: inherit;
  text-rendering: auto;
  -webkit-font-smoothing: antialiased;
}
.header-top-menu .navbar-nav>li .dropdown-menu{
  background: #fff;
  border: 0px solid rgba(0,0,0,.15);
  box-shadow: 0 1px 4px rgb(0 0 0);
}
.navbar-nav>li>.dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
@media (prefers-reduced-motion){
  .animated {
    animation: unset!important;
    transition: none!important;
  }
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 5px 0;
  margin: 2px 0 0;
  font-size: 14px;
  text-align: left;
  list-style: none;
  border-radius: 4px;
}
.header-top-menu .navbar-nav>li .dropdown-menu a {
  padding: 10px 20px;
  display: block;
  color: #303030;
}


/*prof anderson div*/


.header-right-info .navbar-nav {
  float: right;
  padding-top: 7px;
  /*padding: 17px 0px;*/
}


.header-right-info ul.header-right-menu li {
  display: inline-block;
}
@media (min-width: 768px){
  .navbar-nav>li {
    float: left;
  }
  .nav>li {
    position: relative;
    display: block;
  }
  .dropdown{
    position: relative;
  }
}
.indicator-ms {
  background: #fff;
}
.indicator-ms {
  position: absolute;
  height: 5px;
  width: 5px;
  background: #03a9f4;
  border-radius: 50%;
  top: -5px;
  right: -7px;
}
.nav>li>a>img {
  max-width: none;
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
}
img {
  border: 0;
}
.header-right-info .admin-name {
  display: inline-block;
  color: #fff;
  font-size: 16px;
  position: relative;
  top: 3px;
  margin-left: 5px;
}
.header-right-info ul.header-right-menu li .dropdown-header-top.author-log li {
  display: block;
}
/*.header-right-info ul.header-right-menu li {*/
/*  display: inline-block;*/
/*}*/
.header-right-info ul.header-right-menu li .dropdown-header-top.author-log li a {
  padding: 10px 20px;
  display: block;
  color: #303030;
  font-size: 14px;
}
.dropdown-menu>li>a {
  display: block;
  padding: 3px 20px;
  clear: both;
  font-weight: 400;
  line-height: 1.42857143;
  color: #333;
  white-space: nowrap;
}
.header-right-info ul.header-right-menu li .dropdown-header-top.author-log li .author-log-ic {
  margin-right: 10px;
}
.header-right-info ul.header-right-menu li.open .author-log {
  opacity: 1;
  top: 170%;
  transition: all 0.5s ease 0s;
  visibility: visible;
}
.header-right-info ul.header-right-menu li .dropdown-header-top.author-log {
  width: 200px;
  padding: 10px 0px;
}
.author-log{
  background: #fff;
}
.header-right-info ul.header-right-menu li .author-log {
  left: -2px;
}
.header-right-info ul.header-right-menu li .author-log {
  position: absolute;
  top: 160%;
  left: -70px;
  width: 330px;
  background: #343434;
  text-align: left;
  opacity: 0;
  transition: all 0.5s ease 0s;
  visibility: hidden;
  z-index: 999;
}
.header-right-info .navbar-nav>li .dropdown-menu {
  border: 0px solid #ccc;
  border: 0px solid rgba(0,0,0,.15);
  -webkit-box-shadow: 0 1px 4px rgb(0 0 0);
  box-shadow: 0 1px 4px rgb(0 0 0);
}
.navbar-nav>li>.dropdown-menu {
  margin-top: 0;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
.open>.dropdown-menu {
  display: block;
}
.indicator-nt {
  background: #fff;
  position: absolute;
  height: 5px;
  width: 5px;
  background: #03a9f4;
  border-radius: 50%;
  top: -5px;
  right: 0px;
}

.header-right-info .nav>li>a>img {
  width: 26px;
  border-radius: 50%;
}
.nav>li>a>img {
  max-width: none;
}
img {
  /*max-width: 100%;*/
  height: auto;
}
audio, canvas, iframe, img, svg, video {
  vertical-align: middle;
}
img {
  border-style: none;
}


</style>