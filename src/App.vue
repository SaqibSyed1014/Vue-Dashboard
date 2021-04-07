<template>
      <div v-if="!mobileView" class="left-sidebar-pro">
        <nav id="sidebar">

          <div class="sidebar-header">
            <img class="main-logo" src="./assets/logo.png">
          </div>

          <div class="comment-scrollbar">
            <div class="mCustomScrollBox">
              <div class="mCSB_container">
                <div class="sidebar-nav">
                  <ul class="metismenu">
                    <li class="active">
                      <a class="has-arrow" href="index.html" aria-expanded="true">
                      <span class="educate-icon educate-home icon-wrap">
<!--                        ::before-->
                      </span>

                        <span class="mini-click-non">Education</span>
<!--                                              ::after-->
                      </a>
                    </li>
                    <li>
                      <a title="Landing Page" href="events.html" aria-expanded="false">
                        <span class="educate-icon educate-event icon-wrap sub-icon-mg" aria-hidden="true"></span>
                        <span class="mini-click-non">Event</span></a>
                    </li>
                    <li>
                      <a class="has-arrow" href="all-professors.html" aria-expanded="false">
                        <span class="educate-icon educate-professor icon-wrap"></span>
                        <span class="mini-click-non">Professors</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="all-students.html" aria-expanded="false">
                        <span class="educate-icon educate-student icon-wrap"></span>
                        <span class="mini-click-non">Students</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="all-courses.html" aria-expanded="false">
                        <span class="educate-icon educate-course icon-wrap"></span>
                        <span class="mini-click-non">Courses</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="all-courses.html" aria-expanded="false">
                        <span class="educate-icon educate-library icon-wrap"></span>
                        <span class="mini-click-non">Library</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="all-courses.html" aria-expanded="false">
                        <span class="educate-icon educate-department icon-wrap"></span>
                        <span class="mini-click-non">Departments</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-message icon-wrap"></span>
                        <span class="mini-click-non">Mailbox</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-interface icon-wrap"></span>
                        <span class="mini-click-non">Interface</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-charts icon-wrap"></span>
                        <span class="mini-click-non">Charts</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-data-table icon-wrap"></span>
                        <span class="mini-click-non">Data Tables</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-form icon-wrap"></span>
                        <span class="mini-click-non">Forms Elements</span>
                      </a>
                    </li>
                    <li>
                      <a class="has-arrow" href="mailbox.html" aria-expanded="false">
                        <span class="educate-icon educate-apps icon-wrap"></span>
                        <span class="mini-click-non">App views</span>
                      </a>
                    </li>

                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div id="parent" class="all-content-wrapper" :class="{'open': mobileView}"  >
        <containerFluid/>
        <headerAdvanceArea @changeNav="myLogic"/>
        <analyticSparkleArea/>
        <productSalesArea/>
        <trafficAnalysisArea/>
        <libraryBookArea/>
        <productSalesArea2/>
        <coursesArea/>
        <footerArea/>
      </div>
</template>

<script>
// @import('./main');
// import leftSideBar from './components/leftSideBar'
import containerFluid from './components/containerFluid'
import headerAdvanceArea from './components/headerAdvanceArea'
import analyticSparkleArea from './components/analyticSparkleArea'
import productSalesArea from './components/productSalesArea'
import trafficAnalysisArea from './components/trafficAnalysisArea'
import libraryBookArea from './components/libraryBookArea'
import productSalesArea2 from './components/productSalesArea2'
import coursesArea from './components/coursesArea'
import footerArea from './components/footer'



export default {
  name: 'App',
  data(){
    return{
      mobileView: '',
      val: '',
      styling: {
        marginLeft: '0px'
      }
    }
  },
  methods: {
    myLogic(val){
      this.mobileView = val
      console.log('val = ', val)
      console.log('mobileView = ',this.mobileView)
      var element = document.getElementById("parent");
      element.classList.remove("all-content-wrapper");
    },
    // handleView(){
    //   this.mobileView = window.innerWidth <= 768
    // },
  },
  // created() {
  //   this.handleView()
  // },
  components: {
    // leftSideBar,
    containerFluid,
    headerAdvanceArea,
    analyticSparkleArea,
    productSalesArea,
    trafficAnalysisArea,
    libraryBookArea,
    productSalesArea2,
    coursesArea,
    footerArea
  },
}
</script>

<style scoped lang="scss">
@import "src/assets/responsive";
@import "assets/metismenu/metisMenu.min";
@import "assets/metismenu/metisMenu-vertical";
.open{
  margin-left: 0;
  transition: all 0.3s;
  background-color: #F6F8FA;
  font-size: 14px;
  line-height: 1.42857143;
  border: 5px solid red;
}
.left-sidebar-pro {
  z-index: 9999;
  width: 240px;
}
#sidebar{
  /*border: 1px solid green;*/
  height: 100%;
  min-width: 200px;
  background: #fff;
  color: #fff;
  position: fixed;
  transition: all 0.3s;
  z-index: 999;
  display: block;
}
.sidebar-header{
  text-align: center;
  box-sizing: border-box;
  display: block;
}
img{
  max-width: 20%;
  max-width: 100%;
  height: auto;
  vertical-align: middle;

}
.comment-scrollbar{
  position: relative;
  overflow: visible;
  height: 580px;
}
.mCustomScrollBox{
  max-height: none;
  position: relative;
  overflow: hidden;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
}
.mCSB_container{
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
  width: auto;
  height: auto;
}
.sidebar-nav{
  background: #fff;
}
.metismenu{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}
.metismenu ul{
  padding: 0;
  margin: 0;
  list-style: none;
}
ul{
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
}
.metismenu > li{
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
}
li{
  text-align: -webkit-match-parent;
}
.metismenu a{
  color: #8d9498;
  position: relative;
  display: block;
  padding: 13px 15px;
  outline-width: 0;
  transition: all .3s ease-out;
  font-size: 16px;
  font-weight: 400;
}
a:link{
  text-decoration: none;
}
a {
  background-color: transparent;
}
.icon-wrap {
  margin-right: 5px;
  font-size: 20px;
  color: #303030;
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

/*   Header  */
.all-content-wrapper {
  margin-left: 200px;
  transition: all 0.3s;
  background-color: #F6F8FA;
  font-size: 14px;
  line-height: 1.42857143;
}

</style>
