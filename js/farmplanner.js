class Main {

	/** 	creates global variables
			creates a global variable for selected tiles,
			mousedown status, undo information
	**/
	
	constructor (){
		this.init();
		this.selected = 'land';
		this.mouseDown = false;
		this.tileTypes = [
			{
				'type': 'land',
				'code': '00'
			}, {
				'type': 'path',
				'code': '01'
			}, {
				'type': 'tilled',
				'code': '02'
			}, {
				'type': 'coop1',
				'code': '03'
			}, {
				'type': 'coop2',
				'code': '04'
			}, {
				'type': 'coop3',
				'code': '05'
			}, {
				'type': 'coop4',
				'code': '06'
			}, {
				'type': 'coop5',
				'code': '07'
			}, {
				'type': 'crunchster',
				'code': '08'
			}, {
				'type': 'swooshler',
				'code': '09'
			}, {
				'type': 'sprinkler_basic',
				'code': '10'
			}, {
				'type': 'sprinkler_good',
				'code': '11'
			}, {
				'type': 'sprinkler_medium',
				'code': '12'
			}, {
				'type': 'rock',
				'code': '13'
			}, {
				'type': 'wood',
				'code': '14'
			}, {
				'type': 'weed',
				'code': '15'
			}, {
				'type': 'spaceheater',
				'code': '16'
			}, {
				'type': 'sprinklehot',
				'code': '17'
			}, {
				'type': 'sprinklehot_xl',
				'code': '18'
			}, {
				'type': 'ooblet_seed1_wbg',
				'code': '19'
			}, {
				'type': 'ooblet_seed2_wbg',
				'code': '20'
			}, {
				'type': 'ooblet_seed3_wbg',
				'code': '21'
			}, {
				'type': 'caroot_wbg',
				'code': '22'
			}, {
				'type': 'clothplant_wbg',
				'code': '23'
			}, {
				'type': 'dregplant_wbg',
				'code': '24'
			}, {
				'type': 'fartichoke_wbg',
				'code': '25'
			}, {
				'type': 'flooti_wbg',
				'code': '26'
			}, {
				'type': 'freep_wbg',
				'code': '27'
			}, {
				'type': 'hyperglob_wbg',
				'code': '28'
			}, {
				'type': 'lopauliflower_wbg',
				'code': '29'
			}, {
				'type': 'muz_wbg',
				'code': '30'
			}, {
				'type': 'pompadoot_wbg',
				'code': '31'
			}, {
				'type': 'sparkflower_wbg',
				'code': '32'
			}, {
				'type': 'springbean_wbg',
				'code': '33'
			}, {
				'type': 'sweetiebeetie_wbg',
				'code': '34'
			}, {
				'type': 'zinooka_wbg',
				'code': '35'
			}, {
				'type': 'c_bittle',
				'code': '36'
			}, {
				'type': 'c_bristlebud',
				'code': '37'
			}, {
				'type': 'c_chickadingding',
				'code': '38'
			}, {
				'type': 'c_clickyclaws',
				'code': '39'
			}, {
				'type': 'c_clomper',
				'code': '40'
			}, {
				'type': 'c_derble',
				'code': '41'
			}, {
				'type': 'c_dooziedug',
				'code': '42'
			}, {
				'type': 'c_dumbirb',
				'code': '43'
			}, {
				'type': 'c_firmo',
				'code': '44'
			}, {
				'type': 'c_fleeble',
				'code': '45'
			}, {
				'type': 'c_fripp',
				'code': '46'
			}, {
				'type': 'c_glanter',
				'code': '47'
			}, {
				'type': 'c_gloopylonglegs',
				'code': '48'
			}, {
				'type': 'c_grebun',
				'code': '49'
			}, {
				'type': 'c_gubwee',
				'code': '50'
			}, {
				'type': 'c_gullysplots',
				'code': '51'
			}, {
				'type': 'c_gumple',
				'code': '52'
			}, {
				'type': 'c_hermble',
				'code': '53'
			}, {
				'type': 'c_isopud',
				'code': '54'
			}, {
				'type': 'c_jama',
				'code': '55'
			}, {
				'type': 'c_kingwa',
				'code': '56'
			}, {
				'type': 'c_legsy',
				'code': '57'
			}, {
				'type': 'c_lickzer',
				'code': '58'
			}, {
				'type': 'c_lumpstump',
				'code': '59'
			}, {
				'type': 'c_marshling',
				'code': '60'
			}, {
				'type': 'c_moogy',
				'code': '61'
			}, {
				'type': 'c_namnam',
				'code': '62'
			}, {
				'type': 'c_nuppo',
				'code': '63'
			}, {
				'type': 'c_oogum',
				'code': '64'
			}, {
				'type': 'c_pantsabear',
				'code': '65'
			}, {
				'type': 'c_petula',
				'code': '66'
			}, {
				'type': 'c_plob',
				'code': '67'
			}, {
				'type': 'c_radlad',
				'code': '68'
			}, {
				'type': 'c_shrumbo',
				'code': '69'
			}, {
				'type': 'c_sidekey',
				'code': '70'
			}, {
				'type': 'c_skuffalo',
				'code': '71'
			}, {
				'type': 'c_snurfler',
				'code': '72'
			}, {
				'type': 'c_spuddle',
				'code': '73'
			}, {
				'type': 'c_tamlin',
				'code': '74'
			}, {
				'type': 'c_tud',
				'code': '75'
			}, {
				'type': 'c_unnyhunny',
				'code': '76'
			}, {
				'type': 'c_whirlitzer',
				'code': '77'
			}, {
				'type': 'c_wigglewip',
				'code': '78'
			}, {
				'type': 'c_wuddlin',
				'code': '79'
			}, {
				'type': 'u_bittle',
				'code': '80'
			}, {
				'type': 'u_bristlebud',
				'code': '81'
			}, {
				'type': 'u_chickadingding',
				'code': '82'
			}, {
				'type': 'u_clickyclaws',
				'code': '83'
			}, {
				'type': 'u_clomper',
				'code': '84'
			}, {
				'type': 'u_derble',
				'code': '85'
			}, {
				'type': 'u_dooziedug',
				'code': '86'
			}, {
				'type': 'u_dumbirb',
				'code': '87'
			}, {
				'type': 'u_firmo',
				'code': '88'
			}, {
				'type': 'u_fleeble',
				'code': '89'
			}, {
				'type': 'u_fripp',
				'code': '90'
			}, {
				'type': 'u_glanter',
				'code': '91'
			}, {
				'type': 'u_gloopylonglegs',
				'code': '92'
			}, {
				'type': 'u_grebun',
				'code': '93'
			}, {
				'type': 'u_gubwee',
				'code': '94'
			}, {
				'type': 'u_gullysplots',
				'code': '95'
			}, {
				'type': 'u_gumple',
				'code': '96'
			}, {
				'type': 'u_hermble',
				'code': '97'
			}, {
				'type': 'u_isopud',
				'code': '98'
			}, {
				'type': 'u_jama',
				'code': '99'
			}, {
				'type': 'u_kingwa',
				'code': 'a0'
			}, {
				'type': 'u_legsy',
				'code': 'a1'
			}, {
				'type': 'u_lickzer',
				'code': 'a2'
			}, {
				'type': 'u_lumpstump',
				'code': 'a3'
			}, {
				'type': 'u_marshling',
				'code': 'a4'
			}, {
				'type': 'u_moogy',
				'code': 'a5'
			}, {
				'type': 'u_namnam',
				'code': 'a6'
			}, {
				'type': 'u_nuppo',
				'code': 'a7'
			}, {
				'type': 'u_oogum',
				'code': 'a8'
			}, {
				'type': 'u_pantsabear',
				'code': 'a9'
			}, {
				'type': 'u_petula',
				'code': 'b0'
			}, {
				'type': 'u_plob',
				'code': 'b1'
			}, {
				'type': 'u_radlad',
				'code': 'b2'
			}, {
				'type': 'u_shrumbo',
				'code': 'b3'
			}, {
				'type': 'u_sidekey',
				'code': 'b4'
			}, {
				'type': 'u_skuffalo',
				'code': 'b5'
			}, {
				'type': 'u_snurfler',
				'code': 'b6'
			}, {
				'type': 'u_spuddle',
				'code': 'b7'
			}, {
				'type': 'u_tamlin',
				'code': 'b8'
			}, {
				'type': 'u_tud',
				'code': 'b9'
			}, {
				'type': 'u_unnyhunny',
				'code': 'c0'
			}, {
				'type': 'u_whirlitzer',
				'code': 'c1'
			}, {
				'type': 'u_wigglewip',
				'code': 'c2'
			}, {
				'type': 'u_wuddlin',
				'code': 'c3'
			}, {
				'type': 'g_bittle',
				'code': 'c4'
			}, {
				'type': 'g_bristlebud',
				'code': 'c5'
			}, {
				'type': 'g_chickadingding',
				'code': 'c6'
			}, {
				'type': 'g_clickyclaws',
				'code': 'c7'
			}, {
				'type': 'g_clomper',
				'code': 'c8'
			}, {
				'type': 'g_derble',
				'code': 'c9'
			}, {
				'type': 'g_dooziedug',
				'code': 'd0'
			}, {
				'type': 'g_dumbirb',
				'code': 'd1'
			}, {
				'type': 'g_firmo',
				'code': 'd2'
			}, {
				'type': 'g_fleeble',
				'code': 'd3'
			}, {
				'type': 'g_fripp',
				'code': 'd4'
			}, {
				'type': 'g_glanter',
				'code': 'd5'
			}, {
				'type': 'g_gloopylonglegs',
				'code': 'd6'
			}, {
				'type': 'g_grebun',
				'code': 'd7'
			}, {
				'type': 'g_gubwee',
				'code': 'd8'
			}, {
				'type': 'g_gullysplots',
				'code': 'd9'
			}, {
				'type': 'g_gumple',
				'code': 'e0'
			}, {
				'type': 'g_hermble',
				'code': 'e1'
			}, {
				'type': 'g_isopud',
				'code': 'e2'
			}, {
				'type': 'g_jama',
				'code': 'e3'
			}, {
				'type': 'g_kingwa',
				'code': 'e4'
			}, {
				'type': 'g_legsy',
				'code': 'e5'
			}, {
				'type': 'g_lickzer',
				'code': 'e6'
			}, {
				'type': 'g_lumpstump',
				'code': 'e7'
			}, {
				'type': 'g_marshling',
				'code': 'e8'
			}, {
				'type': 'g_moogy',
				'code': 'e9'
			}, {
				'type': 'g_namnam',
				'code': 'f0'
			}, {
				'type': 'g_nuppo',
				'code': 'f1'
			}, {
				'type': 'g_oogum',
				'code': 'f2'
			}, {
				'type': 'g_pantsabear',
				'code': 'f3'
			}, {
				'type': 'g_petula',
				'code': 'f4'
			}, {
				'type': 'g_plob',
				'code': 'f5'
			}, {
				'type': 'g_radlad',
				'code': 'f6'
			}, {
				'type': 'g_shrumbo',
				'code': 'f7'
			}, {
				'type': 'g_sidekey',
				'code': 'f8'
			}, {
				'type': 'g_skuffalo',
				'code': 'f9'
			}, {
				'type': 'g_snurfler',
				'code': 'g0'
			}, {
				'type': 'g_spuddle',
				'code': 'g1'
			}, {
				'type': 'g_tamlin',
				'code': 'g2'
			}, {
				'type': 'g_tud',
				'code': 'g3'
			}, {
				'type': 'g_unnyhunny',
				'code': 'g4'
			}, {
				'type': 'g_whirlitzer',
				'code': 'g5'
			}, {
				'type': 'g_wigglewip',
				'code': 'g6'
			}, {
				'type': 'g_wuddlin',
				'code': 'g7'
			}, {
				'type': 'c_angkze',
				'code': 'g8'
			}, {
				'type': 'u_angkze',
				'code': 'g9'
			}, {
				'type': 'g_angkze',
				'code': 'h0'
			}, {
				'type': 'c_quabbo',
				'code': 'h1'
			}, {
				'type': 'u_quabbo',
				'code': 'h2'
			}, {
				'type': 'g_quabbo',
				'code': 'h3'
			}, {
				'type': 'cellulettuce_wbg',
				'code': 'h4'
			}, {
				'type': 'thimbi_wbg',
				'code': 'h5'
			}, {
				'type': 'c_bibbin',
				'code': 'h6'
			}, {
				'type': 'u_bibbin',
				'code': 'h7'
			}, {
				'type': 'g_bibbin',
				'code': 'h8'
			}, {
				'type': 'c_bunglebee',
				'code': 'h9'
			}, {
				'type': 'u_bunglebee',
				'code': 'i0'
			}, {
				'type': 'g_bunglebee',
				'code': 'i1'
			}, {
				'type': 'c_gopslop',
				'code': 'i2'
			}, {
				'type': 'u_gopslop',
				'code': 'i3'
			}, {
				'type': 'g_gopslop',
				'code': 'i4'
			}, {
				'type': 'c_rockstack',
				'code': 'i5'
			}, {
				'type': 'u_rockstack',
				'code': 'i6'
			}, {
				'type': 'g_rockstack',
				'code': 'i7'
			}, {
				'type': 'c_taterflop',
				'code': 'i8'
			}, {
				'type': 'u_taterflop',
				'code': 'i9'
			}, {
				'type': 'g_taterflop',
				'code': 'j0'
			}
		];

	}
	
	/** 	initiates Main
			creates the empty farm
			sets default selected tile as land
	**/
	
	init() {
		this.ooblets = ['angkze',
			'bibbin',
			'bittle',
			'bristlebud',
			'bunglebee',
			'chickadingding',
			'clickyclaws',
			'clomper',
			'derble',
			'dooziedug',
			'dumbirb',
			'firmo',
			'fleeble',
			'fripp',
			'glanter',
			'gloopylonglegs',
			'gopslop',
			'grebun',
			'gubwee',
			'gullysplot',
			'gumple',
			'hermble',
			'isopud',
			'jama',
			'kingwa',
			'legsy',
			'lickzer',
			'lumpstump',
			'marshling',
			'moogy',
			'namnam',
			'nuppo',
			'oogum',
			'pantsabear',
			'petula',
			'plob',
			'quabbo',
			'radlad',
			'rockstack',
			'shrumbo',
			'sidekey',
			'skuffalo',
			'snurfler',
			'spuddle',
			'tamlin',
			'taterflop',
			'tud',
			'unnyhunny',
			'whirlitzer',
			'wigglewip',
			'wuddlin'
		];
		this.populateOoblets();
		this.events();
		this.createFarmTiles();
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		// always keep one accordion opened

			// when an accordion is opened, disable its data-bs-toggle attribute
			// when an accordion is closed (by another accordion opening), re-enable its data-bs-toggle attribute

				$('.fp-controlwrap .collapse').on('show.bs.collapse', (evt) => {
					$(evt.target).parent().find('button').attr('data-bs-toggle', 'disabled');
				}).on('hide.bs.collapse', (evt) => {
					$(evt.target).parent().find('button').attr('data-bs-toggle', 'collapse');
				});

		// select a tile from controls

			$(document).on('click', '.controls-btn', (evt) => {
				this.tileSelect(evt.target);
			});

		// apply a tile when clicking or holding left click

			$(document).on('mousedown', '.tile', (evt) =>{
				this.mouseDown = true;
				this.changeTile(evt.target);
			});

			$(document).on('mouseup', '.tile', () =>{
				this.mouseDown = false;
			});

			$(document).on('mouseover', '.tile', (evt) => {
				if (this.mouseDown) {
					this.changeTile(evt.target);
				}
			});

		// generate code

			$(document).on('click', '.code-get', () =>{
				this.generateCode();
			});

		// apply code

			$(document).on('click', '.code-apply', () =>{
				this.generateMap();
			});

		// copy code

			$(document).on('click', '.code-copy', () =>{
				this.copyCode();
			});

		// generate sample

			$(document).on('click', '.fp-demo', (evt) =>{
				this.generateSample(evt.target);
			});

		// trigger upon canvas modal opening and closing
		$('#fp-canvasModal').on('show.bs.modal', () =>{
			this.showModal();
		}).on('hidden.bs.modal', () =>{
			this.closeModal();
		});

	}



	/** 	populate ooblet buttons
			adds all the common, uncommon, and gleamy ooblets to the control panel
	 **/

	populateOoblets() {

		let toTitleCase = (str) => {return str.replace(/(?:^|\s)\w/g, (match) => { return match.toUpperCase()})}

		this.ooblets.forEach(ooblet => {
			$('.fp-common-ooblets').append(
				$(document.createElement('div'))
					.addClass('controls-btn c_' + ooblet)
					.attr('title', 'Common ' + toTitleCase(ooblet))
			)

			$('.fp-uncommon-ooblets').append(
				$(document.createElement('div'))
					.addClass('controls-btn u_' + ooblet)
					.attr('title', 'Uncommon ' + toTitleCase(ooblet))
			)

			$('.fp-gleamy-ooblets').append(
				$(document.createElement('div'))
					.addClass('controls-btn g_' + ooblet)
					.attr('title', 'Gleamy ' + toTitleCase(ooblet))
			)
		});

	}

	/** 	create farm tiles
			creates grass for all farm tiles
	**/

	createFarmTiles() {

		for (let i = 1; i < 769; i++){
			$('.fp-farm').append(
				$(document.createElement('div'))
					.addClass('tile '+this.randomLand())
					.attr('data-count', i)
					.attr('draggable', 'false')
				)
		}

	}

	/** 	generate random land
			generates a random land when placing a land tile or loading a map
	**/

	randomLand() {

		const random = Math.floor(Math.random() * 20) + 1;
		let landtype;

		if (random <= 18 ) {
			landtype = 'land';
		}
		else if (random === 19) {
			landtype = 'land2';
		}
		else if (random === 20) {
			landtype = 'land3';
		}
		
		return landtype;

	}

	/** 	select a tile
			remembers a chosen tile to be used on farm making
	**/

	tileSelect(target) {

		const tileType = $(target).attr('class').replace('controls-btn ','');

		// assigns the tile type based on class name to this.selected
			this.selected = tileType.replace('nbg','wbg');

		// adds the 'selected' class to the selectedTile preview element
			$('.fp-selected div').removeClass().addClass('fp-selectedTile mt-5 og-bg-grassgreen d-inline-block ' + tileType);

	}

	/** 	change a tile
			change a farm tile based on remembered selected tile
	**/

	changeTile(target) {

		$(target).removeClass();

		if (this.selected === 'land'){
			$(target).addClass('tile ' + this.randomLand());
		}
		else {
			$(target).addClass('tile ' + this.selected);
		}

	}

	/** 	generate a code based on map
			generates a code to the textarea that users can copy
	**/

	generateCode() {

		let code = '';
		const tiles = $('.tile');
		let i, j, tile;

		for (i = 0; i < tiles.length; i++) {

			tile = tiles.eq(i).attr('class').match(/tile (.*)/)[1];

			if (tile === 'land2' || tile === 'land3') {
				tile = 'land';
			}

			for(j = 0; j < this.tileTypes.length; j++){
				if (tile === this.tileTypes[j]['type']) {
					code += this.tileTypes[j]['code'];
					break;
				}
			}

		}

		$('.fp-codeinput').val(code);

	}

	/** 	generate map based on code
			generates a map based on the code pasted by the user
	**/

	generateMap(custom='') {
		
		let code = (custom === '') ? $('.fp-codeinput').val() : custom;
		let type, i, j;
		const tiles = $('.tile');

		if (code.length === 1536) {

			code = code.split(/(..)/g).filter(s=>s);


			for (i = 0; i < tiles.length; i++ ){

				type = null;

				for (j = 0; j < this.tileTypes.length; j++){

					if(code[i] === this.tileTypes[j]['code']) {

						type = this.tileTypes[j]['type'];

						if (type === 'land') {
							type = this.randomLand();
						}

						break;
					}

				}

				if (type == null) {
					$('.code-error')
						.text(code[i] + ' is an invalid code!')
						.css('visibility', 'visible');
					break;
				}

				else {
					tiles.eq(i).removeClass().addClass('tile '+type);
					$('.code-error').css('visibility', 'hidden')
				}

			}
		
		}

		else if (code.length < 1536) {
			$('.fp-error')
				.text('Oh no! Your code is too short!')
				.show()
				.delay(3000).fadeOut();
		}

		else if (code.length > 1536) {
			$('.fp-error')
				.text('Oh no! Your code is too long!')
				.show()
				.delay(3000).fadeOut();
		}

	}

	/** 	generate sample maps
			generates premade maps
	**/

	generateSample(target) {
		const sample = $(target).data('type');
		let code;
		switch (sample) {
			case 'd1':
				code = 	'000000000000000000000000000000010101010101010101010101010101010100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000100030001000300010003000100030001000000000000000000000000000000010000000100000001000000010000000100000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000100000001000000010000000100000001000000000000000000000000000000010003000100030001000300010003000100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000101010101010101010101010101010101000000000000000000000000000000011313130113131301131313011313130100000000000000000000000000000001130013011300130113001301130013010000000000000000000000000000000113081301130813011309130113091301000000000000000000000000000000011301130113011301130113011301130100000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000115151501151515011515150115151501000000000000000000000000000000010101010101010101010101010101010100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000100030001000300010003000100030001000000000000000000000000000000010000000100000001000000010000000100000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000100000001000000010000000100000001000000000000000000000000000000010003000100030001000300010003000100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000101010101010101010101010101010101';
				break;
			case 'd2':
				code = 	'010101010101010101010101010101010101010101010101010101010101010101000000010000000100000001131313131313010000000100000001000000010100060001000600010006000113000909001301000600010006000100060001010000000100000001000000011300000000130100000001000000010000000101010101010101010101010101010101010101010101010101010101010101010100000001000000010000000113130101131301000000010000000100000001010006000100060001000600011414010114140100060001000600010006000101000000010000000100000001131301011313010000000100000001000000010101010101010101010101010114140101141401010101010101010101010101010000000100000001131413141313010113131413141301000000010000000101001600010016000113141314131301011313141314130100160001001600010100000001000000010101010101010101010101010101010000000100000001010000000100000001010101010101010101010101010101000000010000000101001600010016000113141314131301011313141314130100160001001600010100000001000000011314131413130101131314131413010000000100000001010101010101010101010101011414010114140101010101010101010101010101000000010000000100000001131301011313010000000100000001000000010100060001000600010006000114140101141401000600010006000100060001010000000100000001000000011313010113130100000001000000010000000101010101010101010101010101010101010101010101010101010101010101010100000001000000010000000113000000001301000000010000000100000001010006000100060001000600011300080800130100060001000600010006000101000000010000000100000001131313131313010000000100000001000000010101010101010101010101010101010101010101010101010101010101010101';
				break;
			case 'd3':
				code = 	'2323232323232323232323230101010101010101h4h4h4h4h4h4h4h4h4h4h4h42307232307232307232307230113131313131301h407h4h407h4h407h4h407h42323232323232323232323230113080000081301h4h4h4h4h4h4h4h4h4h4h4h4010101010101010101010101011300000000130101010101010101010101010125252525252525252525252501130000000013012424242424242424242424242507252507252507252507250113080000081301240724240724240724240724252525252525252525252525011300000000130124242424242424242424242401010101010101010101010101131300001313010101010101010101010101012222222222222222222222010101010101010101012626262626262626262626222222222222222222222201151515010115151501262626262626262626262622221222221222221222220115010101010101150126261226261226261226262222222222222222222222011501212021210115012626262626262626262626222222222222222222222201150121202120011501262626262626262626262622221222221222221222220115010101010101150126261226261226261226262222222222222222222222011515150101151515012626262626262626262626222222222222222222222201010101010101010101262626262626262626262601010101010101010101010101131300001313010101010101010101010101012828282828282828282828280113000000001301272727272727272727272727280728280728280728280728011309000009130127072727072727072727072728282828282828282828282801130000000013012727272727272727272727270101010101010101010101010113000000001301010101010101010101010101303030303030303030303030011309000009130129292929292929292929292930073030073030073030073001131313131313012907292907292907292907293030303030303030303030300101010101010101292929292929292929292929';
				break;
			case 'd4':
				code = 	'000000000000000000000000000000010101010101010101010101010101010100000000000000000000000000000001141414141414140114141414141414010000000000000000000000000000000114080014090014011400091400081401000000000000000000000000000000010101010101010101010101010101010100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000100030001000300010003000100030001000000000000000000000000000000010000000100000001000000010000000100000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000100000001262626262626260100000001000000000000000000000000000000010003000126262626262626010003000100000000000000000000000000000001000000012626122612262601000000010000000000000000000000000000000101010101262626262626260101010101000000000000000000000000000000010101010126262626262626010101010100000000000000000000000000000001000000012626122612262601000000010000000000000000000000000000000100030001262626262626260100030001000000000000000000000000000000010000000126262626262626010000000100000000000000000000000000000001010101010101010101010101010101010000000000000000000000000000000100000001000000010000000100000001000000000000000000000000000000010003000100030001000300010003000100000000000000000000000000000001000000010000000100000001000000010000000000000000000000000000000101010101010101010101010101010101000000000000000000000000000000011408001409001401140009140008140100000000000000000000000000000001141414141414140114141414141414010000000000000000000000000000000101010101010101010101010101010101';
				break;
			case 'd5':
				code = 	'010101010101010101010101010101010101010101010101010101010101010101000000010000000114140100000001010000000114140100000001000000010100070001000700010900010007000101000700010009010007000100070001010000000100000001141401000000010100000001141401000000010000000101010101010101010101010101010101010101010101010101010101010101010100000001130132320113010000000101000000011301323201130100000001010007000113013232011301000700010100070001130132320113010007000101000000011301323201130100000001010000000113013232011301000000010101010101130132320113010101010101010101011301323201130101010101011313131313013232011313131313010113131313130132320113131313130101010101010101323201010101010101010101010101013232010101010101010132323232323232323232323232320101323232323232323232323232323201013232323232323232323232323232010132323232323232323232323232320101010101010101323201010101010101010101010101013232010101010101010113131313130132320113131313130101131313131301323201131313131301010101010113013232011301010101010101010101130132320113010101010101000000011301323201130100000001010000000113013232011301000000010100070001130132320113010007000101000700011301323201130100070001010000000113013232011301000000010100000001130132320113010000000101010101010101010101010101010101010101010101010101010101010101010100000001000000011414010000000101000000011414010000000100000001010007000100070001080001000700010100070001000801000700010007000101000000010000000114140100000001010000000114140100000001000000010101010101010101010101010101010101010101010101010101010101010101';
				break;
			case 'd6':
				code = 	'010101010101010101010101010101010101010101010101010101010101010101151515151515150100000001000000000000010000000115151515151515010115010101010101010007000100070000070001000700010101010101011501011501000000000001000000010000000000000100000001000000000001150101150100000000000101010101010101010101010101010100000000000115010115010000120000011501151515151515151515150115010000120000011501011501000000000001150101010101010101010101011501000000000001150101150100000000000115010000000000000000000001150100000000000115010101010101010101011501000000000000000000000115010101010101010101010000000115151515150100001200000000120000011515151515010000000101000700010101010101010000000000000000000001010101010101000700010100000001130813091301000000000000000000000113091308130100000001010000000113001300130100000000000000000000011300130013010000000101000700010101010101010000000000000000000001010101010101000700010100000001151515151501000012000000001200000115151515150100000001010101010101010101150100000000000000000000011501010101010101010101150100000000000115010000000000000000000001150100000000000115010115010000000000011501010101010101010101010115010000000000011501011501000012000001150115151515151515151515011501000012000001150101150100000000000101010101010101010101010101010100000000000115010115010000000000010000000100000000000001000000010000000000011501011501010101010101000700010007000007000100070001010101010101150101151515151515150100000001000000000000010000000115151515151515010101010101010101010101010101010101010101010101010101010101010101';
				break;
			case 'd7':
				code = 	'0101010101010101010101010101010101010101010101010101010101010101012929290128282801272727013333333333330123232301h4h4h40122222201012907290128072801270727013333333333330123072301h407h40122072201012929290128282801272727013333121233330123232301h4h4h40122222201012929290128282801272727013333333333330123232301h4h4h40122222201012907290128072801270727013333333333330123072301h407h40122072201012929290128282801272727010101010101010123232301h4h4h40122222201012929290128282801272727013434343434340123232301h4h4h40122222201012907290128072801270727013434343434340123072301h407h40122072201012929290128282801272727013434121234340123232301h4h4h401222222010101010101010101010101010134343434343401010101010101010101010101011309130113091301130913013434343434340113081301130813011308130101130013011300130113001301h5h5h5h5h5h50113001301130013011300130101010101010101010101010101h5h5h5h5h5h50101010101010101010101010101323232013131310130303001h5h51212h5h50126262601252525012424240101320732013107310130073001h5h5h5h5h5h50126072601250725012407240101323232013131310130303001h5h5h5h5h5h5012626260125252501242424010132323201313131013030300101010101010101262626012525250124242401013207320131073101300730013535353535350126072601250725012407240101323232013131310130303001353535353535012626260125252501242424010132323201313131013030300135351212353501262626012525250124242401013207320131073101300730013535353535350126072601250725012407240101323232013131310130303001353535353535012626260125252501242424010101010101010101010101010101010101010101010101010101010101010101';
				break;
			case 'c':
				code = 	'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000'+
						'0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
				break;
		}

		if (code !== undefined) {
			this.generateMap(code);
		}
	}

	/** 	copies code to clipboard
			clicking the copy button copies the farm code to the clipboard
	**/

	copyCode() {

		const code = $('.fp-codeinput').val();

		navigator.clipboard.writeText(code).then(() => {
				$('.fp-error')
					.text('Copied')
					.show()
					.delay(3000).fadeOut();
			}, () => {
				$('.fp-error')
					.text('Your browser does not support Clipboard API')
					.show()
					.delay(3000).fadeOut();
		});

	}

	/** 	open modal of farm
			opens the modal and adds the canvas
	**/

	showModal() {

		window.scrollTo(0,0);
		$.when($('.fp-farmwrap').show()).then(() =>{
			html2canvas($('.fp-farmwrap')[0], {allowTaint: true , scrollX:0, scrollY: -window.scrollY }).then(canvas => {
				$('.modal-body').append(canvas);
				$('.spinner-border').hide();
			});
		});

	}

	/** 	close modal of farm
			closes the modal and removes the canvas
	**/

	closeModal() {
		$('.modal-body canvas').remove();
		$('.spinner-border').show();
	}


}

const a = new Main();
