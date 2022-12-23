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

		this.card = [ {
						'card': 'Plie DJ',
						'effect': 'Increase opponent card costs by 1 beats for their next turn'
					}, {
						'card': 'Stompulent',
						'effect': 'Increase opponent move costs by 2 beats for their next turn'
					}, {
						'card': 'Risky Shift',
						'effect': '50:50 chance of earning 5 points or giving opponent 5 points'
					}, {
						'card': 'Think Slink',
						'effect': 'Add 10 points to both teams'
					}, {
						'card': 'Clean Quadrille',
						'effect': 'Clear all stun, trepidation, and fluster from your team'
					}, {
						'card': 'Slipper Samba',
						'effect': 'Opponents lose 6 points'
					}, {
						'card': 'Backward Limbo',
						'effect': 'Lower all your team\'s future warm-up times by 1 turn for the match'
					}, {
						'card': 'Gracing Pacing',
						'effect': 'Get 2 extra beats after 1 turn of warm-up'
					}, {
						'card': 'Minuscule Medley',
						'effect': 'All your moves this turn cost 1 beat'
					}, {
						'card': 'Soft Shoe Servo',
						'effect': 'Lower your move costs by 1 beat this turn'
					}, {
						'card': 'Finite Loop',
						'effect': 'Play next move twice'
					}
				]

		this.populateToolTips();

	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

		$(document).on('mouseover', '.bugs-type-card', (evt) => {
			//this.showToolTip(evt.target);
		});

	}

	/** 	Show tooltip
			Shows the tool tip of a card move when hovered
	**/

	populateToolTips() {

		var name, effect, i, j;

		var spans = $('.bugs-type-card');

		for (i = 0; i < spans.length; i++){
			name = $(spans).eq(i).text();

			for (j = 0; j < this.card.length; j++){
				if (name == this.card[j].card) {
					effect = this.card[j].effect;
				}
			}

			$(spans).eq(i).append(
				$(document.createElement('div'))
					.addClass('bugs-tooltip')
					.append($(document.createTextNode(effect)))
				)
		}
		
	}

	

}

var a = new Main();

