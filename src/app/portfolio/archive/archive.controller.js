export class ArchiveController {
	constructor() {
		'ngInject';
		this.config = {
			container: window,
			initialZoomState: null,
			imageSize: 'contain',
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

		this.instance = {};

		this.tween = '10%';

		this.imgPath = 'assets/images/archive/';

		this.archives = [
			{
				id: 'lifeisbeautiful',
				client: 'Life is Beautiful',
				role: 'Branding / Web / Mobile / Print',
				images: [
					{
						src: 'lib-11.jpg',
						thumb: 'lib-11-sm.jpg'
					},
					{
						src: 'lib-12.jpg'
					},
					{
						src: 'lib-16.jpg'
					},
					{
						src: 'lib-web.png'
					},
					{
						src: 'lib-app-1.png'
					},
					{
						src: 'lib-app-2.png'
					},
					{
						src: 'lib-app-3.png'
					},
					{
						src: 'lib-app-4.png'
					},
					{
						src: 'lib-app-5.png'
					},
					{
						src: 'lib-app-6.png'
					},
					{
						src: 'lib-09.jpg'
					},
					{
						src: 'lib-13.jpg'
					},
					{
						src: 'lib-14.jpg'
					},
					{
						src: 'lib-15.jpg'
					},
					{
						src: 'lib-01.jpg'
					},
					{
						src: 'lib-02.jpg'
					},
					{
						src: 'lib-07.jpg'
					}
				]
			},
			//{
			//	id: 'esc',
			//	client: 'ESC Lab Sciences',
			//	role: 'Web / Mobile / Print',
			//	images: [
			//		{
			//			src: 'cherub.jpg',
			//			thumb: 'cherub-sm.jpg'
			//		}
			//	]
			//},
			{
				id: 'cherub',
				client: 'Cherub',
				role: 'Logo / Art Direction',
				images: [
					{
						src: 'cherub.jpg',
						thumb: 'cherub-sm.jpg'
					}
				]
			},
			{
				id: 'classic',
				client: 'Classic Management',
				role: 'Branding / Print / Art Direction',
				images: [
					{
						src: 'classic-alt.jpg',
						thumb: 'classic-alt-sm.jpg'
					},
					{
						src: 'classic.jpg',
						thumb: 'classic-sm.jpg'
					}
				]
			},
			{
				id: 'medicineman',
				client: 'The Medicine Man',
				role: 'Branding / Web / Print',
				images: [
					{
						src: 'medicine-man.jpg',
						thumb: 'medicine-man-sm.jpg'
					},
					{
						src: 'medicine-man-full.jpg'
					},
					{
						src: 'medicine-man-brand.png'
					}
				]
			},
			{
				id: 'huntridge',
				client: 'Huntridge Las Vegas',
				role: 'Logo / Branding',
				images: [
					{
						src: 'huntridge-2.jpg',
						thumb: 'huntridge-2-sm.jpg'
					},
					{
						src: 'huntridge-1.jpg',
						thumb: 'huntridge-1-sm.jpg'
					}
				]
			},
			{
				id: 'feast',
				client: 'Feast',
				role: 'Branding / Web',
				images: [
					{
						src: 'feast.jpg',
						thumb: 'feast-sm.jpg'
					},
					{
						src: 'feast-print.jpg'
					}
				]
			},
			{
				id: 'gro',
				client: 'Gro Furniture',
				role: 'Branding / Art Direction / Web',
				images: [
					{
						src: 'gro.jpg',
						thumb: 'gro-sm.jpg'
					},
					{
						src: 'gro-web.png'
					},
					{
						src: 'gro-ipad-1.png'
					},
					{
						src: 'gro-photo.jpg'
					}
				]
			},

			{
				id: 'mrcs',
				client: 'MRCS Real Estate',
				role: 'Branding / Print',
				images: [
					{
						src: 'mcrs.jpg',
						thumb: 'mcrs-sm.jpg'
					},
					{
						src: 'mcrs-full.jpg'
					}
				]
			},

			{
				id: 'flexawn',
				client: 'Flexawn',
				role: 'Branding / Web',
				images: [
					{
						src: 'flexawn.jpg',
						thumb: 'flexawn-sm.jpg'
					}
				]
			}
		]


	}


}
