export class ArchiveController {
	constructor() {
		'ngInject';

		//this.config = {
		//	container         : window, // window or jquery object or jquery selector, or element
		//	imageSelector     : '.chocolat-image',
		//	className         : '',
		//	imageSize         : 'default', // 'default', 'contain', 'cover' or 'native'
		//	initialZoomState  : null,
		//	fullScreen        : false,
		//	loop              : false,
		//	linkImages        : true,
		//	duration          : 300,
		//	setTitle          : '',
		//	separator2        : '/',
		//	setIndex          : 0,
		//	firstImage        : 0,
		//	lastImage         : false,
		//	currentImage      : false,
		//	initialized       : false,
		//	timer             : false,
		//	timerDebounce     : false,
		//	images            : []
		//};


		this.data = [
			{
				client: 'Cherub',
				id: 'cherub',
				images: [
					{
						title: '',
						img: 'cherub.jpg',
						thumb: 'cherub-sm.jpg'
					}
				]
			},
			{
				client: 'Classic',
				id: 'classic',
				images: [
					{
						title: '',
						img: 'classic.jpg',
						thumb: 'classic-sm.jpg'
					},
					{
						title: '',
						img: 'classic-alt.jpg',
						thumb: 'classic-alt-sm.jpg'
					}
				]
			},
			{
				client: 'Feast',
				id: 'feast',
				images: [
					{
						title: '',
						img: 'feast.jpg',
						thumb: 'feast-sm.jpg'
					}
				]
			},
			{
				client: 'Flexawn',
				id: 'flexawn',
				images: [
					{
						title: '',
						img: 'flexawn.jpg',
						thumb: 'flexawn-sm.jpg'
					}
				]
			},
			{
				client: 'Gro Furniture',
				id: 'gro',
				images: [
					{
						title: '',
						img: 'gro.jpg',
						thumb: 'gro-sm.jpg'
					}
				]
			},
			{
				client: 'Huntridge',
				id: 'huntridge',
				images: [
					{
						title: '',
						img: 'huntridge-2.jpg',
						thumb: 'huntridge-2-sm.jpg'
					},
					{
						title: '',
						img: 'huntridge-1.jpg',
						thumb: 'huntridge-1-sm.jpg'
					}
				]
			},
			{
				client: 'MCRS',
				id: 'mcrs',
				images: [
					{
						title: '',
						img: 'mcrs.jpg',
						thumb: 'mcrs-sm.jpg'
					}
				]
			},
			{
				client: 'Medicine Man',
				id: 'medicine-man',
				images: [
					{
						title: '',
						img: 'medicine-man.jpg',
						thumb: 'medicine-man-sm.jpg'
					}
				]
			}
		]
	}

	getArchive() {
		return this.data;
	}
}
