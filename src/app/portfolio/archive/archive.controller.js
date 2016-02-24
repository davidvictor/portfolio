export class ArchiveController {
	constructor() {
		'ngInject';
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

		this.instance = {};

		this.tween = '10%';

		this.imgPath = 'assets/images/archive/';

		this.archives = [
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
				role: 'Logo / Art Direction',
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
				id: 'feast',
				client: 'Feast',
				role: 'Logo / Branding',
				images: [
					{
						src: 'feast.jpg',
						thumb: 'feast-sm.jpg'
					}
				]
			},
			{
				id: 'flexawn',
				client: 'Flexawn',
				role: 'Logo / Branding',
				images: [
					{
						src: 'flexawn.jpg',
						thumb: 'flexawn-sm.jpg'
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
				id: 'mrcs',
				client: 'MRCS Real Estate',
				role: 'Logo / Branding',
				images: [
					{
						src: 'mcrs.jpg',
						thumb: 'mcrs-sm.jpg'
					}
				]
			},
			{
				id: 'medicineman',
				client: 'The Medicine Man',
				role: 'Logo / Branding',
				images: [
					{
						src: 'medicine-man.jpg',
						thumb: 'medicine-man-sm.jpg'
					}
				]
			}
		]


	}


}
