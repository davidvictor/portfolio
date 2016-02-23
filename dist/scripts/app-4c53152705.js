/******/!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}// webpackBootstrap
/******/
var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";var r=n(1),o=n(2),a=n(3),i=n(4),s=n(5),l=n(6),c=n(7),u=n(8);angular.module("portfolio",["ngAnimate","ngCookies","ngTouch","ngSanitize","ngMessages","ngAria","ngResource","ui.router","mm.foundation","toastr"]).constant("malarkey",malarkey).constant("moment",moment).config(r.config).config(o.routerConfig).run(a.runBlock).service("githubContributor",s.GithubContributorService).service("webDevTec",l.WebDevTecService).controller("MainController",i.MainController).directive("acmeNavbar",c.NavbarDirective).directive("acmeMalarkey",u.MalarkeyDirective)},function(e,t){"use strict";function n(e,t){"ngInject";e.debugEnabled(!0),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}n.$inject=["$logProvider","toastrConfig"],Object.defineProperty(t,"__esModule",{value:!0}),t.config=n},function(e,t){"use strict";function n(e,t){"ngInject";e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}n.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(t,"__esModule",{value:!0}),t.routerConfig=n},function(e,t){"use strict";function n(e){"ngInject";e.debug("runBlock end")}n.$inject=["$log"],Object.defineProperty(t,"__esModule",{value:!0}),t.runBlock=n},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r,o){"ngInject";n(this,e),this.awesomeThings=[],this.classAnimation="",this.creationDate=1455232458615,this.toastr=o,this.activate(t,r)}return e.$inject=["$timeout","webDevTec","toastr"],r(e,[{key:"activate",value:function(e,t){var n=this;this.getWebDevTec(t),e(function(){n.classAnimation="rubberBand"},4e3)}},{key:"getWebDevTec",value:function(e){this.awesomeThings=e.getTec(),angular.forEach(this.awesomeThings,function(e){e.rank=Math.random()})}},{key:"showToastr",value:function(){this.toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),this.classAnimation=""}}]),e}();t.MainController=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(t,r){"ngInject";n(this,e),this.$log=t,this.$http=r,this.apiHost="https://api.github.com/repos/Swiip/generator-gulp-angular"}return e.$inject=["$log","$http"],r(e,[{key:"getContributors",value:function(e){var t=this;return e||(e=30),this.$http.get(this.apiHost+"/contributors?per_page="+e).then(function(e){return e.data})["catch"](function(e){t.$log.error("XHR Failed for getContributors.\n"+angular.toJson(e.data,!0))})}}]),e}();t.GithubContributorService=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=function(){function e(){"ngInject";n(this,e),this.data=[{title:"AngularJS",url:"https://angularjs.org/",description:"HTML enhanced for web apps!",logo:"angular.png"},{title:"BrowserSync",url:"http://browsersync.io/",description:"Time-saving synchronised browser testing.",logo:"browsersync.png"},{title:"GulpJS",url:"http://gulpjs.com/",description:"The streaming build system.",logo:"gulp.png"},{title:"Jasmine",url:"http://jasmine.github.io/",description:"Behavior-Driven JavaScript.",logo:"jasmine.png"},{title:"Karma",url:"http://karma-runner.github.io/",description:"Spectacular Test Runner for JavaScript.",logo:"karma.png"},{title:"Protractor",url:"https://github.com/angular/protractor",description:"End to end test framework for AngularJS applications built on top of WebDriverJS.",logo:"protractor.png"},{title:"Foundation",url:"http://foundation.zurb.com/",description:"The most advanced responsive front-end framework in the world.",logo:"foundation.png"},{title:"Angular Foundation",url:"http://pineconellc.github.io/angular-foundation/",description:"A set of native AngularJS directives based on Foundation's markup and CSS",logo:"angular-foundation.png"},{title:"Sass (Node)",url:"https://github.com/sass/node-sass",description:"Node.js binding to libsass, the C version of the popular stylesheet preprocessor, Sass.",logo:"node-sass.png"},{title:"ES6 (Babel formerly 6to5)",url:"https://babeljs.io/",description:"Turns ES6+ code into vanilla ES5, so you can use next generation features today.",logo:"babel.png"},{key:"handlebars",title:"Handlebars",url:"http://handlebarsjs.com/",description:"Handlebars provides the power necessary to let you build semantic templates effectively with no frustration.",logo:"handlebars.png"}]}return r(e,[{key:"getTec",value:function(){return this.data}}]),e}();t.WebDevTecService=o},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(){"ngInject";var e={restrict:"E",templateUrl:"app/components/navbar/navbar.html",scope:{creationDate:"="},controller:o,controllerAs:"vm",bindToController:!0};return e}Object.defineProperty(t,"__esModule",{value:!0}),t.NavbarDirective=r;var o=function a(e){"ngInject";n(this,a),this.relativeDate=e(this.creationDate).fromNow()};o.$inject=["moment"]},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e){"ngInject";function t(t,n,r,o){var a=void 0,i=e(n[0],{typeSpeed:40,deleteSpeed:40,pauseDelay:800,loop:!0,postfix:" "});n.addClass("acme-malarkey"),angular.forEach(t.extraValues,function(e){i.type(e).pause()["delete"]()}),a=t.$watch("vm.contributors",function(){angular.forEach(o.contributors,function(e){i.type(e.login).pause()["delete"]()})}),t.$on("$destroy",function(){a()})}var n={restrict:"E",scope:{extraValues:"="},template:"&nbsp;",link:t,controller:a,controllerAs:"vm"};return n}r.$inject=["malarkey"],Object.defineProperty(t,"__esModule",{value:!0});var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();t.MalarkeyDirective=r;var a=function(){function e(t,r){"ngInject";n(this,e),this.$log=t,this.contributors=[],this.activate(r)}return e.$inject=["$log","githubContributor"],o(e,[{key:"activate",value:function(e){var t=this;return this.getContributors(e).then(function(){t.$log.info("Activated Contributors View")})}},{key:"getContributors",value:function(e){var t=this;return e.getContributors(10).then(function(e){return t.contributors=e,t.contributors})}}]),e}()}]),angular.module("portfolio").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class="container"><div><acme-navbar creation-date="main.creationDate"></acme-navbar></div><div class="row"><div class="large-12 large-text-center columns"><div class="panel"><h1>\'Allo, \'Allo!</h1><img src="assets/images/yeoman.png" alt="I\'m Yeoman"><br><p>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class="main.classAnimation"><a href="#" class="button success" ng-click="main.showToastr()">Splendid Toastr</a></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div></div></div><div class="row"><div class="large-4 columns" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class="th"><img class="right" ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class="caption"><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href="{{ awesomeThing.url }}">{{ awesomeThing.url }}</a></p></div></div></div></div></div>'),e.put("app/components/navbar/navbar.html",'<nav class="top-bar row"><ul class="title-area"><li class="name"><h1><a href="https://github.com/Swiip/generator-gulp-angular">Gulp & Angular</a></h1></li></ul><section class="top-bar-section"><ul class="right"><li class="active"><a ng-href="#">Home</a></li><li><a ng-href="#">About</a></li><li><a ng-href="#">Contact</a></li></ul></section></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-4c53152705.js.map
