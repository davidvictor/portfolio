export function config($logProvider,AnalyticsProvider) {
	'ngInject';
	// Enable log
	$logProvider.debugEnabled(true);
	// Google analytics
	AnalyticsProvider
		.logAllCalls(true)
		.setAccount({
			tracker: 'UA-74237418-1',
			name: "portfolio",
			fields: {
				cookieDomain: 'techbro.biz',
				cookieExpires: 86400,
				siteSpeedSampleRate: 100
			},
			displayFeatures: true,
			enhancedLinkAttribution: true,
			trackEvent: true,
			trackEcommerce: false
		});


}
