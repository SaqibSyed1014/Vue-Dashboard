import { createApp } from 'vue';
import App from './App.vue';
// import './assets/js/saqib'
// import './assets/metismenu'
// import './assets/js/bootstrap.min'
// import './assets/js/card'
// import './assets/js/e-payment'
// import './assets/js/jquery-price-slider'
// import './assets/js/jquery.maskedinput.min'
// import './assets/js/jquery.meanmenu'
// import './assets/js/jquery.payform.min'
// import './assets/js/jquery.scrollUp.min'
// import './assets/js/jquery.sticky'
// import './assets/js/jquery-price-slider'
// import './assets/js/masking-active'
// import './assets/js/owl.carousel.min'
// import './assets/js/plugins'
// import './assets/js/tab'
// import './assets/js/tawk-chat'
// import './assets/js/wow.min'


import 'bootstrap';
import './assets/app.scss';

import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
// import { fas } from '@fortawesome/free-solid-svg-icons'
// import { far } from '@fortawesome/free-regular-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
//
// library.add(fab, fas, far);
//
// createApp(App).component('font-awesome-icon', FontAwesomeIcon);

// import { library } from '@fortawesome/fontawesome-svg-core'
// import { faUserSecret } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// library.add(faUserSecret)
// createApp(App).component('font-awesome-icon', FontAwesomeIcon)

createApp(App).config.productionTip = false

createApp(App).mount('#app')

//js
// n(s.triggerElement).attr("aria-expanded","true"),o(this.element).find(s.parentTrigger+"."+f).has(s.subMenu).children(s.subMenu).addClass(d+" "+h),o(this.element).find(s.parentTrigger).not("."+f).has(s.subMenu).children(s.subMenu).addClass(d),o(this.element).find(s.parentTrigger).has(s.subMenu).children(s.triggerElement).on(u.CLICK_DATA_API,function(e){var n=o(this),t=n.parent(s.parentTrigger),i=t.siblings(s.parentTrigger).children(s.triggerElement),r=t.children(s.subMenu);s.preventDefault&&e.preventDefault(),"true"!==n.attr("aria-disabled")&&(t.hasClass(f)?(n.attr("aria-expanded","false"),a.hide(r)):(a.show(r),n.attr("aria-expanded","true"),s.toggle&&i.attr("aria-expanded","false")),s.onTransitionStart&&s.onTransitionStart(e))})},e.show=function(e){var n=this;if(!this.transitioning&&!o(e).hasClass(c)){var t=o(e),i=o.Event(u.SHOW);if(t.trigger(i),!i.isDefaultPrevented()){if(t.parent(this.config.parentTrigger).addClass(f),this.config.toggle){var r=t.parent(this.config.parentTrigger).siblings().children(this.config.subMenu+"."+h);this.hide(r)}t.removeClass(d).addClass(c).height(0),this.setTransitioning(!0);t.height(e[0].scrollHeight).one(s.TRANSITION_END,function(){n.config&&n.element&&(t.removeClass(c).addClass(d+" "+h).height(""),n.setTransitioning(!1),t.trigger(u.SHOWN))}).mmEmulateTransitionEnd(350)}}},e.hide=function(e){var n=this;if(!this.transitioning&&o(e).hasClass(h)){var t=o(e),i=o.Event(u.HIDE);if(t.trigger(i),!i.isDefaultPrevented()){t.parent(this.config.parentTrigger).removeClass(f),t.height(t.height())[0].offsetHeight,t.addClass(c).removeClass(d).removeClass(h),this.setTransitioning(!0);var r=function(){n.config&&n.element&&(n.transitioning&&n.config.onTransitionEnd&&n.config.onTransitionEnd(),n.setTransitioning(!1),t.trigger(u.HIDDEN),t.removeClass(c).addClass(d))};0===t.height()||"none"===t.css("display")?r():t.height(0).one(s.TRANSITION_END,r).mmEmulateTransitionEnd(350)}}},e.setTransitioning=function(e){this.transitioning=e},e.dispose=function(){o.removeData(this.element,g),o(this.element).find(this.config.parentTrigger).has(this.config.subMenu).children(this.config.triggerElement).off("click"),this.transitioning=null,this.config=null,this.element=null},r.jQueryInterface=function(i){return this.each(function(){var e=o(this),n=e.data(g),t=a({},l,e.data(),"object"==typeof i&&i?i:{});if(n||(n=new r(this,t),e.data(g,n)),"string"==typeof i){if(void 0===n[i])throw new Error('No method named "'+i+'"');n[i]()}})},r}();return o.fn[e]=r.jQueryInterface,o.fn[e].Constructor=r,o.fn[e].noConflict=function(){return o.fn[e]=t,r.jQueryInterface},r});