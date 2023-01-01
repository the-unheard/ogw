class Main {

	/** 	creates global variable
			
	**/
	
	constructor (){
		this.init();
	}
	
	/** 	initiates Main
			
	**/
	
	init() {

		$('#profitCompact').prop('checked', true); //sets compact mode to true by default

		this.events();
		this.populateProfits();
		this.toolTipEnabler();
		this.dataTable();

	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {
		$(document).on('change', '#profitCompact', (evt) =>{
			let target = evt.target;
			this.toggleCompact(target);
		});
	}

	/** 	toggles Compact Mode
	 		shows/hides certain columns when Compact Mode is toggled
	 **/

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

	/** 	enables DataTable
	 		enables and modifies DataTable, which is a feature that sorts tables
	 **/

	dataTable() {
		$('#profit-Player, #profit-Plenny').DataTable({
			autoWidth: false,
			paging: false,
			info: false,
			searching: false,
			"columnDefs": [{
				"targets": 'profit-nosort',
				"orderable": false,
			}]
		});
	}

	/** 	enables ToolTip
	 		required code snippet to make BootStrap 5 ToolTip to work
	 **/

	toolTipEnabler() {
		let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
		let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
			return new bootstrap.Tooltip(tooltipTriggerEl)
		})
	}

	/** 	populates Profit table's profit bars
	 		adds a colored bar that represents the amount of profits on each table
	 **/

	populateProfits() {

		let profits = [];
		let profit, highestProfit, width;

		// go through each table
		$('.profit-table').each((i) =>{
			// go through each table's profit row
			$('.profit-table:eq('+i+') .profit-totalProfit').each((j) =>{
				profits = parseInt($('.profit-table:eq('+i+') .profit-totalProfit').eq(j).text());
				profits.push(profit);
			});

			highestProfit = Math.max.apply(Math,profits);

			// go through each table's profit bar
			$('.profit-table:eq('+i+') .profit-profitBar').each((k) =>{
				width = profits[k] / highestProfit * 100;
				width = width < 1 ? 1 : width;
				$('.profit-table:eq('+i+') .profit-profitBar').eq(k).width(width+'px');
			});

			// cleans up values for next table loop
			profits = [];
		});

	}


}

var a = new Main();

