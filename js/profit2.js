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
		this.toolTipEnabler();

	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

	}

	toolTipEnabler() {
		var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
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

		highestPlayerProfit = Math.max.apply(Math,profits);

		$('.profit-obar').each((i) =>{
			width = profits[i] / highestPlayerProfit * 400;
			width = width > 0 ? width : 1;
			$('.profit-obar')[i].style.width = width+'px';
		});
	}

}

var a = new Main();

