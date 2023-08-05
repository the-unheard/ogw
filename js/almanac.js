class Main {

	/** 	creates global variable
			creates a global variable for wishlisted ooblets and complete ooblets name
	**/
	
	constructor (){
		this.init();
		this.wishlisted;
		this.oobletsArray;
	}
	
	/** 	initiates Main
			makes sure all checkboxes are on default upon page load
			creates the list of all ooblets
	**/
	
	init() {
		this.events();
		this.resetCheckbox();
		this.wishlisted = [];
		this.oobletsArray = ['bittle','bristlebud','chickadingding','clickyclaws', 'clomper','derble','dooziedug','dumbirb','firmo','fleeble',
							'fripp','glanter','gloopylonglegs','grebun','gubwee','gullysplot','gumple','hermble','isopud','jama','kingwa',
							'legsy','lickzer','lumpstump','marshling','moogy','namnam','nuppo','oogum','pantsabear','petula','plob','radlad',
							'shrumbo','sidekey','skuffalo','snurfler','spuddle','tamlin','tud','unnyhunny','whirlitzer','wigglewip', 'wuddlin',
							'angkze', 'quabbo', 'bibbin', 'bunglebee', 'gopslop', 'rockstack'];
		this.wishFromUrl();
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		// toggle details
		$(document).on('change', '.filter-details', (evt) =>{
			var target = evt.target;
			this.toggleDetail(target.value,$(target).prop('checked'));
		});

		// toggle locations
		$(document).on('change', '.filter-location', (evt) =>{
			var target = evt.target;
			this.toggleLocation(target.value,$(target).prop('checked'));
		});

		// toggle wishlist mode
		$(document).on('change', '#filter-wishenabled', (evt) =>{
			var target = evt.target;
			this.wishMode($(target).prop('checked'));
		});

		// add to wishlist
		$(document).on('click', '.clickable-oob', (evt) =>{
			var target = evt.target;
			var name = $(target).data('oobname');
			var type = $(target).data('oobtype');
			var action = $(target).data('action');
			this.updateWishlist(name, type, action);
			this.applyWishlist();
		});

		// trigger upon canvas modal opening
		$('#almanac-canvasModal').on('show.bs.modal', (evt) =>{
			this.showCanvas();
		});

		// trigger upon canvas modal closing
		$('#almanac-canvasModal').on('hidden.bs.modal', (evt) =>{
			this.hideCanvas();
		});

	}

	/** 	toggle details
			hides or shows food and cards and bio of all ooblets
	**/
	
	toggleDetail(type, status) {

		if (status == true) {
			$('.almanac-' + type).show();
		}

		else {
			$('.almanac-' + type).hide();
		}

	}


	/** 	toggle location
			hides or shows ooblets from specific locations
	**/
	
	toggleLocation(type, status) {

		var location;

		$('.almanac-ooblet').each((i, obj) =>{
			location = $(obj).find('.almanac-location').text().toLowerCase().replace(/ /g, '');
			if(location.indexOf(type) != -1) {
				if (status == true) {
					$(obj).show();
				}
				else {
					$(obj).hide();
				}
			}
		})

	}

	/** 	toggle wishlist mode
			displays every ooblet on your wishlist
	**/
	
	wishMode(checked) {

		if (checked) {

			// disables other filters
			$('.filter-details').prop('checked', true).attr('disabled', true);
			$('.filter-location').prop('checked', true).attr('disabled', true);

			// hides every ooblet information box
			$('.almanac-ooblet').hide();

			// displays full-sized wishlist
			$('.almanac-fullwish').css('display','inline-block');

			// enables screenshot button
			$('.wishlist-convert').prop('disabled', false);
		}

		else {

			// enables other filters
			$('.filter-details').prop('checked', false).attr('disabled', false);
			$('.filter-location').prop('checked', true).attr('disabled', false);

			// hides every ooblet information box
			$('.almanac-ooblet').show();

			// hides full-sized wishlist
			$('.almanac-fullwish').hide();

			// disables screenshot button
			$('.wishlist-convert').prop('disabled', true);

		}

	}

	/** 	updates your wishlist array
			adds or removes entries to the wishlist array
	**/

	updateWishlist(name,type,action) {

		var hasDupe = false; // used for checking if wishlisted item already exists in the array
		var i;

		switch(action) {

			case 'add':

				// check for duplicate
				$.map(this.wishlisted, (val) => {
				    if(val.name == name && val.type == type) {
				    	hasDupe = true;
				    }
				});

				// add to array if no duplicate
				if (!hasDupe) {
					this.wishlisted.push({name:name, type:type});
				}


				break;

			case 'remove':

				// remove from array
				for (i=0;i<this.wishlisted.length;i++) {
					if(this.wishlisted[i].name == name && this.wishlisted[i].type == type) {
						this.wishlisted.splice(i, 1);
						break;
					}
				}

				break;
		}

	}

	/** 	apply wishlist to sidebar, wishlist mode, and url parameter
			takes the entries from the wishlist array to populate the wishlist sidebar, the wishlit mode, and the url parameter
	**/

	applyWishlist() {

		var i, fulltype, type, name, number, newurl;
		var param = '?w=';
		var url = window.location.href.replace(/\?w=(.*)/,'');

		// clears sidebar wishlist and full-sized wishlist
		$('.sidebar-wishes').empty();
		$('.almanac-fullwishes').remove();

		// rebuilds wishlist
		for (i=0;i<this.wishlisted.length;i++) {
			
			type = this.wishlisted[i].type;
			name = this.wishlisted[i].name;

			switch(type){
				case 'g':
					fulltype = 'gleamy';
					break;
				case 'c':
					fulltype = 'common';
					break;
				case 'u':
					fulltype = 'uncommon';
					break;
			}

			// sidebar wishlist
			$('.sidebar-wishes').append(
				$(document.createElement('img'))
					.addClass('wish-' + fulltype + ' clickable-oob')
					.attr('data-oobname', name)
					.attr('data-oobtype', type)
					.attr('data-action', 'remove')
					.attr('src', 'images/ooblets/' + name + '_' + type + '.png')
				)

			// full-sized wishlist
			$('.almanac-fullwish-content').append(
					$(document.createElement('img'))
						.addClass('almanac-fullwishes img-' + fulltype + ' clickable-oob p-1 m-1 og-bg-gray-200 rounded"')
						.attr('data-oobname', name)
						.attr('data-oobtype', type)
						.attr('data-action', 'remove')
						.attr('src', 'images/ooblets/' + name + '_' + type + '.png')
				)

			// url param
			number = this.oobletsArray.indexOf(this.wishlisted[i].name);
			param += this.wishlisted[i].type + number + '-';	

		}

		// main wishlist patch - makes sure that the main wishlist ooblets are visible if wishlist mode is currently on
		if ($('#filter-wishenabled').is(':checked')) {
			$('.almanac-fullwish').css('display','inline-block');
		}

		// update url

		//if wishlist becomes empty, fix the url
		if (this.wishlisted.length === 0) {
			newurl = url;
		}

		else {
			newurl = url + param.substring(0, param.length - 1);
		}

		window.history.pushState({ path: newurl }, '', newurl);

	}

	/** 	show modal of wishlist
			opens a model containing an image version of the wishlist
	**/

	showCanvas() {

		window.scrollTo(0,0); 
		$.when($('.canvas-credit').show()).then((evt) =>{
			html2canvas($('.almanac-fullwish')[0], { allowTaint: true , scrollX:0, scrollY: -window.scrollY }).then(canvas => {
				$('.modal-body').append(canvas);
				$('.spinner-border').hide();
			});
		});

	}

	/** 	close modal of wishlist
			close the modal and removes the canvas and credit
	**/

	hideCanvas() {
		$('.canvas-credit').hide();
		$('.modal-body canvas').remove();
		$('.spinner-border').show();
	}

	/** 	reset checkboxes
			makes sure that the checkboxes are all properly checked on page refresh
	**/

	resetCheckbox() {

		$('.filter-details').each((i, obj) =>{
			$(obj).prop('checked', false);
		})

		$('.filter-location').each((i, obj) =>{
			$(obj).prop('checked', true);
		})

		$('#filter-wishenabled').prop('checked', false);
		$('.wishlist-convert').prop('disabled', true);


	}

	/** 	update wishlist array based on url
			takes the url parameter to populate the wishlist array
	**/

	wishFromUrl() {

		var url = window.location.href;
		var i, name, type;
		var oobArray;

		if (url.indexOf("?w=") > -1) {
			oobArray = url.match(/\?w=(.*)/,'')[1].split(/-/);

			for(i=0;i<oobArray.length;i++){

				type = oobArray[i].match(/[gcu]/)[0];
				name = oobArray[i].match(/\d+/);
				name = this.oobletsArray[name];

				this.wishlisted.push({name:name, type:type});
				
			}
			this.applyWishlist();
		}
	}
}

var a = new Main();
