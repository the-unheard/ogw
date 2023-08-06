class Main {

	/** 	creates global variable
			
	**/
	
	constructor (){
		this.init();
	}
	
	/** 	initiates Main
			
	**/
	
	init() {
		this.events();
		this.populateToolTips();
		this.toolTipEnabler();
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		// filter click
			$(document).on('click', '.filter-map', (evt) => {
				const target = evt.target;
				this.filterMap($(target).data('ooblet'));
			});
	}

	/** 	ooblets filter
			hides or shows ooblets based on selected filter
	**/

	filterMap(type){
		if (type === "all") {
			$('.map-icons div').show();
		}

		else {
			$('.map-icons div').hide();
			$('.map-icons div[class*="' + type + '"]').show();
		}
	}

	/** 	tooltip enabler
			required bootstrap function
	**/

	toolTipEnabler() {
		let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		let tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		});
	}

	/** 	populate tooltips
			adds the image, title, credits for each icon
	**/

	populateToolTips() {

		let rawName, imgName, properName, type, title, credit;

		$('.map-mf, .map-mw').each((i, obj) =>{

			rawName = $(obj).attr('class').match(/map-m[f|w] (.*)/)[1];
			
			type = $(obj).data('map-type');
			credit = $(obj).data('map-credit');

			// set image name based on whether it's wildlands or specific ooblet

				if (rawName.indexOf('wildlands') >= 0) {
					imgName = rawName.match(/(.*?)(-\d+)/)[1];
				}

				else {
					properName = rawName.match(/(.*)(-\d+)/)[1].replace(/-/g, ' ');
					imgName = properName.replace(/ /g, '');
				}

			// set title based on data-map-type

				switch (type) {
					case 'frenz':
						title = 'Lost Ooblet - ' + properName;
						break;
					case 'wild':
						title = 'Lost Wildland Ooblet';
						break;
					default:
						title = '';
						break;
				}



			$(obj)
				.attr('title', '<img class="map-tt-img" alt="image" src="images/map/tooltips/' + rawName + '.png"/><div><p class="map-tt-title">' + title + '</p><p class="map-tt-credit"><i class="fa-solid fa-camera"></i>' + credit + '</p></div>')
				.append(
					$(document.createElement('img'))
						.addClass('position-absolute')
						.attr('src','images/map/icons/' + imgName + '.png')
				)

		})
	}


}

const a = new Main();
