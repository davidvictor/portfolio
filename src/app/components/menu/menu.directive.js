//'use strict';

//angular.module('angularVerticalMenu').directive('verticalMenu', VerticalMenu);

export function MenuDirective() {
	'ngInject';
	//function compile(element, attributes) {
	//	// get the height of an individual sub menu item, to be used in
	//	// animation definition
	//	var height = element.find('li')[1].offsetHeight;
	//	return {
	//		post: function postLink(scope, iElement, iAttrs, controller) {
	//			if (controller.config.animation) {
	//				controller.setupAnimation(height);
	//			}
	//		}
	//	};
	//}

	let directive = {
		restrict: 'E',
		//replace: true,
		scope: {},
		controller: VerticalMenuController,
		controllerAs: 'vm',
		//bindToController: {
		//	id: '@',
		//	config: '='
		//},
		bindToController: true,
		templateUrl: 'app/components/menu/menu.html'
	};
	return directive;

}


//VerticalMenuController.$inject = [ '$rootScope', '$location' ];

class VerticalMenuController {


	constructor($rootScope, $location, $state) {
		'ngInject';

		this.DEFAULT_BULLET_ICON = 'fa-circle-o';

		this.DEFAULT_ANIMATION = {
			duration: 0.4,
			timing: 'ease'
		};

		this.config = {
			data: [
				{
					label: 'About',
					callback: function () {
						$state.go('about');
					}

				},
				{
					label: 'Work',
					children: [
						{
							label: 'Vet On Demand',
							callback: function () {
								$state.go('vetondemand');
							}
						},
						{
							label: 'Archive',
							callback: function () {
								$state.go('archive');
							}
						},
						{
							label: 'More Soon'
						}
					]
				},
				{
					label: 'Contact',
					callback: function () {
						$state.go('contact');
					}
				}
			]
		};

		this.$rootScope = $rootScope;
		this.$location  = $location;

	}


	/**
	 *
	 */

	toggle(event, item) {
		event.stopPropagation();
		if (this.hasChildren(item)) {
			item.active = !item.active;
		}
		else if (item.callback) {
			item.callback(item);
		}
		return false;
	}

	/**
	 * Returns <code>true</code> if the specified item has some children,
	 * <code>false</code> otherwise.
	 *
	 * @param {Object}
	 *                item - A menu item.
	 * @returns {boolean} <code>true</code> if the item has some children,
	 *          <code>false</code> otherwise
	 */

	hasChildren(item) {
		return !!item.children;
	}

	/**
	 * Returns the icon associated with the specified item or if none exists the
	 * default bullet icon value.
	 *
	 * @param {Object}
	 *                item - A menu item.
	 * @returns {string} the icon associated with the item
	 */

	getItemIcon(item) {
		return item.icon || this.getDefaultIcon();
	}

	/**
	 * Returns the default bullet icon specified by the
	 * <code>config.default.icon</code> property or if none is specified the
	 * internally defined default bullet icon.
	 *
	 * @returns {string} the default bullet icon
	 */

	getDefaultIcon() {
		var icon = this.DEFAULT_BULLET_ICON;
		if (this.config.default && this.config.default.icon) {
			icon = this.config.default.icon;
		}
		return icon;
	}

	/**
	 *
	 */

	getId(index) {
		var id = this.id || '';
		id += index;
		return id;
	}

}
