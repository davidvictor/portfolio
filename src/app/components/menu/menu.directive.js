//'use strict';

export function MenuDirective() {
	'ngInject';

	let directive = {
		restrict: 'E',
		//scope: {},
		controller: VerticalMenuController,
		controllerAs: 'vm',
		bindToController: true,
		templateUrl: 'app/components/menu/menu.html'
	};
	return directive;

}

class VerticalMenuController {


	constructor($rootScope, $location, $element) {
		'ngInject';

		this.DEFAULT_BULLET_ICON = 'fa-circle-o';

		this.DEFAULT_ANIMATION = {
			duration: 0.4,
			timing: 'ease'
		};

		this.toggleMenu = false;

		this.config = {
			data: [
				{
					label: 'About',
					location: 'about',
					callback: function () {
						//
					}

				},
				{
					label: 'Work',
					location: '',
					children: [
						{
							label: 'Vet On Demand',
							location: 'vetondemand',
							callback: function () {
								//this.toggleMenu = !this.toggleMenu;
							}
						},
						{
							label: 'Archive',
							location: 'archive',
							callback: function () {
								//this.toggleMenu = !this.toggleMenu;
							}
						}
					]
				},
				{
					label: 'Contact',
					location: 'contact',
					callback: function () {
						//this.toggleMenu = !this.toggleMenu;
					}
				}
			]
		};



		this.$rootScope = $rootScope;
		this.$location  = $location;
		this.$element   = $element;

		//$rootScope.$on('$stateChangeSuccess',function(event, toState, toParams, fromState, fromParams){
		//	if (this.isToggleMenu()) {
		//		this.toggleMenu = !this.toggleMenu;
		//		return this.toggleMenu;
		//	}
		//});

	}

	getRoute(item) {
		if (item.location == '') {
			return false;
		}
		else {
			return item.location;
		}
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

	isToggleMenu() {
		this.toggleMenu = (this.toggleMenu) ? false : true;
		return this.toggleMenu;
	}


}
