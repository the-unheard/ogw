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
			profit = parseFloat($('.profit-playerProfits').eq(1).text());
			profits.push(profit);
		});

		console.log(profits);
		highestPlayerProfit = Math.max.apply(Math,profits);
		console.log(highestPlayerProfit);

		$('.profit-obar').each((i) =>{
			width = profits[i] / highestPlayerProfit * 100;
			console.log(i + " " + width)
			width = width > 0 ? width : 1;
			console.log(i + " " + width)
			$('.profit-obar')[i].style.width = width+'px';
			$('.profit-obar')[i].style.height = '20px';
		});
	}

}

var a = new Main();

