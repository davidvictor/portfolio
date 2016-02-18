export function runBlock($rootScope, $state, $log) {
	'ngInject';
	$log.debug('runBlock end');
	$rootScope.$state = $state;

}
