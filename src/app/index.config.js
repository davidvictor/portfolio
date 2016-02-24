export function config($logProvider,AnalyticsProvider) {
	'ngInject';
	// Enable log
	$logProvider.debugEnabled(true);
	AnalyticsProvider
		.logAllCalls(true)
		.setAccount('UA-74237418-1')
		.useECommerce(false, false);


}
