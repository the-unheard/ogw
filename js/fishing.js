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
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		// clicking fish

			$(document).on('click', '.fh-calculate', () => {
				var location = $('#fh-calc-loc').val();
				var bait = $('#fh-calc-bait').val();
				var attempts = $('#fh-calc-qty').val();
				this.ajaxRequest(location, bait, attempts);
			});

	}

	/** 	calculate result based on attempts
			fetches fishing rates and produce results based on number of attempts
	**/

	ajaxRequest(location, bait, attempts) {

		var postData = 'location=' + location + '&bait=' + bait;
		var weighted = [];
		var rewards = [];
		var counts = {};

		// clears modal first
		$('#fh-modal .modal-body').empty();

		$.ajax({
			type: 'POST',
			url: 'php/fishCalcAjaxRequest.php',
			dataType: 'json',
			data: postData,
			success: function(data) {

				var result = Object.values(data);
				var weight = 0;
				var rate, itemname, imgname, baseqty;
				

				// assign different numbers to each item
				for (var i = 0; i < result.length; i++) {

					rate = parseFloat(result[i].rate) + weight;

					weighted.push({
						item: result[i].qty + ' ' + result[i].item,
						rate: rate.toFixed(1)
					})

					weight = parseFloat(result[i].rate) + parseFloat(weight);

				}

				// roll based on attempts
				for (var i = 0; i < attempts; i++) {

					var random = Math.random() * rate.toFixed(2);
						random = random.toFixed(1);

					for(var j = 0; j < weighted.length; j++) {
						if (random < parseFloat(weighted[j].rate)) {
							rewards.push(weighted[j].item)
							break;
						}
						
					}

				}

				// display result

				rewards.forEach((x) => { counts[x] = (counts[x] || 0) + 1; });				
				counts = Object.keys(counts).map(key => ({ item: [key], count: counts[key] }));

				

				for (var i = 0; i < counts.length; i++) {

					itemname = counts[i].item.toString().match(/(\d+ )(.*)/)[2];
					imgname = itemname.toString().replace(/ /g,'_').toLowerCase();
					baseqty = counts[i].item.toString().match(/(\d+)(.*)/)[1];

					$('#fh-modal .modal-body')
						.append($(document.createElement('div'))
							.addClass('fh-calc-fished position-relative og-bg-gray-200 d-inline-block rounded')
							.append($(document.createElement('img'))
									.attr('src', 'images/fishing/'+ imgname +'.png')
									.addClass('fh-calc-img')
								)
							.append($(document.createElement('div'))
									.addClass('fh-calc-namecount')
									.append($(document.createElement('span'))
										.addClass('fh-calc-name')
										.append($(document.createTextNode(itemname)))
										)
									.append($(document.createElement('span'))
										.append($(document.createTextNode(' x ' + counts[i].count)))
										)
								)
							.append($(document.createElement('div'))
									.addClass('fh-calc-baseqty position-absolute rounded')
									.append($(document.createTextNode(baseqty)))
								)
						)
				}

			}
		});

	}


}

var a = new Main();
