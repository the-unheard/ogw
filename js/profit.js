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
		$('#profitCompact').prop('checked', true); //sets compact mode to true by default
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

	toggleCompact(checkbox){
		if ($(checkbox).is(':checked')){
			$('.profitToggleable').hide();
			$('.profit-group ').addClass('col-xl-6');
		}
		else {
			$('.profitToggleable').show();
			$('.profit-group ').removeClass('col-xl-6');
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
			width = profits[i] / highestPlayerProfit * 100;
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
			width = profits[i] / highestPlennyProfit * 100;
			width = width < 1 ? 1 : width;
			$('.profit-plennyBar')[i].style.width = width+'px';
		});
	}

}

var a = new Main();

