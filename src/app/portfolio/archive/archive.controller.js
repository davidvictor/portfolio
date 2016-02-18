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


	}


}
