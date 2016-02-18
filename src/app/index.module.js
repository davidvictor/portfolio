


//import * as roar from '../app/helpers/easing';
import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MenuDirective } from '../app/components/menu/menu.directive';
import { ScrollMenuDirective } from '../app/components/scrollmenu/scrollmenu.directive';
import { MainController } from './main/main.controller';
import { VetOnDemandController } from './portfolio/vetondemand/vetondemand.controller';
import { ArchiveController } from './portfolio/archive/archive.controller';
import { ContactController } from './pages/contact/contact.controller';



angular.module('portfolio', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'foundation', 'foundation.dynamicRouting','foundation.dynamicRouting.animations', 'chocolat','dv.scrollMagic','duScroll'])
	.config(config)
	.config(routerConfig)
	.run(runBlock)
	.controller('MainController', MainController)
	.controller('VetOnDemandController', VetOnDemandController)
	.controller('ArchiveController', ArchiveController)
	.controller('ContactController', ContactController)
	.directive('verticalMenu', MenuDirective)
	.directive('scrollMenu', ScrollMenuDirective);
