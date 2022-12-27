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
		var profits = [];
		var profit, width, highestPlayerProfit;

		$('.profit-playerProfits').each((i) =>{
			profit = parseFloat($('.profit-playerProfits').eq(i).text());
			profits.push(profit);
		});

		highestPlayerProfit = Math.max.apply(Math,profits) * 2;

		$('.profit-obar').each((i) =>{
			width = profits[i] / highestPlayerProfit * 100;
			width = width > 0 ? width : 1;
			$('.profit-obar')[i].style.width = width+'px';
		});
	}

}

var a = new Main();

