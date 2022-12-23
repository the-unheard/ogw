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

		this.furnitures = [
					{
						'type': 'armchairs',
						'items': [
							'fancy_red_chair',
							'green_comfy_midcentury_armchair',
							'green_country_chair',
							'grey_scoop_armchair',
							'indoor_outdoor_chair',
							'jetsetter_armchair',
							'old_country_armchair_brown',
							'old_country_armchair_white',
							'purple_cocktail_armchair',
							'red_scoop_armchair',
							'teal_midcentury_armchair',
							'victorian_armchair'
						]
					}, {
						'type': 'beds',
						'items': [
							'angular_bed',
							'bed_of_optimism',
							'camping_cot',
							'dark_angular_bed',
							'iron_bed',
							'iron_bunkbed',
							'messy_bed',
							'sun_bed'
						]
					}, {
						'type': 'chairs',
						'items': [
							'black_iron_chair',
							'cocktail_chair',
							'country_dining_chair',
							'country_rocking_chair',
							'cream_iron_chair',
							'family_restaurant_chair',
							'fancy_pink_chair',
							'future_stool',
							'heart_chair',
							'marshmallow_chair',
							'passable_chair',
							'red_wooden_chair',
							'retro_green_chair',
							'retro_pink_chair',
							'tiki_barstool',
							'useful_stool'
						]
					}, {
						'type': 'chests',
						'items': [
							'common_treasure_chest',
							'common_treasure_chest_black',
							'common_treasure_chest_brown',
							'less_common_chest_black',
							'less_common_chest_gold',
							'less_common_chest_light',
							'less_common_chest_red'
						]
					}, {
						'type': 'couches',
						'items': [
							'cozy_couch',
							'doily_loveseat',
							'fancy_red_couch',
							'gilded_loveseat',
							'green_comfy_midcentury_couch',
							'green_country_couch',
							'grey_scoop_couch',
							'indoor_outdoor_couch',
							'marshmallow_couch',
							'red_scoop_couch',
							'teal_midcentury_couch',
							'yellow_scoop_couch'
						]
					}, {
						'type': 'drawers',
						'items': [
							'cream_cabinet',
							'dresser_with_planties',
							'green_caster_cabinet',
							'hero_dresser',
							'little_square_dresser',
							'midcentury_wooden_dresser',
							'pale_blue_dresser',
							'pink_dresser',
							'simple_wooden_dresser',
							'small_step_dresser',
							'two_plop_desk',
							'yellow_caster_cabinet'
						]
					}, {
						'type': 'lights',
						'items': [
							'accent_reeds',
							'cutesy_lamp',
							'halo_floor_lamp',
							'odds_and_angles_floor_lamp',
							'red_floor_lamp',
							'spookyish_floor_lamp'
						]
					}, {
						'type': 'others',
						'items': [
							'beanbag',
							'elevation_station_table',
							'fireplace_of_fright',
							'gilded_tea_cart',
							'old_hot_plate',
							'old_luggage',
							'telescope',
							'tiki_bar',
							'tiki_palm_tree',
							'tray_of_curated_cruft'
						]
					}, {
						'type': 'shelves',
						'items': [
							'cozy_case_empty',
							'dark_smoothed_bookshelf',
							'gilded_shelves',
							'plain_bookshelf',
							'smoothed_bookshelf_white',
							'smoothed_cabinet'
						]
					}, {
						'type': 'tables',
						'items': [
							'campy_coffee_table',
							'country_desk',
							'foldable_table',
							'heart_coffee_table',
							'iron_table',
							'marshmallow_coffee_table',
							'midcentury_maybe_coffee_table',
							'midcentury_maybe_coffee_table_brown',
							'midcentury_maybe_table',
							'old_country_table',
							'plain_coffee_table',
							'retro_long_display_stand',
							'retro_small_display_stand',
							'round_coffee_table',
							'slate_desk',
							'small_round_table',
							'tiki_table',
							'wobbly_table'
						]
					}, {
						'type': 'paints',
						'items': [
							'bright_stripes_paint',
							'cream_paint',
							'cute_stucco_paint',
							'dust_bowl_paint',
							'green_paint',
							'pink_paint',
							'sharp_stripes_paint',
							'soft_stripes_paint',
							'teal_paint'
						]
					}
		]

		this.decors = [
				{
					'type': 'floorings',
					'count': 11
				}, {
					'type': 'wallpapers',
					'count': 25
				}
		]
				
		this.populateFurnitures();
		this.populateDecors();
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

	}

	/** 	Populate furnitures
			Populate furnitures list; add furniture image and name
	**/

	populateFurnitures() {

		var i, j, type, item;

		for(i = 0; i < this.furnitures.length; i++) {
			type = this.furnitures[i].type;

			for(j = 0; j < this.furnitures[i].items.length; j++) {
				item = this.furnitures[i].items[j];

				$('*[data-furntype="'+type+'"]').append(
					$(document.createElement('div'))
						.addClass('furniture-item')
						.append(
							$(document.createElement('div'))
								.css('background-image', 'url("images/furnitures/'+type+'/'+item+'.png")')
							)
						.append(
							$(document.createElement('p'))
								.append($(document.createTextNode(item.replace(/_/g,' '))))
							)
					)
			}
		}

	}

	/** 	Populate decors
			Populate decors list; add decors image
	**/

	populateDecors() {

		var i, j, type;

		for(i = 0; i < this.decors.length; i++) {
			type = this.decors[i].type;

			for(j = 0; j < this.decors[i].count; j++) {

				console.log(j)

				$('*[data-furntype="'+type+'"]').append(
					$(document.createElement('div'))
						.addClass('furniture-item')
						.append(
							$(document.createElement('div'))
								.css('background-image', 'url("images/furnitures/'+type+'/'+j+'.png")')
							)
						.append(
							$(document.createElement('p'))
								.append($(document.createTextNode(' ')))
							)
					)
			}
		}

	}


}

var a = new Main();

