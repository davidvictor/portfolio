export class VetOnDemandController {
	constructor() {
		'ngInject';

		this.colors = [
			{
				name: 'purple',
				hex: '#49287a',
				hsl: ['27','28%','51%']
			},
			{
				name: 'gold',
				hex: '#efa343',
				hsl: ['27','28%','51%']
			},
			{
				name: 'grey1',
				hex: '#ededed',
				hsl: ['27','28%','51%']
			},
			{
				name: 'grey2',
				hex: '#bbbbbb',
				hsl: ['27','28%','51%']
			},
			{
				name: 'gunmetal',
				hex: '#212121',
				hsl: ['27','28%','51%']
			}
		];

		this.photos = [
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			},
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			},
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			},
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			},
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			},
			{
				id: 'girl-window',
				size: 'small-12 medium-6 large-4',
				src: 'assets/images/archive/classic.jpg',
				thumb: 'assets/images/archive/classic-sm.jpg'
			}
		];

		this.fonts = [
			{
				name: 'Proxima Nova',
				weight: 'Book',
				class: 'proxima weight-300'
			},
			{
				name: 'Proxima Nova',
				weight: 'Semi-Bold',
				class: 'proxima weight-600'
			},
			{
				name: 'Gotham Rounded',
				weight: 'Light',
				class: 'gotham weight-300'
			},
			{
				name: 'Gotham Rounded',
				weight: 'Medium',
				class: 'gotham weight-500'
			}

		];
		this.logos = [
			//{
			//	name: 'angular',
			//	desc: ''
			//},
			{
				name: 'dotnet',
				desc: ''
			},

			{
				name: 'node',
				desc: ''
			},

			{
				name: 'react',
				desc: ''
			},
			{
				name: 'jquery',
				desc: ''
			},

			{
				name: 'sass',
				desc: ''
			},
			{
				name: 'bower',
				desc: ''
			},
			{
				name: 'grunt',
				desc: ''
			},
			{
				name: 'mysql',
				desc: ''
			},


			{
				name: 'git',
				desc: ''
			},

			{
				name: 'github',
				desc: ''
			},

			{
				name: 'googleanalytics',
				desc: ''
			},
			{
				name: 'cloudflare',
				desc: ''
			},


			//{
			//	name: 'gulp',
			//	desc: ''
			//},

			{
				name: 'handlebars',
				desc: ''
			},

			{
				name: 'ironio',
				desc: ''
			},


			{
				name: 'mandril',
				desc: ''
			},


			{
				name: 'newrelic',
				desc: ''
			},


			{
				name: 'stripe',
				desc: ''
			},
			{
				name: 'aws-cloud-front',
				desc: ''
			},

			{
				name: 'aws-ec2',
				desc: ''
			},

			{
				name: 'aws-elastic-load-balancing',
				desc: ''
			},

			{
				name: 'aws-glacier',
				desc: ''
			},

			{
				name: 'aws-rds',
				desc: ''
			},

			{
				name: 'aws-route-53',
				desc: ''
			},

			{
				name: 'aws-s3',
				desc: ''
			},

			{
				name: 'aws-ses',
				desc: ''
			},

			{
				name: 'aws-sqs',
				desc: ''
			}

		];

		this.config = {
			container: window,
			initialZoomState: null,
			imageSize: 'cover',
			fullScreen: false,
			loop: false,
			linkImages: true,
			duration: 300,
			setTitle: '',
			separator2: '/',
			setIndex: 0,
			firstImage: 0,
			lastImage: false,
			currentImage: false,
			initialized: false,
			timer: false,
			timerDebounce: false
		};

	}
}
