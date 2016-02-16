export function routerConfig($stateProvider, $urlRouterProvider) {
	'ngInject';
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'app/main/main.html',
			controller: 'MainController',
			controllerAs: 'main',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/pages/about/about.html',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		})
		.state('work', {
			url: '/work',
			templateUrl: 'app/pages/work/work.html',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		})
		.state('vetondemand', {
			url: '/work/vetondemand',
			templateUrl: 'app/portfolio/vetondemand/vetondemand.html',
			controller: 'VetOnDemandController',
			controllerAs: 'vetondemand',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		})
		.state('archive', {
			url: '/work/archive',
			templateUrl: 'app/portfolio/archive/archive.html',
			controller: 'ArchiveController',
			controllerAs: 'archive',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		})
		.state('contact', {
			url: '/contact',
			templateUrl: 'app/pages/contact/contact.html',
			controller: 'ContactController',
			controllerAs: 'contact',
			animation: {
				enter: 'pageScaleIn',
				leave: 'pageScaleOut'
			}
		});


	$urlRouterProvider.otherwise('/');
}
