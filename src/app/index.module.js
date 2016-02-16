/* global malarkey:false, moment:false */


import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { WorkController } from './pages/work/work.controller';
import { ContactController } from './pages/contact/contact.controller';
import { VetOnDemandController } from './portfolio/vetondemand/vetondemand.controller';
import { ArchiveController } from './portfolio/archive/archive.controller';
import { GithubContributorService } from '../app/components/githubContributor/githubContributor.service';
import { MenuDirective } from '../app/components/menu/menu.directive';
import { MalarkeyDirective } from '../app/components/malarkey/malarkey.directive';


angular.module('portfolio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'foundation', 'foundation.dynamicRouting','foundation.dynamicRouting.animations', 'toastr', 'chocolat','dv.scrollMagic'])
	.constant('malarkey', malarkey)
	.constant('moment', moment)
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.service('githubContributor', GithubContributorService)
	.controller('MainController', MainController)
	.controller('WorkController', WorkController)
	.controller('ContactController', ContactController)
	.controller('VetOnDemandController', VetOnDemandController)
	.controller('ArchiveController', ArchiveController)
	.directive('verticalMenu', MenuDirective)
	.directive('acmeMalarkey', MalarkeyDirective);
