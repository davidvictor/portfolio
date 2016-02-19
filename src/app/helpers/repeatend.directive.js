export function repeatEndEmit() {
	'ngInject';
	return function (scope) {
		if (scope.$last) {
			scope.$emit('RepeatEnd');
		}
	}
}
