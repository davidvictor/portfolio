export function webfontLoader($rootScope, $window) {
	'ngInject';
	let directive = {
		//restrict: 'E',
		//scope: {},
		link: linkFunc
		//controller: VerticalMenuController,
		//controllerAs: 'vm',
		//bindToController: true,
		//templateUrl: 'app/components/menu/menu.html'
	};
	return directive;

	function linkFunc(scope, elem, attrs) {
		function onActive() {
			$rootScope.$broadcast('webfontLoader.loaded');
		}

		function onInactive() {
			$rootScope.$broadcast('webfontLoader.error');
		}

		$window.WebFont.load({
			custom: {
				families: [attrs.webfontLoader]
			},
			active: onActive,
			inactive: onInactive
		});

	}
}
