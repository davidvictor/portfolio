/******/!function(e){function a(i){if(s[i])return s[i].exports;var l=s[i]={exports:{},id:i,loaded:!1};return e[i].call(l.exports,l,l.exports,a),l.loaded=!0,l.exports}// webpackBootstrap
/******/
var s={};return a.m=e,a.c=s,a.p="",a(0)}([function(e,a,s){"use strict";var i=s(1),l=s(2),t=s(3),n=s(4),c=s(5),o=s(6),r=s(7),d=s(8),m=s(9),g=s(10),v=s(11);angular.module("portfolio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","foundation","foundation.dynamicRouting","foundation.dynamicRouting.animations","chocolat","dv.scrollMagic","duScroll"]).config(i.config).config(l.routerConfig).run(t.runBlock).controller("MainController",o.MainController).controller("VetOnDemandController",r.VetOnDemandController).controller("ArchiveController",d.ArchiveController).controller("ContactController",m.ContactController).directive("verticalMenu",n.MenuDirective).directive("scrollMenu",c.ScrollMenuDirective).directive("repeatComplete",g.repeatComplete).directive("repeatEndEmit",v.repeatEndEmit)},function(e,a){"use strict";function s(e){"ngInject";e.debugEnabled(!0)}s.$inject=["$logProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.config=s},function(e,a){"use strict";function s(e,a){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("about",{url:"/about",templateUrl:"app/pages/about/about.html",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("work",{url:"/work",templateUrl:"app/pages/work/work.html"}).state("vetondemand",{url:"/work/vetondemand",templateUrl:"app/portfolio/vetondemand/vetondemand.html",controller:"VetOnDemandController",controllerAs:"vetondemand",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("archive",{url:"/work/archive",templateUrl:"app/portfolio/archive/archive.html",controller:"ArchiveController",controllerAs:"archive",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}).state("contact",{url:"/contact",templateUrl:"app/pages/contact/contact.html",controller:"ContactController",controllerAs:"contact",animation:{enter:"pageScaleIn",leave:"pageScaleOut"}}),a.otherwise("/")}s.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(a,"__esModule",{value:!0}),a.routerConfig=s},function(e,a){"use strict";function s(e,a,s){"ngInject";s.debug("runBlock end"),e.$state=a}s.$inject=["$rootScope","$state","$log"],Object.defineProperty(a,"__esModule",{value:!0}),a.runBlock=s},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function i(){"ngInject";var e={restrict:"E",scope:{},controller:t,controllerAs:"vm",bindToController:!0,templateUrl:"app/components/menu/menu.html"};return e}Object.defineProperty(a,"__esModule",{value:!0});var l=function(){function e(e,a){for(var s=0;s<a.length;s++){var i=a[s];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,s,i){return s&&e(a.prototype,s),i&&e(a,i),a}}();a.MenuDirective=i;var t=function(){function e(a,i,l){"ngInject";s(this,e),this.DEFAULT_BULLET_ICON="fa-circle-o",this.DEFAULT_ANIMATION={duration:.4,timing:"ease"},this.config={data:[{label:"About",location:"about",callback:function(){}},{label:"Work",location:"",children:[{label:"Vet On Demand",location:"vetondemand",callback:function(){}},{label:"Archive",location:"archive",callback:function(){}}]},{label:"Contact",location:"contact",callback:function(){}}]},this.$rootScope=a,this.$location=i,this.$element=l}return e.$inject=["$rootScope","$location","$element"],l(e,[{key:"getRoute",value:function(e){return""==e.location?!1:e.location}},{key:"toggle",value:function(e,a){return e.stopPropagation(),this.hasChildren(a)?a.active=!a.active:a.callback&&a.callback(a),!1}},{key:"hasChildren",value:function(e){return!!e.children}},{key:"getItemIcon",value:function(e){return e.icon||this.getDefaultIcon()}},{key:"getDefaultIcon",value:function(){var e=this.DEFAULT_BULLET_ICON;return this.config["default"]&&this.config["default"].icon&&(e=this.config["default"].icon),e}},{key:"getId",value:function(e){var a=this.id||"";return a+=e}}]),e}()},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function i(){"ngInject";var e={restrict:"EA",scope:{},controller:l,controllerAs:"sm",templateUrl:"app/components/scrollmenu/scrollmenu.html"};return e}Object.defineProperty(a,"__esModule",{value:!0}),a.ScrollMenuDirective=i;var l=function t(){"ngInject";s(this,t),this.config=[{label:"Overview",location:"overview"},{label:"Research",location:"research"},{label:"Insight",location:"insight"},{label:"Branding",location:"branding"},{label:"Mobile",location:"mobile"},{label:"Web",location:"web"},{label:"Marketing",location:"marketing"}]}},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(){"ngInject";s(this,l)};a.MainController=i},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(){"ngInject";s(this,l),this.colors=[{name:"purple",hex:"#49287a",hsl:["27","28%","51%"]},{name:"gold",hex:"#efa343",hsl:["27","28%","51%"]},{name:"grey1",hex:"#ededed",hsl:["27","28%","51%"]},{name:"grey2",hex:"#bbbbbb",hsl:["27","28%","51%"]},{name:"gunmetal",hex:"#212121",hsl:["27","28%","51%"]}],this.photos=[{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"},{id:"girl-window",size:"small-12 medium-6 large-4",src:"assets/images/archive/classic.jpg",thumb:"assets/images/archive/classic-sm.jpg"}],this.fonts=[{name:"Proxima Nova",weight:"Regular","class":"proxima weight-300"},{name:"Gotham Rounded",weight:"Bold","class":"gotham weight-700"}],this.logos=[{name:"dotnet",desc:""},{name:"node",desc:""},{name:"react",desc:""},{name:"jquery",desc:""},{name:"sass",desc:""},{name:"bower",desc:""},{name:"grunt",desc:""},{name:"mysql",desc:""},{name:"git",desc:""},{name:"github",desc:""},{name:"googleanalytics",desc:""},{name:"cloudflare",desc:""},{name:"handlebars",desc:""},{name:"ironio",desc:""},{name:"mandril",desc:""},{name:"newrelic",desc:""},{name:"stripe",desc:""},{name:"aws-cloud-front",desc:""},{name:"aws-ec2",desc:""},{name:"aws-elastic-load-balancing",desc:""},{name:"aws-glacier",desc:""},{name:"aws-rds",desc:""},{name:"aws-route-53",desc:""},{name:"aws-s3",desc:""},{name:"aws-ses",desc:""},{name:"aws-sqs",desc:""}],this.config={container:window,initialZoomState:null,imageSize:"cover",fullScreen:!1,loop:!1,linkImages:!0,duration:300,setTitle:"",separator2:"/",setIndex:0,firstImage:0,lastImage:!1,currentImage:!1,initialized:!1,timer:!1,timerDebounce:!1},this.instance={}};a.VetOnDemandController=i},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(){"ngInject";s(this,l),this.config={container:window,initialZoomState:null,imageSize:"cover",fullScreen:!1,loop:!1,linkImages:!0,duration:300,setTitle:"",separator2:"/",setIndex:0,firstImage:0,lastImage:!1,currentImage:!1,initialized:!1,timer:!1,timerDebounce:!1},this.instance={}};a.ArchiveController=i},function(e,a){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(a,"__esModule",{value:!0});var i=function l(){"ngInject";s(this,l)};a.ContactController=i},function(e,a){"use strict";function s(e){"ngInject";function a(a,i){var l=++s;a.attr("repeat-complete-id",l),a.removeAttr("repeat-complete");var t=i.repeatComplete,n=a.parent(),c=n.scope()||e,o=c.$watch(function(){var e=n.children("*[ repeat-complete-id = '"+l+"' ]:last");if(e.length){var a=e.scope();a.$last&&(o(),a.$eval(t))}})}var s=0;return{compile:a,priority:1001,restrict:"A"}}s.$inject=["$rootScope"],Object.defineProperty(a,"__esModule",{value:!0}),a.repeatComplete=s},function(e,a){"use strict";function s(){"ngInject";return function(e){e.$last&&e.$emit("RepeatEnd")}}Object.defineProperty(a,"__esModule",{value:!0}),a.repeatEndEmit=s}]),angular.module("portfolio").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="grid-block align-center self-stretch align-center content-center lion"></div>'),e.put("app/components/menu/menu.html",'<nav class="vertical-menu grid-block small-12"><div class="grid-content collapse"><div class="logo"><a ui-sref="home"><span>David<span class="line-break"><br></span><span class="bold">Victor</span></span></a></div><ul class="vertical menu-bar"><li ui-sref-active="active" ng-repeat="item in vm.config.data track by $index"><a ui-sref="{{item.location}}" ng-click="vm.toggle($event, item)" ng-if="vm.getRoute(item)"><span>{{::item.label}}</span> <i class="fa pull-right" ng-class="{\'fa-chevron-left\' : !item.active, \'fa-chevron-down\' : item.active}" ng-if="vm.hasChildren(item)"></i></a> <a ng-click="vm.toggle($event, item)" ng-if="!vm.getRoute(item)"><span>{{::item.label}}</span> <i class="fa pull-right" ng-class="{\'fa-chevron-left\' : !item.active, \'fa-chevron-down\' : item.active}" ng-if="vm.hasChildren(item)"></i></a><ul class="vertical menu-bar sbm-collapse-{{::vm.getId($index)}}" ng-if="vm.hasChildren(item) && item.active"><li ng-repeat="child in item.children track by $index" ui-sref-active="active"><a ui-sref="{{child.location}}" ng-click="vm.toggle($event, child);"><span>{{::child.label}}</span></a></li></ul></li></ul></div></nav><div class="icon-menu grid-block shrink"><div class="grid-content collapse"><ul class="icon-top menu-bar"><li><a href="https://www.linkedin.com/in/dvictor" target="_blank"><img zf-iconic="" data-src="assets/img/iconic/social.svg" data-type="linkedin" size="small" class="iconic-color-primary"></a></li><li><a href="https://github.com/davidvictor" target="_blank"><img zf-iconic="" data-src="assets/img/iconic/social.svg" data-type="github" size="small" class="iconic-color-primary"></a></li></ul></div></div>'),e.put("app/components/scrollmenu/scrollmenu.html",'<nav class="scroll-menu grid-block small-12"><div class="grid-content collapse"><ul class="vertical menu-bar" du-scroll-container="site-container"><li ng-repeat="item in sm.config" du-scrollspy="{{item.location}}"><a du-smooth-scroll="" href="#{{item.location}}"><span>{{item.label}}</span></a></li></ul></div></nav>'),e.put("app/pages/about/about.html",'<div class="grid-block align-center justify-start self-stretch content-center"><div class="grid-block small-12 medium-8 large-7 self-center"><div class="grid-content txt-center"><p class="p-b-d large p-l-h">My name is David Victor. I\'m a <strong>product designer</strong> living in Venice,&nbsp;California. I&nbsp;practice a holistic design philosophy and believe our greatest ideas are&nbsp;yet&nbsp;to&nbsp;come.</p></div></div></div>'),e.put("app/pages/contact/contact.html",'<div class="grid-block align-center justify-start self-stretch content-center"><div class="grid-block small-12 medium-8 large-7 self-center"><div class="grid-content txt-center"><p class="p-b-d large p-l-h">I am currently available for hire.<br>Send inquiries to: <a href="mailto:sup@techbro.biz">sup&#64;techbro.biz</a></p></div></div></div>'),e.put("app/portfolio/archive/archive.html",'<div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-cherub" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="archive.instance"><a class="chocolat-image cherub" href="assets/images/archive/cherub.jpg" sm-tween="tween-cherub" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/cherub-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Cherub</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-classic" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="archive.instance"><a class="chocolat-image" href="assets/images/archive/classic-alt.jpg" sm-tween="tween-classic" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/classic-alt-sm.jpg" alt=""></a> <a class="chocolat-image" href="assets/images/archive/classic.jpg"><img src="assets/images/archive/classic-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Classic Management</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-feast" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/feast.jpg" sm-tween="tween-feast" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/feast-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Feast</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-flexawn" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/flexawn.jpg" sm-tween="tween-flexawn" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/flexawn-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Flexawn</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-gro" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/gro.jpg" sm-tween="tween-gro" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/gro-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Gro Furniture</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-huntridge" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/huntridge-2.jpg" sm-tween="tween-huntridge" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/huntridge-2-sm.jpg" alt=""></a> <a class="chocolat-image" href="assets/images/archive/huntridge-1.jpg"><img src="assets/images/archive/huntridge-1-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>Huntridge Las Vegas</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-mrcs" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/mcrs.jpg" sm-tween="tween-mrcs" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/mcrs-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>MRCS Real Estate</small></h5></div></div></div></div></div><div class="grid-block small-12 noscroll lax-item"><div class="grid-content noscroll lax-container" sm-scene="tween-medicine-man" duration="200%" offset="0" trigger-hook="1"><div class="lax-wrapper" chocolat="" config="archive.config" instance="instance"><a class="chocolat-image" href="assets/images/archive/medicine-man.jpg" sm-tween="tween-medicine-man" vars="{y: \'-10%\',scale:1, force3D:true}"><img src="assets/images/archive/medicine-man-sm.jpg" alt=""></a></div><div class="lax-deets grid-block nowrap"><div class="grid-block"><div class="grid-content collapse"><p class="small archive-label">Client</p><h5 class="archive-data"><small>The Medicine Man</small></h5></div></div></div></div></div>'),e.put("app/portfolio/vetondemand/vetondemand.html",'<scroll-menu></scroll-menu><div class="grid-block wrap small-12" id="overview"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-fullscreen"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8 p-b-l"><div class="grid-content"><img src="assets/images/vetondemand/brand/logo-h.svg" width="200px" alt=""><p class="tiny uppercase m-t-m"><strong>Product</strong></p><p class="small">Vet On Demand is the first mobile application to provide personalized, real time access to veterinary advice and recommendations through the power of live&nbsp;video&nbsp;conferencing.</p><p class="tiny uppercase m-t-t"><strong>Role</strong></p><p class="tiny weight-500 uppercase">CoFounder / Design / UI+UX / Frontend</p></div><div class="grid-content"><span class="render-medium home gold right m-l-l"></span></div></div></div></div><div class="grid-block wrap small-12" id="research"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Research</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8 p-b-l"><div class="grid-content text-center"><img src="assets/images/vetondemand/chart-2.svg" width="400px" alt="" class="fade-in"><p class="tiny uppercase m-t-m"><strong>There are plenty of Vets</strong></p><p class="small">The U.S. supply of veterinarians in 2012 was 90,200, and that supply exceeded the demand for veterinary services by about 11,250 full-time&nbsp;equivalent&nbsp;veterinarians.</p></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8 p-b-l" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content text-center"><img src="assets/images/vetondemand/chart-1.svg" width="400px" alt=""><p class="tiny uppercase m-t-m"><strong>incomes are falling</strong></p><p class="small">Over the past decade, veterinarians have seen their wages fall. Increasing prices from pharmaceutical companies and the ever advancing march of technology have cut even deeper into&nbsp;practices&nbsp;nationwide.</p></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center content-center section-container wrap small-12 medium-10 p-b-l" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content small-12 text-center"><h5 class="p-h-l">72% OF CATS AND 42% OF DOGS ONLY SEE A VET EITHER ONCE OR NOT AT ALL ANNUALLY</h5></div><div class="grid-content small-6 text-center"><p class="tiny uppercase m-t-m"><strong>prices are rising</strong></p><p class="small">Going to the vet has not been getting less expensive. Prices have risen steadily at or faster than inflation for two decades. Americans will spend over 60 billion this year on their pets, more than a third of that going to veterinary care.</p></div><div class="grid-content small-6 text-center"><p class="tiny uppercase m-t-m"><strong>people are busy</strong></p><p class="small">Going to the vet has not been getting less expensive. Prices have risen steadily at or faster than inflation for two decades. Americans will spend over 60 billion this year on their pets, more than a third of that going to veterinary care.</p></div></div></div></div><div class="grid-block wrap small-12" id="insight"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Insight</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center content-center section-container wrap small-12 medium-9 large-8 p-b-l" sm-scene="tween-section" duration="200%" offset="0" trigger-hook="1"><div class="grid-content small-12 typeset"><h4 class="m-b-m">Problem + Solution</h4><ol><li><p class="small">Our pets are not getting the care they need despite there being more than enough vets who are trained and ready to provide their services.</p></li><li><p class="small">The traditional model for veterinary care is not equiped to provide the intermediary care that is lacking in so many pet households.</p></li><li><p class="small">Vet On Demand facilitates trusted, convienient, and affordable access to licensed veterinarians who provide the advice and recommendations to those who would otherwise forego it.</p></li><li><p class="small">By allowing on demand economics into a traditionally closed system, we increase the level and scope of care our pets receive while the size of the market grows to its full potential.</p></li></ol></div></div></div></div><div class="grid-block wrap small-12" id="branding"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Branding</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll noverflow section-block block-fullscreen" sm-scene="branding" duration="200%" offset="0" trigger-hook="1"><div class="hero-bg" sm-tween="branding" vars="{y: \'10%\'}"></div><div class="grid-block noscroll align-center items-center section-container small-12"><div class="grid-content text-center fade-in"></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Color</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-spaced items-center section-container small-12 medium-10 large-9"><div class="grid-content" ng-repeat="color in vetondemand.colors track by $index"><div class="color-card {{color.name}}"><div class="color-preview"></div><div class="color-shades"></div></div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Type</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll wrap align-spaced items-center section-container small-12 medium-12 large-9"><div class="grid-content small-12 medium-6 large-6 m-b-m" ng-repeat="font in vetondemand.fonts track by $index"><span class="section-subheading">{{font.name}} <span class="iota text-light">{{font.weight}}</span></span><div class="waterfall {{font.class}} m-b-s">ABCDEFGHIJKLMNOPQRSTUVWXYZ<br>abcdefghijklmnopqrstuvwxyz<br>0123456789!@#$%^&*();:,.?</div><div class="tqbfjotld {{font.class}}">The quick brown fox jumped over the lazy dog.</div></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h6 class="section-heading">Photo</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block small-12 medium-10 noscroll wrap align-spaced items-center section-container photo-grid" chocolat="" config="vetondemand.config" instance="instance" repeat-end-listen=""><a class="photo-grid-item chocolat-image {{photo.id}}" href="{{photo.src}}" style="background-image:url(\'{{photo.thumb}}\')" ng-repeat="photo in vetondemand.photos track by $index" repeat-end-emit=""></a></div></div></div><div class="grid-block wrap small-12" id="mobile"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Mobile</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div></div><div class="grid-block wrap small-12" id="web"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Web</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div><div class="grid-block align-center self-stretch small-12 noscroll section-block"><div class="grid-block wrap noscroll align-center items-center section-container small-10 medium-9 large-10"><div class="grid-content small-6 medium-3 large-2" ng-repeat="logo in vetondemand.logos track by $index"><span class="stack-logo {{logo.name}}"></span></div></div></div></div><div class="grid-block wrap small-12" id="marketing"><div class="grid-block align-center self-stretch small-12 noscroll section-block block-small"><div class="grid-block noscroll align-center items-center section-container small-12 medium-10 large-8"><div class="grid-content text-center fade-in"><h4 class="section-heading">Marketing</h4><h6 class="fade-in">Every pet should have access to the care they deserve.</h6></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-dce54c14f9.js.map
