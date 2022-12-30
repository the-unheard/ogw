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
		this.getPlennyProfits();
		this.toolTipEnabler();

	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {
		$(document).on('change', '#profitCompact', (evt) =>{
			var target = evt.target;
			this.toggleCompact(target);
		});
	}

	toggleCompact(e){
		if (e.is(':checked')){
			$('.playerProfitTypes').hide();
			$('.playerProfitType').hide();
			$('.playerProfitCosts').hide();
			$('.playerProfitCost').hide();
			$('.playerProfitValues').hide();
			$('.playerProfitValue').hide();
		}
		else {
			$('.playerProfitTypes').show();
			$('.playerProfitType').show();
			$('.playerProfitCosts').show();
			$('.playerProfitCost').show();
			$('.playerProfitValues').show();
			$('.playerProfitValue').show();
		}
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

		$('.profit-playerBar').each((i) =>{
			width = profits[i] / highestPlayerProfit * 150;
			width = width < 1 ? 1 : width;
			$('.profit-playerBar')[i].style.width = width+'px';
		});
	}

	/** 	creates the plenny's order elements
	 creates the plenny's order elements
	 **/

	getPlennyProfits() {
		var profits = [];
		var profit, width, highestPlennyProfit;

		$('.profit-plennyProfits').each((i) =>{
			profit = parseFloat($('.profit-plennyProfits').eq(i).text());
			profits.push(profit);
		});

		highestPlennyProfit = Math.max.apply(Math,profits);

		$('.profit-plennyBar').each((i) =>{
			width = profits[i] / highestPlennyProfit * 150;
			width = width < 1 ? 1 : width;
			$('.profit-plennyBar')[i].style.width = width+'px';
		});
	}

}

var a = new Main();

