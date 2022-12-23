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
		this.seeds = [{
						'place': 'badgetown',
						'type': 'caroot',
						'price': 5,
						'crops': 1,
						'meed': 7
					}, {
					 	'place': 'portforward',
						'type': 'cellulettuce',
						'price': 45,
						'crops': 1,
						'meed': 50
					}, {
					 	'place': 'badgetown',
						'type': 'clothlet',
						'price': 32,
						'crops': 1,
						'meed': 10
					}, {
					 	'place': 'nullwhere',
						'type': 'dregplant',
						'price': 40,
						'crops': 1,
						'meed': 160
					}, {
					 	'place': 'mamoonia',
						'type': 'fartichoke',
						'price': 8,
						'crops': 1,
						'meed': 30
					}, {
					 	'place': 'badgetown',
						'type': 'flootiflower',
						'alt': 'flooti sauce',
						'price': 7,
						'crops': 4,
						'meed': 5
					}, {
					 	'hidden': true,
					 	'type': 'flooti sauce',
					 	'price': 7,
					 	'crops': 4
					}, {
					 	'place': 'nullwhere',
						'type': 'freep',
						'price': 24,
						'crops': 6,
						'meed': 12
					}, {
						'place': 'nullwhere',
						'type': 'hyperglob',
						'price': 40,
						'crops': 1,
						'meed': 180
					}, {
					 	'place': 'badgetown',
						'type': 'lopauliflower',
						'price': 10,
						'crops': 1,
						'meed': 24
					}, {
					 	'place': 'badgetown',
						'type': 'muz',
						'alt': 'muz flour',
						'price': 3,
						'crops': 1,
						'meed': 5
					}, {
					 	'hidden': true,
					 	'type': 'muz flour',
					 	'price': 3,
					 	'crops': 1
					}, {
					 	'place': 'badgetown',
						'type': 'pompadoot',
						'alt': 'pompadoot juice',
						'price': 8,
						'crops': 1,
						'meed': 26
					}, {
					 	'hidden': true,
					 	'type': 'pompadoot juice',
					 	'price': 8,
					 	'crops': 1
					}, {
					 	'place': 'mamoonia',
						'type': 'sparkflower',
						'price': 10,
						'crops': 2,
						'meed': 20
					}, {
					 	'place': 'badgetown',
						'type': 'springbean',
						'alt': 'ground springbean',
						'price': 6,
						'crops': 3,
						'meed': 6
					}, {
					 	'hidden': true,
					 	'type': 'ground springbean',
					 	'price': 6,
					 	'crops': 3
					}, {
					 	'place': 'badgetown',
						'type': 'sweetiebeetie',
						'alt': 'froobtose',
						'price': 5,
						'crops': 1,
						'meed': 11
					}, {
					 	'hidden': true,
					 	'type': 'froobtose',
					 	'price': 5,
					 	'crops': 1
					}, {
						'place': 'portforward',
					   'type': 'thimbi',
					   'price': 50,
					   'crops': 4,
					   'meed': 55
					}, {
					 	'place': 'badgetown',
						'type': 'zinooka',
						'price': 10,
						'crops': 3,
						'meed': 99
					}];

		this.others = [ {
						'place': 'badgetown',
						'type': 'balmybloom',
						'location': 'cactus'
					},{
						'place': 'badgetown',
						'type': 'boregus',
						'location': 'ground',
						'meed': 12
					},{
						'place': 'port forward',
						'type': 'bulk candy',
						'location': 'fishing'
					}, {
						'place': 'badgetown',
						'type': 'buttonboy',
						'location': 'ground',
						'meed': 2
					}, {
						'place': 'badgetown',
						'type': 'crumberry',
						'location': 'tree',
						'meed': 2
					}, {
						'place': 'badgetown',
						'type': 'curlyhorn',
						'location': 'shore',
						'meed': 100
					}, {
						'place': 'badgetown',
						'type': 'gastroglob',
						'location': 'shore',
						'meed': 1
					}, {
						'place': 'nullwhere',
						'type': 'gember',
						'location': 'ground'
					}, {
						'place': 'badgetown',
						'type': 'nurny',
						'location': 'breaking rocks / fishing'
					}, {
						'place': 'badgetown',
						'type': 'oobsidian',
						'location': 'breaking rocks / fishing / ground / gleamies'
					}, {
						'place': 'badgetown',
						'type': 'planklet',
						'location': 'chopping woods / fishing',
						'meed': 3
					}, {
						'place': 'badgetown',
						'type': 'quib',
						'location': 'tree',
						'meed': 1
					}, {
						'place': 'badgetown',
						'type': 'rainplop',
						'location': 'ground during rain'
					}, {
						'place': 'badgetown',
						'type': 'seaplop',
						'location': 'shore',
						'meed': 6
					}, {
						'place': 'badgetown',
						'type': 'shelbo',
						'location': 'shore',
						'meed': 3
					}, {
						'place': 'badgetown',
						'type': 'snowplop',
						'location': 'ground'
					}, {
						'place': 'port forward',
						'type': 'soggy balloon',
						'location': 'fishing'
					}, {
						'place': 'wildlands',
						'type': 'spicyspear',
						'location': 'ground'
					}, {
						'place': 'badgetown',
						'type': 'sporbet',
						'location': 'ground',
						'meed': 3
					}, {
						'place': 'mamoonia',
						'type': 'sprockut',
						'location': 'ground'
					}]

		this.hidden = [{
							'type': 'spressy',
							'cost': 9
					}, {
						'type': 'bread sammy',
						'cost': 14
					}]

		this.cooking = [{
						'recipe': 'a very cellulettuce sammy',
						'ingredients':
							[{
								'type': 'bread sammy',
								'qty': 1
							},{
								'type': 'cellulettuce',
								'qty': 1
							}]
					}, {
						'recipe': 'bean juice',
						'ingredients':
							[{
								'type': 'ground springbean',
								'qty': 1
							}]
					}, {
						'recipe': 'beetie curd',
						'ingredients':
							[{
								'type': 'sweetiebeetie',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'blue goo pie',
						'ingredients':
							[{
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'zinooka',
								'qty': 3
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'bread sammy',
						'ingredients':
							[{
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 3
							}]
					}, {
						'recipe': 'candy salad',
						'ingredients':
							[{
								'type': 'bulk candy',
								'qty': 1
							}, {
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'sporbet',
								'qty': 1
							}]
					}, {
						'recipe': 'caroot cake',
						'ingredients':
							[{
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}, {
								'type': 'caroot',
								'qty': 3
							}]
					}, {
						'recipe': 'clambrosia',
						'ingredients':
							[{
								'type': 'sweetiebeetie',
								'qty': 1
							}, {
								'type': 'sporbet',
								'qty': 1
							}, {
								'type': 'shelbo',
								'qty': 1
							}]
					}, {
						'recipe': 'delislush',
						'ingredients':
							[{
								'type': 'snowplop',
								'qty': 2
							}, {
								'type': 'flooti sauce',
								'qty': 2
							}, {
								'type': 'pompadoot juice',
								'qty': 1
							}]
					}, {
						'recipe': 'flooti karioka',
						'ingredients':
							[{
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'flootiflower',
								'qty': 2
							}]
					}, {
						'recipe': 'glob blobs',
						'ingredients':
							[{
								'type': 'hyperglob',
								'qty': 1
							}, {
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'gloom bun',
						'ingredients':
							[{
								'type': 'muz flour',
								'qty': 1
							}, {
								'type': 'boregus',
								'qty': 2
							}, {
								'type': 'pompadoot juice',
								'qty': 1
							}, {
								'type': 'freep',
								'qty': 3
							}]
					}, {
						'recipe': 'go go cupcake',
						'ingredients':
							[{
								'type': 'muz flour',
								'qty': 1
							}, {
								'type': 'spressy',
								'qty': 1
							}, {
								'type': 'flooti sauce',
								'qty': 3
							}]
					}, {
						'recipe': 'hop dob',
						'ingredients':
							[{
								'type': 'caroot',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'hop hop hop dob',
						'ingredients':
							[{
								'type': 'spicyspear',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'lurge latty',
						'ingredients':
							[{
								'type': 'ground springbean',
								'qty': 2
							}, {
								'type': 'pompadoot juice',
								'qty': 1
							}]
					}, {
						'recipe': 'mamoonia macaroon',
						'ingredients':
							[{
								'type': 'pompadoot juice',
								'qty': 1
							}, {
								'type': 'sparkflower',
								'qty': 2
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'muzimi',
						'ingredients':
							[{
								'type': 'flootiflower',
								'qty': 1
							}, {
								'type': 'muz',
								'qty': 2
							}, {
								'type': 'planklet',
								'qty': 1
							}]
					}, {
						'recipe': 'oodles',
						'ingredients':
							[{
								'type': 'buttonboy',
								'qty': 2
							}, {
								'type': 'boregus',
								'qty': 1
							}, {
								'type': 'muz',
								'qty': 1
							}]
					}, {
						'recipe': 'pibblepug pie',
						'ingredients':
							[{
								'type': 'muz flour',
								'qty': 1
							}, {
								'type': 'froobtose',
								'qty': 2
							}]
					}, {
						'recipe': 'pneumatic gnocchi',
						'ingredients':
							[{
								'type': 'sprockut',
								'qty': 1
							}, {
								'type': 'soggy balloon',
								'qty': 1
							}, {
								'type': 'muz flour',
								'qty': 1
							}]
					}, {
						'recipe': 'quib tart',
						'ingredients':
							[{
								'type': 'froobtose',
								'qty': 1
							}, {
								'type': 'quib',
								'qty': 2
							}]
					}, {
						'recipe': 'roast dregs',
						'ingredients':
							[{
								'type': 'dregplant',
								'qty': 1
							}, {
								'type': 'flootiflower',
								'qty': 3
							}, {
								'type': 'lopauliflower',
								'qty': 1
							}]
					}, {
						'recipe': 'sootheysip',
						'ingredients':
							[{
								'type': 'balmybloom',
								'qty': 8
							}]
					}, {
						'recipe': 'spressy',
						'ingredients':
							[{
								'type': 'ground springbeans',
								'qty': 2
							}, {
								'type': 'froobtose',
								'qty': 1
							}]
					}, {
						'recipe': 'thimbi tartare',
						'ingredients':
							[{
								'type': 'thimbi',
								'qty': 3
							}, {
								'type': 'muz flour',
								'qty': 1
							}, {
								'type': 'quib',
								'qty': 1
							}]
					}, {
						'recipe': 'zinooka cake',
						'ingredients':
							[{
								'type': 'zinooka',
								'qty': 3
							}, {
								'type': 'flooti sauce',
								'qty': 3
							}, {
								'type': 'quib',
								'qty': 3
							}, {
								'type': 'froobtose',
								'qty': 3
							}, {
								'type': 'muz flour',
								'qty': 3
							}]
					}]

		this.plennyOrders = [
								[
									{
										'type': 'caroot',
										'multiplier': 9.1
									}, {
										'type': 'clothlet',
										'multiplier': 13
									}, {
										'type': 'muz',
										'multiplier': 6.5
									}, {
										'type': 'nurny',
										'multiplier': 2.6
									}, {
										'type': 'planklet',
										'multiplier': 3.9
									}, {
										'type': 'sweetiebeetie',
										'multiplier': 14.3
									}
								],
								[
									{
										'type': 'flootiflower',
										'multiplier': 8
									}, {
										'type': 'froobtose',
										'multiplier': 24
									}, {
										'type': 'ground springbean',
										'multiplier': 12.8
									}, {
										'type': 'lopauliflower',
										'multiplier': 38.4
									}, {
										'type': 'muz flour',
										'multiplier': 9.6
									}, {
										'type': 'pompadoot',
										'multiplier': 41.6
									}, {
										'type': 'springbean',
										'multiplier': 9.6
									}, {
										'type': 'zinooka',
										'multiplier': 14.4
									}
								],
								[
									{
										'type': 'bean juice',
										'multiplier': 30
									}, {
										'type': 'beetie curd',
										'multiplier': 50
									}, {
										'type': 'clambrosia',
										'multiplier': 40
									}, {
										'type': 'flooti karioka',
										'multiplier': 60
									}, {
										'type': 'hop dob',
										'multiplier': 36
									}, {
										'type': 'muz flour',
										'multiplier': 12
									}, {
										'type': 'oodles',
										'multiplier': 48
									}, {
										'type': 'pompadoot juice',
										'multiplier': 64
									}
								],
								[
									{
										'type': 'blue goo pie',
										'multiplier': 240
									}, {
										'type': 'go go cupcake',
										'multiplier': 240
									}, {
										'type': 'lurge latty',
										'multiplier': 288
									}, {
										'type': 'pibblepug pie',
										'multiplier': 170.4
									}, {
										'type': 'spressy',
										'multiplier': 96
									}
								]
							]

		this.cafe = [{
						'type': 'a very cellulettuce sammy',
						'sale': 100
					}, {
						'type': 'bean juice',
						'sale': 15
					}, {
						'type': 'bread sammy',
						'sale': 40
					}, {
						'type': 'candy salad',
						'sale': 50
					}, {
						'type': 'caroot cake',
						'sale': 67
					}, {
						'type': 'clambrosia',
						'sale': 20
					}, {
						'type': 'delislush',
						'sale': 140
					}, {
						'type': 'flooti karioka',
						'sale': 30
					}, {
						'type': 'glob blobs',
						'sale': 250
					}, {
						'type': 'gloom bun',
						'sale': 120
					}, {
						'type': 'go go cupcake',
						'sale': 100
					}, {
						'type': 'ground springbean',
						'sale': 8
					}, {
						'type': 'hop dob',
						'sale': 18
					}, {
						'type': 'hop hop hop dob',
						'sale': 110
					}, {
						'type': 'lurge latty',
						'sale': 120
					}, {
						'type': 'oodles',
						'sale': 24
					}, {
						'type': 'pneumatic gnocchi',
						'sale': 100
					}, {
						'type': 'quib tart',
						'sale': 30
					}, {
						'type': 'roast dregs',
						'sale': 249
					}, {
						'type': 'sootheysip',
						'sale': 200
					}, {
						'type': 'spressy',
						'sale': 40
					}, {
						'type': 'springbean',
						'sale': 9
					}, {
						'type': 'thimbi tartare',
						'sale': 200
					}, {
						'type': 'zinooka cake',
						'sale': 200
					}
				]
		
		this.barMaxWidth = 250;
		this.populatePlenny();
		this.populateMeed();
		this.populateCafe();


	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		// plenny quantity buttons
		$(document).on('click', '.pro-graph-control span:not(.selected)', (evt) =>{
			var target = evt.target;
			var qty = $(target).text();
			var level = $(target).data('plenny-level') - 1;
			this.calculatePlenny(level, qty);
			$(target).parent('.pro-graph-control').find('.pro-selected').removeClass('pro-selected');
			$(target).addClass('pro-selected');
		});

	}

	/** 	creates the plenny's order elements
			creates the plenny's order elements
	**/

	populatePlenny() {

		var i, j, order, level;
		var amount = 20;
		var maxqty = [20, 30, 40, 40];

		// loop through each level
		for(i = 0; i < 4; i++) {

			level = i + 1;

			// loop through each orders
			for(j = 0; j < this.plennyOrders[i].length; j++) {

				order = this.plennyOrders[i][j].type;
				
				$('.pro-plenny'+level)
					.append(
						$(document.createElement('div'))
							.addClass('pro-graph-column row my-2')
							.append(
								$(document.createElement('div'))
									.addClass('pro-graph-bar-item col-xl-4 col-lg-5 col-md-3 col-5 text-end og-ellipsis')
								)
							.append(
								$(document.createElement('div'))
									.addClass('pro-graph-bar-wrapper col-xl-8 col-lg-7 col-md-9 col-7')
									.append(
										$(document.createElement('div'))
											.addClass('pro-graph-bar float-start me-1 rounded-pill')
										)
									.append(
										$(document.createElement('div'))
											.addClass('pro-graph-bar-label')
										)
								)
											
						)
				this.calculatePlenny(i, maxqty[i]);
			}
		}

	}

	/** 	applies the values to plenny's order elements
			applies the values to plenny's order elements
	**/

	calculatePlenny(level, amount) {

		var i, order, cost, sale, profit, width, prevwidth;
		var truelevel = level + 1;
		var profitceilings = [230, 1300, 2800, 16000];

		for(i = 0; i < this.plennyOrders[level].length; i ++) {

			order = this.plennyOrders[level][i].type;
			cost = amount * this.searchIngredient(order);
			sale = amount * this.plennyOrders[level][i].multiplier;
			profit = sale - cost;
			width = profit / profitceilings[level] * 100;
			//width = this.barMaxWidth / (100 / width);
			width = width > 0 ? width : 1;
			width = width + '%';
			prevwidth = $('.plenny'+ truelevel + ' .graph-bar').eq(i).width();

			$('.pro-plenny'+ truelevel + ' .pro-graph-bar').eq(i).width(prevwidth).animate({width:width},250);
			$('.pro-plenny'+ truelevel + ' .pro-graph-bar-label').eq(i).text(Math.round(profit));
			$('.pro-plenny'+ truelevel + ' .pro-graph-bar-item').eq(i).text(order).attr('title', order);

		}
	}

	/** 	populate meed
	**/

	populateMeed() {

		var i, item, cost, sale, profit, width;

		for(i = 0; i < this.seeds.length; i++) {

			if(this.seeds[i].meed !== undefined) {

				item = this.seeds[i].type;
				cost = this.seeds[i].price / this.seeds[i].crops;
				sale = this.seeds[i].meed;
				profit = sale - cost;
				width = profit / 200 * 100; // first number is the highest profit, rounded up
				//width = this.barMaxWidth / (100 / width); // first number is the max width
				width = width > 0 ? width : 1;
				width = width + '%';

				$('.pro-meed1')
					.append(
						$(document.createElement('div'))
							.addClass('pro-graph-column row my-2')
							.append(
								$(document.createElement('div'))
									.addClass('pro-graph-bar-item col-xl-4 col-lg-5 col-md-3 col-5 text-end og-ellipsis')
									.text(item)
									.attr('title', item)
								)
							.append(
								$(document.createElement('div'))
									.addClass('pro-graph-bar-wrapper col-xl-8 col-lg-7 col-md-9 col-7')
									.append(
										$(document.createElement('div'))
											.addClass('pro-graph-bar float-start me-1 rounded-pill')
											.width(0).animate({width:width},250)
										)
										.append(
											$(document.createElement('div'))
												.addClass('pro-graph-bar-label')
												.text(Math.round(profit))
										)
								)
												
						)
			}
		}

	}

	/** 	populate cafe
	**/

	populateCafe() {

		var i, item, cost, sale, profit, width;

		for(i = 0; i < this.cafe.length; i++) {

			item = this.cafe[i].type;
			cost = this.searchIngredient(item);
			sale = this.cafe[i].sale;
			profit = sale - cost;
			width = profit / 280 * 100; // first number is the highest profit, rounded up
			//width = this.barMaxWidth / (100 / width); // first number is the max width
			width = width > 0 ? width : 1;
			width = width + '%';

			$('.pro-cafe1')
				.append(
					$(document.createElement('div'))
						.addClass('pro-graph-column row my-2')
						.append(
							$(document.createElement('div'))
								.addClass('pro-graph-bar-item col-xl-4 col-lg-5 col-md-3 col-5 text-end og-ellipsis')
								.text(item)
								.attr('title', item)
							)	
						.append(
							$(document.createElement('div'))
								.addClass('pro-graph-bar-wrapper col-xl-8 col-lg-7 col-md-9 col-7')
								.append(
									$(document.createElement('div'))
										.addClass('pro-graph-bar float-start me-1 rounded-pill')
										.width(0).animate({width:width},250)
									)
								.append(
									$(document.createElement('div'))
										.addClass('pro-graph-bar-label')
										.text(Math.round(profit))
									)
							)			
					)
		}
	}

	/** 	search ingredient
			search the cost of the ingredient
	**/


	searchIngredient (name) {

		var pos, cost, sale, profit;
		var ing_type, ing_qty, result;

		// search in seeds
		if (this.seeds.map((e) => { return e.type; }).indexOf(name) > -1) {

			pos = this.seeds.map((e) => { return e.type; }).indexOf(name);
			cost = this.seeds[pos].price / this.seeds[pos].crops;

		}

		//search in others
		else if (this.others.map((e) => { return e.type; }).indexOf(name) > -1) {

			cost = 0;

		}

		//search in hidden
		else if (this.hidden.map((e) => { return e.type; }).indexOf(name) > -1) {

			pos = this.hidden.map((e) => { return e.type; }).indexOf(name);
			cost = this.hidden[pos].cost;

		}

		//search in cooking
		else if (this.cooking.map((e) => { return e.recipe; }).indexOf(name) > -1) {

			cost = 0;

			pos = this.cooking.map((e) => { return e.recipe; }).indexOf(name);
			for (var i = 0; i < this.cooking[pos].ingredients.length; i++) {
				ing_type = this.cooking[pos].ingredients[i].type; // name of ingredient
				ing_qty = this.cooking[pos].ingredients[i].qty; // amount of ingredient required
				result = this.searchIngredient(ing_type);
				cost += ing_qty * result;
			}
		}
		return cost;
	}


}

var a = new Main();

