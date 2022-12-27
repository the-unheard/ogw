class Main {

	/** 	creates global variable
			
	**/
	
	constructor (){
		this.init();
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
		var profits = [];
		var width;

		$('.profit-playerProfits').each((i) =>{
			profits.push(parseFloat($('.profit-playerProfits')[i].text));
		});

		this.highestPlayerProfit = Math.max.apply(Math,profits);

		$('.profit-obar').each((i) =>{
			width = profits[i] / this.highestPlayerProfit * 100;
			width = width > 0 ? width : 1;
			$('.profit-obar')[i].style.width = width+'px';
			$('.profit-obar')[i].style.height = '20px';
		});
	}

}

var a = new Main();

