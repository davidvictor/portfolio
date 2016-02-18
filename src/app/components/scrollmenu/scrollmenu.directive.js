//'use strict';

export function ScrollMenuDirective() {
	'ngInject';

	let directive = {
		restrict: 'EA',
		scope: {},
		controller: ScrollMenuController,
		controllerAs: 'sm',
		//bindToController: true,
		templateUrl: 'app/components/scrollmenu/scrollmenu.html'
	};

	return directive;


}

class ScrollMenuController {

	constructor() {
		'ngInject';
		//this.config = $scope.config;

		this.config = [
			{
				label: 'Overview',
				location: 'overview'
			},
			{
				label: 'Research',
				location: 'research'
			},
			{
				label: 'Insight',
				location: 'insight'
			},
			{
				label: 'Branding',
				location: 'branding'
			},
			{
				label: 'Mobile',
				location: 'mobile'
			},
			{
				label: 'Web',
				location: 'web'
			},
			{
				label: 'Marketing',
				location: 'marketing'
			}

		];
	}

}
