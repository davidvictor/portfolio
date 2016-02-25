/******/!function(e){function n(t){if(i[t])return i[t].exports;var s=i[t]={exports:{},id:t,loaded:!1};return e[t].call(s.exports,s,s.exports,n),s.loaded=!0,s.exports}// webpackBootstrap
/******/
var i={};return n.m=e,n.c=i,n.p="",n(0)}([function(e,n,i){"use strict";var t=i(1),s=i(2),a=i(3),l=i(4),c=i(5),o=i(6),r=i(7),d=i(8),g=i(9),m=i(10),v=i(11),p=i(12);angular.module("portfolio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","foundation","foundation.dynamicRouting","foundation.dynamicRouting.animations","chocolat","hj.scrollMagic","duScroll","ngDisableScroll","angular-google-analytics"]).config(t.config).config(s.routerConfig).run(a.runBlock).controller("MainController",r.MainController).controller("VetOnDemandController",d.VetOnDemandController).controller("ArchiveController",g.ArchiveController).controller("ContactController",m.ContactController).directive("verticalMenu",l.MenuDirective).directive("scrollMenu",c.ScrollMenuDirective).directive("webfontLoader",o.webfontLoader).directive("repeatComplete",v.repeatComplete).directive("repeatEndEmit",p.repeatEndEmit)},function(e,n){"use strict";function i(e,n){"ngInject";e.debugEnabled(!0),n.logAllCalls(!0).setAccount("UA-74237418-1").useECommerce(!1,!1)}i.$inject=["$logProvider","AnalyticsProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.config=i},function(e,n){"use strict";function i(e,n){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("about",{url:"/about",templateUrl:"app/pages/about/about.html",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("work",{url:"/work",templateUrl:"app/pages/work/work.html"}).state("vetondemand",{url:"/work/vetondemand",templateUrl:"app/portfolio/vetondemand/vetondemand.html",controller:"VetOnDemandController",controllerAs:"vetondemand",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("archive",{url:"/work/archive",templateUrl:"app/portfolio/archive/archive.html",controller:"ArchiveController",controllerAs:"archive",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("contact",{url:"/contact",templateUrl:"app/pages/contact/contact.html",controller:"ContactController",controllerAs:"contact",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}),n.otherwise("/")}i.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(n,"__esModule",{value:!0}),n.routerConfig=i},function(e,n){"use strict";function i(e,n,i){"ngInject";i.debug("runBlock end"),e.$state=n}i.$inject=["$rootScope","$state","$log"],Object.defineProperty(n,"__esModule",{value:!0}),n.runBlock=i},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(){"ngInject";var e={restrict:"E",controller:a,controllerAs:"vm",bindToController:!0,templateUrl:"app/components/menu/menu.html"};return e}Object.defineProperty(n,"__esModule",{value:!0});var s=function(){function e(e,n){for(var i=0;i<n.length;i++){var t=n[i];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(e,t.key,t)}}return function(n,i,t){return i&&e(n.prototype,i),t&&e(n,t),n}}();n.MenuDirective=t;var a=function(){function e(n,t,s){"ngInject";i(this,e),this.DEFAULT_BULLET_ICON="fa-circle-o",this.DEFAULT_ANIMATION={duration:.4,timing:"ease"},this.toggleMenu=!1,this.config={data:[{label:"About",location:"about",callback:function(){}},{label:"Work",location:"",children:[{label:"Vet On Demand",location:"vetondemand",callback:function(){}},{label:"Archive",location:"archive",callback:function(){}}]},{label:"Contact",location:"contact",callback:function(){}}]},this.$rootScope=n,this.$location=t,this.$element=s}return e.$inject=["$rootScope","$location","$element"],s(e,[{key:"getRoute",value:function(e){return""==e.location?!1:e.location}},{key:"toggle",value:function(e,n){return e.stopPropagation(),this.hasChildren(n)?n.active=!n.active:n.callback&&n.callback(n),!1}},{key:"hasChildren",value:function(e){return!!e.children}},{key:"getItemIcon",value:function(e){return e.icon||this.getDefaultIcon()}},{key:"getDefaultIcon",value:function(){var e=this.DEFAULT_BULLET_ICON;return this.config["default"]&&this.config["default"].icon&&(e=this.config["default"].icon),e}},{key:"getId",value:function(e){var n=this.id||"";return n+=e}},{key:"isToggleMenu",value:function(){return this.toggleMenu=this.toggleMenu?!1:!0,this.toggleMenu}}]),e}()},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function t(){"ngInject";var e={restrict:"EA",scope:{},controller:s,controllerAs:"sm",templateUrl:"app/components/scrollmenu/scrollmenu.html"};return e}Object.defineProperty(n,"__esModule",{value:!0}),n.ScrollMenuDirective=t;var s=function a(){"ngInject";i(this,a),this.config=[{label:"Overview",location:"overview"},{label:"Research",location:"research"},{label:"Insight",location:"insight"},{label:"Branding",location:"branding"},{label:"Mobile",location:"mobile"},{label:"Web",location:"web"},{label:"Marketing",location:"marketing"}]}},function(e,n){"use strict";function i(e,n){"ngInject";function i(i,t,s){function a(){e.$broadcast("webfontLoader.loaded")}function l(){e.$broadcast("webfontLoader.error")}n.WebFont.load({custom:{families:[s.webfontLoader]},active:a,inactive:l})}var t={link:i};return t}i.$inject=["$rootScope","$window"],Object.defineProperty(n,"__esModule",{value:!0}),n.webfontLoader=i},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function s(){"ngInject";i(this,s)};n.MainController=t},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function s(){"ngInject";i(this,s),this.colors=[{name:"purple",hex:"#49287a",hsl:["27","28%","51%"]},{name:"gold",hex:"#efa343",hsl:["27","28%","51%"]},{name:"grey1",hex:"#ededed",hsl:["27","28%","51%"]},{name:"gunmetal",hex:"#212121",hsl:["27","28%","51%"]}],this.ios=[{screen:"receipt",src:"assets/images/vetondemand/renders-v2/full/receipt-gold-front.png",direction:"left"},{screen:"home",src:"assets/images/vetondemand/renders-v2/full/home-gold-front.png",direction:"left"},{screen:"profile-vet",src:"assets/images/vetondemand/renders-v2/full/profile-vet-gold-front.png",direction:"right"},{screen:"signup",src:"assets/images/vetondemand/renders-v2/full/signup-gold-front.png",direction:"right"}],this.android=[{screen:"queue",src:"assets/images/vetondemand/renders-android/android-angle.png",direction:"right"},{screen:"call",src:"assets/images/vetondemand/renders-android/android-front.png",direction:"left"},{screen:"menu",src:"assets/images/vetondemand/renders-android/android-angle-right.png",direction:"left"}],this.web=[{src:"assets/images/vetondemand/web/Dashboard@2x.jpg",thumb:"assets/images/vetondemand/web/dashboard-left.png"},{src:"assets/images/vetondemand/web/video@2x.jpg",thumb:"assets/images/vetondemand/web/call-right.png"}],this.photos=[{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/brand-1.jpg",thumb:"assets/images/vetondemand/photo/brand-1-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/girl-window-dog-hug.jpg",thumb:"assets/images/vetondemand/photo/girl-window-dog-hug-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/vet-office-dog-examine.jpg",thumb:"assets/images/vetondemand/photo/vet-office-dog-examine-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/dog-bed-covers-feet.jpg",thumb:"assets/images/vetondemand/photo/dog-bed-covers-feet-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/cat-hold-hands.jpg",thumb:"assets/images/vetondemand/photo/cat-hold-hands-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/vetondemand/photo/older-woman-with-puppy.jpg",thumb:"assets/images/vetondemand/photo/older-woman-with-puppy-sm.jpg"}],this.fonts=[{name:"Proxima Nova",weight:"Regular","class":"proxima weight-300"},{name:"Gotham Rounded",weight:"Bold","class":"gotham weight-700"}],this.logos=[{name:"dotnet",desc:""},{name:"node",desc:""},{name:"react",desc:""},{name:"jquery",desc:""},{name:"sass",desc:""},{name:"bower",desc:""},{name:"grunt",desc:""},{name:"handlebars",desc:""},{name:"mysql",desc:""},{name:"git",desc:""},{name:"github",desc:""},{name:"googleanalytics",desc:""},{name:"cloudflare",desc:""},{name:"ironio",desc:""},{name:"mandril",desc:""},{name:"newrelic",desc:""},{name:"stripe",desc:""},{name:"aws-cloud-front",desc:""},{name:"aws-ec2",desc:""},{name:"aws-elastic-load-balancing",desc:""},{name:"aws-rds",desc:""},{name:"aws-route-53",desc:""},{name:"aws-s3",desc:""},{name:"aws-sqs",desc:""}],this.config={container:window,initialZoomState:null,imageSize:"cover",fullScreen:!1,loop:!1,linkImages:!0,duration:300,setTitle:"",separator2:"/",setIndex:0,firstImage:0,lastImage:!1,currentImage:!1,initialized:!1,timer:!1,timerDebounce:!1},this.configalt={container:window,initialZoomState:null,imageSize:"contain",fullScreen:!1,loop:!1,linkImages:!0,duration:300,setTitle:"",separator2:"/",setIndex:0,firstImage:0,lastImage:!1,currentImage:!1,initialized:!1,timer:!1,timerDebounce:!1},this.instance={}};n.VetOnDemandController=t},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function s(){"ngInject";i(this,s),this.config={container:window,initialZoomState:null,imageSize:"contain",fullScreen:!1,loop:!1,linkImages:!0,duration:300,setTitle:"",separator2:"/",setIndex:0,firstImage:0,lastImage:!1,currentImage:!1,initialized:!1,timer:!1,timerDebounce:!1},this.instance={},this.tween="10%",this.imgPath="assets/images/archive/",this.archives=[{id:"lifeisbeautiful",client:"Life is Beautiful",role:"Branding / Web / Mobile / Print",images:[{src:"lib-11.jpg",thumb:"lib-11-sm.jpg"},{src:"lib-12.jpg"},{src:"lib-16.jpg"},{src:"lib-web.png"},{src:"lib-app-1.PNG"},{src:"lib-app-2.PNG"},{src:"lib-app-3.PNG"},{src:"lib-app-4.PNG"},{src:"lib-app-5.PNG"},{src:"lib-app-6.PNG"},{src:"lib-09.jpg"},{src:"lib-13.jpg"},{src:"lib-14.jpg"},{src:"lib-15.jpg"},{src:"lib-01.jpg"},{src:"lib-02.jpg"},{src:"lib-07.jpg"}]},{id:"cherub",client:"Cherub",role:"Logo / Art Direction",images:[{src:"cherub.jpg",thumb:"cherub-sm.jpg"}]},{id:"classic",client:"Classic Management",role:"Branding / Print / Art Direction",images:[{src:"classic-alt.jpg",thumb:"classic-alt-sm.jpg"},{src:"classic.jpg",thumb:"classic-sm.jpg"}]},{id:"medicineman",client:"The Medicine Man",role:"Branding / Web / Print",images:[{src:"medicine-man.jpg",thumb:"medicine-man-sm.jpg"},{src:"medicine-man-full.jpg"},{src:"medicine-man-brand.png"}]},{id:"huntridge",client:"Huntridge Las Vegas",role:"Logo / Branding",images:[{src:"huntridge-2.jpg",thumb:"huntridge-2-sm.jpg"},{src:"huntridge-1.jpg",thumb:"huntridge-1-sm.jpg"}]},{id:"feast",client:"Feast",role:"Branding / Web",images:[{src:"feast.jpg",thumb:"feast-sm.jpg"},{src:"feast-print.jpg"}]},{id:"gro",client:"Gro Furniture",role:"Branding / Art Direction / Web",images:[{src:"gro.jpg",thumb:"gro-sm.jpg"},{src:"gro-web.png"},{src:"gro-ipad-1.png"},{src:"gro-photo.jpg"}]},{id:"mrcs",client:"MRCS Real Estate",role:"Branding / Print",images:[{src:"mcrs.jpg",thumb:"mcrs-sm.jpg"},{src:"mcrs-full.jpg"}]},{id:"flexawn",client:"Flexawn",role:"Branding / Web",images:[{src:"flexawn.jpg",thumb:"flexawn-sm.jpg"}]}]};n.ArchiveController=t},function(e,n){"use strict";function i(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(n,"__esModule",{value:!0});var t=function s(){"ngInject";i(this,s)};n.ContactController=t},function(e,n){"use strict";function i(e){"ngInject";function n(n,t){var s=++i;n.attr("repeat-complete-id",s),n.removeAttr("repeat-complete");var a=t.repeatComplete,l=n.parent(),c=l.scope()||e,o=c.$watch(function(){var e=l.children("*[ repeat-complete-id = '"+s+"' ]:last");if(e.length){var n=e.scope();n.$last&&(o(),n.$eval(a))}})}var i=0;return{compile:n,priority:1001,restrict:"A"}}i.$inject=["$rootScope"],Object.defineProperty(n,"__esModule",{value:!0}),n.repeatComplete=i},function(e,n){"use strict";function i(){"ngInject";return function(e){e.$last&&e.$emit("RepeatEnd")}}Object.defineProperty(n,"__esModule",{value:!0}),n.repeatEndEmit=i}]),angular.module("portfolio").run(["$templateCache",function(e){e.put("app/main/main.html",'<figure class="la"><span></span></figure>'),e.put("app/components/menu/menu.html",'<nav class="vertical-menu grid-block small-12"><div class="grid-content collapse"><div class="logo"><a ui-sref="home"><span></span></a></div><ul class="vertical menu-bar"><li ui-sref-active="active" ng-repeat="item in vm.config.data track by $index"><a ui-sref="{{item.location}}" ng-click="vm.toggleMenu = !vm.toggleMenu" ng-if="vm.getRoute(item)"><span>{{::item.label}}</span> <i class="fa pull-right" ng-class="{\'fa-chevron-left\' : !item.active, \'fa-chevron-down\' : item.active}" ng-if="vm.hasChildren(item)"></i></a> <a ng-click="vm.toggle($event, item)" ng-if="!vm.getRoute(item)"><span>{{::item.label}}</span></a><ul class="vertical menu-bar sbm-collapse-{{::vm.getId($index)}}" ng-if="vm.hasChildren(item) && item.active"><li ng-repeat="child in item.children track by $index" ui-sref-active="active"><a ui-sref="{{child.location}}" ng-click="vm.toggleMenu = !vm.toggleMenu"><span>{{::child.label}}</span></a></li></ul></li></ul></div></nav><div class="grid-block small-12"><div class="grid-content"><div class="geo geo-29"></div></div></div>'),e.put("app/components/scrollmenu/scrollmenu.html",'<nav class="scroll-menu grid-block small-12"><div class="grid-content collapse"><ul class="vertical menu-bar" du-scroll-container="site-container"><li ng-repeat="item in sm.config" du-scrollspy="{{item.location}}"><a du-smooth-scroll="" href="#{{item.location}}"><span>{{item.label}}</span></a></li></ul></div></nav>'),e.put("app/pages/about/about.html",'<figure class="palms"><span></span></figure><div class="grid-block small-items-center justify-start self-stretch content-center about-content"><div class="grid-block wrap small-12 medium-8 large-8"><div class="grid-content span-12 p-b-m p-l-h txt-center"><p class="large p-l-t m-b-s">My name is David Victor. I am a <a href="https://medium.com/fullstack-design-by-xpos-it/the-rise-of-the-full-stack-designer-and-the-tools-he-uses-3daf015eb3fc" target="_blank"><strong>full&nbsp;stack</strong>&nbsp;designer</a> living&nbsp;in Venice,&nbsp;California. I&nbsp;practice a holistic design philosophy and believe our greatest ideas are&nbsp;yet&nbsp;to&nbsp;come.</p><p class="small p-l-t"><a class="m-r-s" href="https://www.linkedin.com/in/dvictor" target="_blank">linkedIn</a> <a class="" href="https://github.com/davidvictor" target="_blank">gitHub</a></p></div><div class="grid-content span-12 txt-center p-b-m p-l-h"></div></div></div>'),e.put("app/pages/contact/contact.html",'<figure class="palms2"><span></span></figure><div class="grid-block small-items-center items-end justify-start self-stretch content-center contact-content"><div class="grid-block small-12 medium-8 large-7"><div class="grid-content txt-center"><p class="p-b-l large p-l-h"><em>I am currently available for hire.</em><br>Send inquiries to: <a href="mailto:sup@techbro.biz">sup&#64;techbro.biz</a></p></div></div></div>'),e.put("app/portfolio/archive/archive.html",'<div class="grid-block small-12 noscroll lax-item" ng-repeat="item in archive.archives track by $index"><div class="grid-content noscroll lax-container" sm-scene="tween-{{item.id}}" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a ng-if="$first" class="chocolat-image {{item.id}}" href="assets/images/archive/{{photo.src}}" sm-tween="tween-{{item.id}}" vars="{y: \'{{archive.tween}}\',scale:1, force3D:true}" ng-repeat-start="photo in item.images track by $index"><img ng-cloak="" ng-src="{{archive.imgPath + photo.thumb || \'\' }}" alt=""></a> <a ng-if="!$first" class="chocolat-image {{item.id}}" href="assets/images/archive/{{photo.src}}" ng-repeat-end=""></a></div><div class="lax-deets grid-block nowrap" ng-cloak=""><div class="grid-block"><div class="grid-content collapse small-6"><h5 class="archive-data m-t-t"><small>{{item.client}}</small></h5></div><div class="grid-content collapse small-6 text-right"><p class="tiny weight-500 uppercase">{{item.role}}</p></div></div></div></div></div>'),e.put("app/portfolio/vetondemand/vetondemand.html",'<span webfont-loader="gotham"></span> <span webfont-loader="proxima"></span><scroll-menu></scroll-menu><div class="grid-block wrap small-12" id="hero"><div class="grid-block align-center self-stretch small-12 noscroll noverflow section-block block-fullscreen" sm-scene="hero" duration="150%" offset="0" trigger-hook="0"><div class="hero-bg" sm-tween="hero" vars="{y:\'20%\'}"></div><div class="grid-block noscroll items-center medium-justify-center section-container small-12"><div class="grid-content small-8 text-center fade-in"><img src="assets/images/vetondemand/brand/logo-h-white.svg" width="200px" alt=""></div></div><span sm-scene="phone" duration="150%" offset="0" trigger-hook="0"></span><div class="hero-phone-container phone-history" sm-tween="phone" vars="{yPercent:\'20%\'}"><span class="render-huge history gold right"></span></div><span sm-scene="phone" duration="150%" offset="0" trigger-hook="0"></span><div class="hero-phone-container phone-call" sm-tween="phone" vars="{yPercent:\'20%\'}"><span class="render-huge call gold right"></span></div></div></div><div class="grid-block wrap small-12" id="overview"><div class="grid-block align-center self-stretch small-12 noscroll section-block p-t-l"><div class="grid-block noscroll align-center items-center section-container small-12 medium-9 large-8 p-b-d"><div class="grid-content"><p class="tiny uppercase m-t-m"><strong>Product</strong></p><p class="small">Vet On Demand is the first mobile application to provide personalized, real time access to veterinary advice and recommendations through the power of live&nbsp;video&nbsp;conferencing.</p><p class="tiny uppercase m-t-t"><strong>Role</strong></p><p class="tiny weight-500 uppercase">CoFounder / Design / UI+UX / Frontend</p></div><div class="grid-content"></div></div></div></div><div class="grid-block wrap small-12" id="research"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-research"></span><h4 class="section-heading">Research</h4><h6 class="fade-in">Dog whispering was only the beginning...</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-center items-center section-container small-12 medium-10 large-8 p-b-l"><div class="grid-content small-12 text-center"><img class="research-chart" src="assets/images/vetondemand/chart-2.png" width="400px" alt=""></div><div class="grid-content small-12 text-center"><h6 class="section-heading centered block">There are plenty of Vets</h6><p class="small">The U.S. supply of veterinarians in 2012 was 90,200, and that supply exceeded the demand for veterinary services by about 11,250 full-time&nbsp;equivalent&nbsp;veterinarians.</p></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-center items-center section-container small-12 medium-10 large-8 p-b-l"><div class="grid-content small-12 text-center"><img class="research-chart" src="assets/images/vetondemand/chart-1.png" width="400px" alt=""></div><div class="grid-content small-12 text-center"><h6 class="section-heading centered block">incomes are falling</h6><p class="small">Over the past decade, veterinarians have seen their wages fall. Increasing prices from pharmaceutical companies and the ever advancing march of technology have cut even deeper into&nbsp;practices&nbsp;nationwide.</p></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-7 p-b-l"><div class="grid-content text-center"><h5 class="p-h-l blockquote">72% of cats and 42% of dogs only see a vet either once or not&nbsp;at&nbsp;all&nbsp;annually</h5></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center content-center section-container wrap small-12 medium-10 p-b-l" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content small-6"><span class="section-subheading">Prices are rising</span><p class="small">Going to the vet has not been getting less expensive. Prices have risen steadily at or faster than inflation for two decades. Americans will spend over 60 billion this year on their pets, more than a third of that going to veterinary care.</p></div><div class="grid-content small-6"><span class="section-subheading">People are busy</span><p class="small">Going into a brick and mortar vet clinic takes time. If you have to leave work, going home and back again with the animal adds even more stress to an already stressful situation. Being able to access key services via our devices is expected today.</p></div></div></div></div><div class="grid-block wrap small-12" id="insight"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-insight"></span><h4 class="section-heading">Insight</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Problem</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block snug-section"><div class="grid-block noscroll align-center items-center content-center section-container wrap small-12 medium-9 large-6" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content small-12 text-center typeset"><p class="">Our pets are not getting the care they need despite there being more than enough vets who are trained and ready to provide&nbsp;their&nbsp;services.</p><p class="">The traditional model for veterinary care is not equiped to provide the intermediary care that is lacking in so&nbsp;many&nbsp;pet&nbsp;households.</p></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Solution</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block snug-section"><div class="grid-block noscroll align-center items-center content-center section-container wrap small-12 medium-9 large-6" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content small-12 text-center typeset"><p class="">Vet On Demand facilitates trusted, convenient, and affordable access to licensed veterinarians who provide the advice and recommendations to those who would otherwise&nbsp;forgo&nbsp;it.</p><p class="">By allowing on demand economics into a traditionally closed system, we increase the level and scope of care our pets receive while the size of the market grows to its&nbsp;full&nbsp;potential.</p></div></div></div></div><div class="grid-block wrap small-12" id="branding"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-branding"></span><h4 class="section-heading">Branding</h4><h6 class="fade-in">Trusted. Convenient. Affordable.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Logo</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-spaced items-center section-container small-12 medium-10 large-9"><div class="grid-content small-12 medium-6"><div class="logo-h"></div></div><div class="grid-content small-12 medium-6"><div class="logo-v"></div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Color</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-spaced items-center section-container small-12 medium-9 large-8"><div class="grid-content" ng-repeat="color in vetondemand.colors track by $index"><div class="color-card {{color.name}}"><div class="color-preview"></div><div class="color-shades"></div></div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Type</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll wrap align-center large-align-spaced items-start section-container small-12 medium-11 large-9"><div class="grid-content small-12 medium-7 large-6 m-b-m" ng-repeat="font in vetondemand.fonts track by $index"><span class="section-subheading">{{font.name}} <span class="iota text-light">{{font.weight}}</span></span><div class="waterfall {{font.class}} m-b-s">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789!@#$%^&*();:,.?</div><div class="tqbfjotld {{font.class}}">The quick brown fox jumped over the lazy dog.</div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Photo</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block small-12 medium-10 noscroll wrap align-spaced items-center section-container photo-grid" chocolat="" config="vetondemand.config" instance="instance"><div class="grid-content {{photo.size}}" ng-repeat="photo in vetondemand.photos track by $index"><a class="photo-grid-item chocolat-image {{photo.id}}" href="{{photo.src}}" style="background-image:url(\'{{photo.thumb}}\')"></a></div></div></div></div><div class="grid-block wrap small-12" id="mobile"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-mobile"></span><h4 class="section-heading">Mobile</h4><h6 class="fade-in">It\'s like having a vet in your pocket.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">iOS</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block phone-render-container wrap noscroll align-spaced items-center section-container small-12 medium-12 large-10" chocolat="" config="vetondemand.configalt" instance="instance"><div class="grid-block small-12 medium-3" ng-repeat="render in vetondemand.ios track by $index"><div class="grid-content collapse"><a href="{{render.src}}" class="render-large {{render.screen}} gold {{render.direction}} chocolat-image"></a></div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Android</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block phone-render-container wrap noscroll align-spaced items-center section-container small-12 medium-12 large-10" chocolat="" config="vetondemand.configalt" instance="instance"><div class="grid-block small-12 medium-3" ng-repeat="arender in vetondemand.android track by $index"><div class="grid-content collapse"><a href="{{arender.src}}" class="render-large android android-{{arender.screen}} {{arender.direction}} chocolat-image"></a></div></div></div></div></div><div class="grid-block wrap small-12" id="web"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-web"></span><h4 class="section-heading">Web</h4><h6 class="fade-in">Instantly scalable, always available.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">User Interface</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block phone-render-container wrap noscroll align-spaced items-center section-container small-12 medium-12 large-10" chocolat="" config="vetondemand.configalt" instance="instance"><div class="grid-block small-12 medium-6" ng-repeat="screen in vetondemand.web track by $index"><div class="grid-content collapse"><a href="{{screen.src}}" class="web-large chocolat-image" style="background-image: url({{screen.thumb}});"></a></div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">The Stack</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-center items-center section-container small-10 medium-9 large-10"><div class="grid-content small-6 medium-3 large-2" ng-repeat="logo in vetondemand.logos track by $index"><span class="stack-logo {{logo.name}}"></span></div></div></div></div><div class="grid-block wrap small-12 m-b-d" id="marketing"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><span class="icon icon-heading icon-marketing"></span><h4 class="section-heading">Marketing</h4><h6 class="fade-in">Not a four letter word.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-center items-center section-container small-10 medium-9 large-10"><div class="grid-content small-6 medium-3 text-center"><p class="coming-soon"><em>Coming soon...</em></p></div></div></div></div>');
}]);
//# sourceMappingURL=../maps/scripts/app-bfbf36b363.js.map
