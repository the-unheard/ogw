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

		this.recipe = [
						{
							'type': 'Learned by default',
							'recipes': ['Froobtose',
										'Hop Dob',
										'Muzimi',
										'Oodles',
										'Quib Tart']
						},{
							'type': 'Recipe Pieces',
							'recipes': ['Beetie Curd',
										'Blue Goo Pie',
										'Bread Sammy',
										'Flooti Sauce',
										'Go Go Cupcake',
										'Lurge Latty',
										'Mamoonia Macaroon',
										'Muz',
										'Pibblepug Pie',
										'Sootheysip',
										'Spressy',
										'Zinooka Cake',
										'Hop Hop Hop Dob']
						},{
							'type': 'Wishy Well',
							'recipes': ['Beanjuice',
										'Caroot Cake',
										'Clambrosia',
										'Delislush',
										'Flooti Karioka',
										'Glob Blobs',
										'Ground Springbeans',
										'Pompadoot Juice']
						},{
							'type': 'Nullwhere (Defeat the witch)',
							'recipes': ['Gloom Bun']
						},{
							'type': 'Nullwhere (Find big Oogum)',
							'recipes': ['Roast Dregs']
						},{
							'type': 'Wildlands (Level 9)',
							'recipes': ['Squishmallow']
						}
					];

		this.wildlands = [
						['Spicyspear Scrub', 'Location', '2'],
						['Hay Twig', 'Ooblets Accessory', '3'],
						['Lightylanty', 'Player Accessory', '4'],
						['Lumberjack Hat', 'Player Accessory', '5'],
						['Droneydrip Pond', 'Location', '6'],
						['Lookie Lenses', 'Player Accessory', '7'],
						['Flannel Wallpaper', 'Wallpaper', '8'],
						['Squishmallow Recipe', 'Recipe', '9'],
						['Nurnycrop Crag', 'Location', '10'],
					]

		this.wishywell = [
						{
							'type': 'Blueprint',
							'wish': [
										['Basic Sprinkler', 75],
										['Good Sprinkler', 100],
										['Medium Sprinkler', 100],
										['Swooshler', 75],
										['Oobcoop Level 2', 100],
										['Oobcoop Level 3', 100],
										['Oobcoop Level 4', 100],
										['Spaceheater', 150],
										['Sprinklehot', 200],
										['Sprinklehot XL', 300]
								]
						},{
							'type': 'Recipe',
							'wish': [
										['Beanjuice', 50],
										['Caroot Cake', 50],
										['Clambrosia', 50],
										['Delislush', 200],
										['Flooti Karioka', 50],
										['Glob Blobs', 200],
										['Ground Springbeans', 50],
										['Pompadoot Juice', 50]
								]
						},{
							'type': 'Expansion',
							'wish': [
										['Meed\'s Seeds', 75],
										['Snups I', 50],
										['Snups II', 50],
										['Snups III', 50],
										['Kibbon-bon I', 50],
										['Kibbon-bon II', 50],
										['Kibbon-bon III', 50],
										['Manatwee I', 50],
										['Manatwee II', 50],
										['Manatwee III', 50],
										['More Home Decor', 50],
										['Even More Home Decor', 75]
								]
						},{
							'type': 'Upgrade',
							'wish': [
										['Plennys Level II', 75],
										['Plennys Level III', 100],
										['Plennys Level IV', 125],
										['Faster Reconstitooter', 100],
										['Even Faster Reconstitooter', 100],
										['More Energy', 300],
										['Faster Run Speed', 500],
										['Even Faster Run Speed', 750],
										['Bigger Toolbelt', 300],
										['Bigger Farm', 1000],
										['More Ooblets', 50],
										['Even More Ooblets I', 100],
										['Even More Ooblets II', 100],
										['Even More Ooblets III', 100],
										['Even More Ooblets IV', 100]
								]
						},{
							'type': 'Repeatable',
							'wish': [
										['1x Speedy Grow', 5],
										['1x Speedy Grow Pro', 25],
										['1x Clothlet', 75],
										['1x  Oobsidian', 100],
										['100x Gummy', 50]
								]
						}
					];

		this.backpacks = [
							['None Equipped', 15, 0],
							['Basic Bum Bag', 20, 250],
							['Sadsack Pack', 22, 350],
							['Basic Backpack', 25, 500],
							['Mega Rucksack', 30, 600]
						];

		this.dribbler = [
							['Dribbly Can', 10, 0],
							['Drizzle Dribbler', 20, 250],
							['Dandy Dribbler', 30, 500]
						];

		this.badgetownoobs = [{
								'type': 'Default',
								'ooblets': ['Clomper','Dumbirb', 'Fleeble', 'Lumpstump', 'Wigglewip']
							},{
								'type': 'More Ooblets',
								'ooblets': ['Unnyhunny', 'Oogum', 'Clickyclaws']
							},{
								'type': 'Even More Ooblets I',
								'ooblets': ['Radlad', 'Plop', 'Isopud']
							},{
								'type': 'Even More Ooblets II',
								'ooblets': ['Spuddle', 'Nuppo', 'Petula']
							},{
								'type': 'Even More Ooblets III',
								'ooblets': ['Moogy', 'Whirlitzer', 'Sidekey']
							},{
								'type': 'Even More Ooblets IV',
								'ooblets': ['Bittle', 'Shrumbo', 'Tud']
							}];

		this.energy = [
						['Default', 200], ['More Energy Wish', 260]
					]

		this.slurry = [
						['Candy', 30],
						['Gember', 30],
						['Hyperglob', 30],
						['Obsidian', 30],
						['Rainplop', 30],
						['Snowplop', 30],
						['Spicyspear', 30],
						['Sprockut', 30],
						['Caroot Cake', 28],
						['Beanjuice', 22],
						['Quib Tart', 14],
						['Delislush', 12],
						['Flooti Karioka', 12],
						['Ground Springbeans', 10],
						['Oodles', 10],
						['Pompadoot Juice', 10],
						['Flootiflower', 8],
						['Froobtose', 8],
						['Clambrosia', 6],
						['Dregplant', 4],
						['Fartichoke', 4],
						['Lopauliflower', 4],
						['Pompadoot', 4],
						['Sparkflower', 4],
						['Springbean', 4],
						['Zinooka', 4],
						['Boregus', 3],
						['Caroot', 3],
						['Clothlet', 3],
						['Muz', 3],
						['Muz Flour', 3],
						['Seaplop', 3],
						['Sweetiebeetie', 3],
						['Nurny', 2],
						['Planklet', 2],
						['Quib', 2],
						['Buttonboy', 1],
						['Gross Boot', 1],
						['Mystery Can', 1],
						['Pop Top', 1],
						['Shelbo', 1],
						['Shiny Bit', 1],
						['Sporbet', 1],
						['Strange Square', 1],
						['Wrapper', 1]
					]

		this.trinket =  [{
							'type': 'Default',
							'trinkets': ['Tabuluter',
										'Little Plant',
										'Pen Pot',
										'Beep Boop',
										'Planty',
										'Potion 1',
										'Potion 2',
										'Potted Plant 1',
										'Stinky Sock',
										'Keeper of Warm',
										'Weird Box']
						},{
							'type': 'Strange Square',
							'trinkets': ['Cat Head Plant Pot',
										'Potted Plant 2',
										'Potted Plant 3',
										'Potted Plant 4',
										'Potted Plant 5',
										'Potted Plant 6',
										'Potted Plant 7',
										'Fizzy Cup',
										'Lookie Lens',
										'Spinny Director',
										'Dangletoy',
										'Book Stack 1',
										'Book Stack 2',]
						}]
				
		this.populateRecipe();
		this.populateWildlands();
		this.populateWishywell();
		this.populateBackpacks();
		this.populateDribbler();
		this.populateBadgetownOoblets();
		this.populateEnergy();
		this.populateSlurry();
		this.populateTrinket();

	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

	}

	/** 	Populate recipe
			Populate recipe list; add recipe name and how to obtain
	**/

	populateRecipe() {

		var i, j, type, recipe;

		for(i = 0; i < this.recipe.length; i++) {

			type = this.recipe[i].type;

			for (j = 0; j < this.recipe[i].recipes.length; j++) {
				recipe = this.recipe[i].recipes[j];

				$('.upgrades-recipe table').append(
					$(document.createElement('tr'))
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(recipe))
										)
							)
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(type))
										)
							)
					)
			}

		}

	}

	/** 	Populate wildlands
			Populate wildlands types; unlockables, types, and level
	**/

	populateWildlands() {

		var i, unlock, type, level;

		for(i = 0; i < this.wildlands.length; i++) {

			unlock = this.wildlands[i][0];
			type = this.wildlands[i][1];
			level = this.wildlands[i][2];

			$('.upgrades-wildlands table').append(
				$(document.createElement('tr'))
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(unlock))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(level))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(type))
									)
						)
				)

		}

	}

	/** 	Populate wishy well
			Populate wishes; add name, type, and cost
	**/

	populateWishywell() {

		var i, j, type, wish, cost;

		for(i = 0; i < this.wishywell.length; i++) {

			type = this.wishywell[i].type;

			for (j = 0; j < this.wishywell[i].wish.length; j++) {
				wish = this.wishywell[i].wish[j][0];
				cost = this.wishywell[i].wish[j][1];

				$('.upgrades-wishywell table').append(
					$(document.createElement('tr'))
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(wish))
										)
							)
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(type))
										)
							)
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(cost))
										)
							)
					)
			}

		}
		
	}

	/** 	Populate backpacks
			Populate backpack types; type, slot, and cost
	**/

	populateBackpacks() {

		var i, type, slot, cost;

		for(i = 0; i < this.backpacks.length; i++) {

			type = this.backpacks[i][0];
			slot = this.backpacks[i][1];
			cost = this.backpacks[i][2];

			$('.upgrades-backpack table').append(
				$(document.createElement('tr'))
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(type))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(slot))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(cost))
									)
						)
				)

		}

	}

	/** 	Populate dribbler
			Populate dribbler types; type, uses, and cost
	**/

	populateDribbler() {

		var i, type, uses, cost;

		for(i = 0; i < this.dribbler.length; i++) {

			type = this.dribbler[i][0];
			uses = this.dribbler[i][1];
			cost = this.dribbler[i][2];

			$('.upgrades-dribbler table').append(
				$(document.createElement('tr'))
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(type))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(uses))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(cost))
									)
						)
				)

		}

	}

	/** 	Populate badgetown ooblets
			Populate list of badgetown ooblet type and from what wish
	**/

	populateBadgetownOoblets() {

		var i, j, ooblets, wish;

		for(i = 0; i < this.badgetownoobs.length; i++) {

			wish = this.badgetownoobs[i].type;

			for (j = 0; j < this.badgetownoobs[i].ooblets.length; j++) {
				ooblets = this.badgetownoobs[i].ooblets[j];

				$('.upgrades-badgetown table').append(
					$(document.createElement('tr'))
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(ooblets))
										)
							)
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(wish))
										)
							)
					)
			}

		}

	}

	/** 	Populate energy
			Populate energy levels; type and energy total
	**/

	populateEnergy() {

		var i, type, energy;

		for(i = 0; i < this.energy.length; i++) {

			type = this.energy[i][0];
			energy = this.energy[i][1];

			$('.upgrades-energy table').append(
				$(document.createElement('tr'))
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(type))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(energy))
									)
						)
				)

		}

	}

	/** 	Populate slurry
			Populate slurry levels; item and slurry
	**/

	populateSlurry() {

		var i, item, slurry;

		for(i = 0; i < this.slurry.length; i++) {

			item = this.slurry[i][0];
			slurry = this.slurry[i][1];

			$('.upgrades-slurry table').append(
				$(document.createElement('tr'))
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(item))
									)
						)
					.append(
							$(document.createElement('td'))
								.append(
									$(document.createTextNode(slurry))
									)
						)
				)

		}

	}

	/** 	Populate trinkets
			Populate list of trinkets and how to unlock them
	**/

	populateTrinket() {

		var i, j, trinket, type;

		for(i = 0; i < this.trinket.length; i++) {

			type = this.trinket[i].type;

			for (j = 0; j < this.trinket[i].trinkets.length; j++) {
				trinket = this.trinket[i].trinkets[j];

				$('.upgrades-trinket table').append(
					$(document.createElement('tr'))
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(trinket))
										)
							)
						.append(
								$(document.createElement('td'))
									.append(
										$(document.createTextNode(type))
										)
							)
					)
			}

		}

	}

}

var a = new Main();

