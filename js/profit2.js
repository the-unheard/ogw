class Main {

	/** 	creates global variable
			
	**/
	
	constructor (){
		this.init();
		this.profits = [];
		this.highestPlayerProfit;
	}
	
	/** 	initiates Main
			
	**/
	
	init() {
		this.events();
		this.getPlayerProfits();


	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

	}

	/** 	creates the plenny's order elements
			creates the plenny's order elements
	**/

	getPlayerProfits() {
		$('.profit-playerProfits').each((i) =>{
			this.profits.append(parseFloat($('.profit-playerProfits')[i].text));
		});

		this.highestPlayerProfit = Math.max.apply(Math,this.profits);
		this.populatePlayerBars();
	}

	/** 	creates the plenny's order elements
			creates the plenny's order elements
	 **/

	populatePlayerBars() {
		var width;

		$('.profit-obar').each((i) =>{
			width = this.profits[i] / this.highestPlayerProfit * 100;
			width = width > 0 ? width : 1;
			$('.profit-obar')[i].height(20).width(width);
		});

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

}

var a = new Main();

