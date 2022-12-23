class Main {

	/** 	creates global variable
			
	**/
	
	constructor (){
		this.init();
        this.ooblets;
        this.cards = []; // this becomes the deck
        this.drawnCards = []; // this becomes the hand
        this.isPlaying = false; // disables certain buttons if not playing // also used when player won
        this.maxBeats; // the default beat based on size of dance battle teams
        this.cardCount; // the default hand size based on size of fance battle teams

        this.bonusBeats; // for card moves that give bonus beats next turn
        this.bonusPointsThisTurn; // for card moves that give a bonus point for every move played this turn
        this.costReduction; // for card moves that reduce beat cost this turn
        this.minusculeMedley; // for Minuscule Medley this turn
        this.tempCardCount; // for card moves that increase or decrease next turn's hand size
        this.finiteLoop;
	}
	
	/** 	initiates Main
			
	**/
	
	init() {
		this.events();
        this.ooblets = [
                        'angkze',
                        'bittle',
                        'bristlebud',
                        'chickadingding',
                        'clickyclaws',
                        'clomper',
                        'derble',
                        'dooziedug',
                        'dumbirb',
                        'firmo',
                        'fleeble',
                        'fripp',
                        'glanter',
                        'gloopylonglegs',
                        'grebun',
                        'gubwee',
                        'gullysplot',
                        'gumple',
                        'hermble',
                        'isopud',
                        'jama',
                        'kingwa',
                        'legsy',
                        'lickzer',
                        'lumpstump',
                        'marshling',
                        'moogy',
                        'namnam',
                        'nuppo',
                        'oogum',
                        'pantsabear',
                        'petula',
                        'plob',
                        'quabbo',
                        'radlad',
                        'shrumbo',
                        'sidekey',
                        'skuffalo',
                        'snurfler',
                        'spuddle',
                        'tamlin',
                        'tud',
                        'unnyhunny',
                        'whirlitzer',
                        'wigglewip',
                        'wuddlin'
                    ]
        this.workingSignatureCards = [
                        'Marginal Mamba',
                        'Daze Raise',
                        'Rubadubdub',
                        'Tarante lantern',
                        'Pumpki zzicato',
                        'Glomp Tromp',
                        'Fluster Flood',
                        'Flummoxtrot',
                        'Shake It',
                        'Sashay',
                        'Showcase',
                        'Group Think Slink',
                        'Hopping Mad',
                        'Todoozie Two',
                        'Friend Flurry Floss',
                        'Glaze Glide',
                        'Hype Tram Jam',
                        'Room To Croon',
                        'Fresh Start',
                        'Hydraulic Hornpipe',
                        'Put Down Roots',
                        'Boogie Blossom',
                        'Icing On The Cake',
                        'Double Dutch Clutch',
                        'Fair Port De Corps',
                        'Consolation Deflation',
                        'Give a Dance',
                        'Todoozie One',
                        'Tadpolka',
                        'Soft Shoe Servo',
                        'Minuscule Medley', 
                        'New Step',
                        'Shuffle Shanty',
                        'Saturday Gigue',
                        'Hokeyokay',
                        'Wuddlin Waddle',
                        'Slick Pick',
                        'Swap Hop',
                        'Pike Drop',
                        'Flitter Flutter',
                        'Displaced Dervish',
                        'Flip Trip',
                        'Risky Shift',
                        'Sugar Pan Shuffle',
                        'Finite Loop',
                        
                    ]
        this.workingBaseCards = [
                        'Lil Lindy',
                        'Gavotte Trot',
                        'Flip Floss',
                        'Rig-a-jig',
                        'One Step Pep',
                        'Rhythm and Grow'
        ]
        this.pointCards = [
                        'Lil Lindy',
                        'Gavotte Trot',
                        'Flip Floss',
                        'Marginal Mamba',
                        'Daze Raise',
                        'Rubadubdub',
                        'Tarante lantern',
                        'Pumpki zzicato',
                        'Glomp Tromp',
                        'Fluster Flood',
                        'Flummoxtrot',
                        'Shake It',
                        'Sashay',
                        'Showcase',
                        'Group Think Slink',
                    ]
        this.generateOptions();
        this.initiateDefaultCards();
	}
	
	/** 	adds event listener
			adds event listeners for all buttons
	**/
	
	events() {

        // choose ooblet from drop down

            $(document).on('change', '.pt-t-member select', (evt) => {
                this.showOoblet(evt);
            })

        // click "Start"

            $(document).on('click', '.pt-t-start', (evt) => {
                this.createTeam();
            })

        // click a card

            $(document).on('click', '.pt-g-card', (evt) =>{
                this.playCard(evt.target);
            })

        // click end turn

            $(document).on('click', '.pt-g-end', (evt) =>{
                if (this.isPlaying == false) {
                    this.showMessage('You haven\'t even started!', 'red');
                }
                else {
                    this.endTurn();
                }
            })

	}   

    /**     generate ooblet options
            generates the list of ooblet options
    **/

    generateOptions() {

        var selects = $('.pt-t-member select');

        for (var i = 0; i < selects.length; i++) {
            for(var j = 0; j < this.ooblets.length; j++) {
                $(selects).eq(i).append(
                    $(document.createElement('option'))
                        .attr('value', this.ooblets[j])
                        .append($(document.createTextNode(this.toTitleCase(this.ooblets[j]))))
                )
            }
        }

    }

    /**     show ooblet image
            shows the image when an ooblet is selected
    **/

    showOoblet(evt) {

        var choice = evt.target.value;
        var select = evt.target.closest('.pt-t-member');

        if (choice != 'none') {
            $(select).find('div').css('background-image', 'url("../images/ooblets/'+choice+'_c.png"');
        }

        else {
            $(select).find('div').css('background-image', 'url("../images/ooblets/empty.png")');
        }

    }

    /** 	initiate default dance cards
            sends an ajax request, and then adds the default dance cards to the cards array
	**/

    initiateDefaultCards() {

        this.ajaxRequest2().done((data) => {
            var result = Object.values(data);

            for (var i = 0; i < result.length; i++) {
                this.cards.push(result[i]);
            }
        });

    }

    /** 	create team
            saves the team created by the user
            sends an ajax request to fetch the team's signature moves
	**/

    createTeam() {

        var members = [];
        var selects = $('.pt-t-member select');
        var member;
        this.cards = this.cards.slice(0,10); // cleans the deck, removes ooblet cards and keeps default cards

        // temporarily disables the start button

            $('.pt-t-start').prop('disabled', true);
            $('.pt-t-start').text('LOADING');

        // pushes selected ooblets to the member array

            for (var i = 0; i < selects.length; i++) {
                    member = $(selects).eq(i).val();
                    if (member && member != 'none') {
                        members.push(member);
                    }
            }

        // check if member array has members -- if 0, show error; if not, add members' cards to deck

            if(members.length == 0) {
                this.showMessage('Team can\'t be empty!', 'red');
                $('.pt-t-start').prop('disabled', false);
                $('.pt-t-start').text('READY');
                return;
            }

            else {
                this.showMessage('Pick a dance move to perform!', 'green');
                for (var i = 0; i < members.length; i++) {
                    this.ajaxRequest(members[i]).done((data) => {
                        var result = Object.values(data);
                        for (var j = 0; j < result.length; j++) {
                            this.cards.push(result[j]);
                        }

                        // if fetching is done, proceed to next step, starting the game
                        if (i == members.length) {
                            this.isPlaying = true;
                            this.startGame();
                        }
                    });
                }
            }

    }

    /**     board reset
            resets the game board to prepare for a new game
    **/

    boardReset() {

        $('.pt-g-cardgame').empty();
        $('.pt-g-goal').text('0');
        $('.pt-g-beats div').text('0');
        $('.pt-g-current').text('0');
        $('.pt-g-bar div').height('0');
        $('.pt-g-hype span').text('0');
        $('.pt-g-fluster span').text('0');
        $('.pt-g-log a').text('0');

        
        this.bonusBeats = 0; // for card moves that give bonus beats next turn
        this.bonusPointsThisTurn = 0; // for card moves that give a bonus point for every move played this turn
        this.costReduction = 0; // for card moves that reduce beat cost this turn
        this.minusculeMedley = false; // for Minuscule Medley this turn
        this.tempCardCount = 0; // for card moves that increase or decrease next turn's hand size
        this.finiteLoop = false;

    }

    /** 	starts the game
            resets board and generates random cards
	**/

    startGame() {

        this.boardReset();

        // get number of teams and appropriate values
        var teamCount = (this.cards.length - 10) / 3;
        var goalPoints;
        var gameSettings = [
            {
                'teamCount': 1,
                'cardCount': 4,
                'beats': 3,
                'goal': 20
            }, {
                'teamCount': 2,
                'cardCount': 4,
                'beats': 4,
                'goal': 25
            }, {
                'teamCount': 3,
                'cardCount': 4,
                'beats': 4,
                'goal': 30
            }, {
                'teamCount': 4,
                'cardCount': 5,
                'beats': 5,
                'goal': 35
            }, {
                'teamCount': 5,
                'cardCount': 5,
                'beats': 5,
                'goal': 40
            }, {
                'teamCount': 6,
                'cardCount': 6,
                'beats': 5,
                'goal': 40
            }]

        // set goal points, beat points, and card count
        for (var i = 0; i < gameSettings.length; i++) {
            if (teamCount == gameSettings[i].teamCount) {
                this.cardCount = gameSettings[i].cardCount;
                this.maxBeats = gameSettings[i].beats;
                goalPoints = gameSettings[i].goal;
            }
        }

        $('.pt-g-goal').text(goalPoints);
        $('.pt-g-beats div').text(this.maxBeats);
        $('.pt-g-log a').text('1');

        // generate cards

        this.drawnCards = [];
        this.generateCards(this.cardCount);

    }

    /** 	generate cards
            generate a unique random number for each cardCount
            displays the cards
	**/

    generateCards(cardCount) {

        var randomNum, imgName, trueCost, truePoints, finalDescription;
        var hype = $('.pt-g-hype span').text();
        var fluster = $('.pt-g-fluster span').text();
        var cardDisabled = '';

        for(var i = 0; i < cardCount; i++) {

            // do and keep generating a random number

            do {
                randomNum = Math.floor(Math.random() * this.cards.length);
            }

            // while it's a number that was already picked
            while ($.inArray(randomNum, this.drawnCards) != -1)

            // add signature card to drawnCards array
            this.drawnCards.push(randomNum);

            imgName = this.cards[randomNum].name;
            imgName = imgName.toLowerCase();
            imgName = imgName.replace(/ /g, '_').replace(/\'/, '');

            // if minuscule medley, all costs are 1
            if (this.minusculeMedley == true) {
                trueCost = 1;
            }
            
            // if not, then cost is equal to base cost
            else {
                trueCost = this.cards[randomNum].cost;
            }

            // subtract cost reduction
            trueCost = trueCost - this.costReduction;
            trueCost = trueCost < 0 ? 0 : trueCost; // if less than 0 then set to 0

            // set description
            finalDescription = this.cards[randomNum].desc;

            // if it's a point card, modify based on hype and fluster
            if ($.inArray(this.cards[randomNum].name, this.pointCards) != -1) {
                truePoints = parseInt(this.cards[randomNum].desc.match(/([\d.]+)( point)/)[1]) + parseInt(hype) - parseInt(fluster);
                truePoints = truePoints < 0 ? 0 : truePoints;
                finalDescription = this.cards[randomNum].desc.replace(/([\d.]+)( point)/, truePoints + ' point');
             }

            // if card name is found in workingSignatureCards array, set proper class name
            if ($.inArray(this.cards[randomNum].name, this.workingSignatureCards) != -1) { 
                cardDisabled = ' cardEnabled';
            }

            else if ($.inArray(this.cards[randomNum].name, this.workingBaseCards) != -1) { 
                cardDisabled = ' baseCardEnabled';
            }

            // otherwise, put a different class name
            else {
                cardDisabled = ' cardDisabled';
            }


            // display the card
            $('.pt-g-cardgame').append(
                $(document.createElement('div'))
                    .addClass('pt-g-card position-relative d-inline-block align-top' + cardDisabled)
                    .append(
                        $(document.createElement('span'))
                            .addClass('pt-g-cardcost rounded-circle text-light position-absolute fw-bold top-0 start-0')
                            .append($(document.createTextNode(trueCost)))
                    )
                    .append(
                        $(document.createElement('div'))
                            .css('background-image', 'url("../images/cards/'+imgName+'.png')
                    )
                    .append(
                        $(document.createElement('p'))
                            .addClass('pt-g-cardname fw-bold text-center text-light m-0 og-ellipsis')
                            .append($(document.createTextNode(this.cards[randomNum].name)))
                    )
                    .append(
                        $(document.createElement('p'))
                            .addClass('pt-g-carddesc text-center')
                            .append($(document.createTextNode(finalDescription)))
                    )
            )

   
        }
        
    }

    /** 	clicking a card
			analyzes a card's name and performs an approriate action
	**/

    playCard(target) {

        var card = $(target).closest('.pt-g-card');
        var cardName = $(card).find('p:nth-child(3)').text();
        var cardCost = $(card).find('span').text();
        var cardDesc = $(card).find('p:nth-child(4)').text();
        var coinFlip;

        var availableBeat = $('.pt-g-beats div').text();

        // if game is over, do nothing
        if (this.isPlaying == false) {
            this.showMessage('You already won! Start a new playtest.', 'red');
        }

        // not enough beats, do nothing
        else if (availableBeat < cardCost) {
            this.showMessage('Not enough beats!', 'red');
        }

        // play card
        else {
            
            // consume beats
            $('.pt-g-beats div').text(availableBeat - cardCost);

            // card disappears
            $(card).remove();

            // gain points for playing this card based on bonus points-per-move this turn
            this.cardEffect('earnPoints', parseInt(this.bonusPointsThisTurn));

            // perform card based on name
            switch(cardName) {

                // cards - basic point
                case 'Lil Lindy':
                case 'Gavotte Trot':
                case 'Flip Floss':
                case 'Marginal Mamba':
                case 'Daze Raise':
                case 'Rubadubdub':
                case 'Tarante lantern':
                case 'Pumpki zzicato':
                case 'Glomp Tromp':
                case 'Fluster Flood':
                case 'Flummoxtrot':
                case 'Shake It':
                case 'Sashay':
                case 'Showcase':
                case 'Group Think Slink':
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    break;

                // cards - basic hype
                case 'One Step Pep':
                case 'Hopping Mad':
                case 'Todoozie Two':
                case 'Friend Flurry Floss':
                case 'Glaze Glide':
                case 'Hype Tram Jam':
                    this.cardEffect('earnHypes', cardDesc.match(/([\d.]+)( hype)/)[1]);
                    break;

                // cards - basic TT beat 1
                case 'Rhythm and Grow':
                    this.cardEffect('earnBeats', 1);
                    break;

                // cards - basic NT beats
                case 'Room To Croon':
                case 'Fresh Start':
                    this.cardEffect('nextBeats', cardDesc.match(/(\d+)/g)[0]);
                    break;

                // cards - basic TT bonus points
                case 'Give a Dance':
                case 'Todoozie One':
                case 'Tadpolka':
                    this.cardEffect('bonusPointsThisTurn', cardDesc.match(/([\d.]+)( point)/)[1]);
                    break;

                // cards - basic TT lower beat cost
                case 'Soft Shoe Servo':
                    this.cardEffect('lowerCosts', 1);
                    break;

                // cards - basic draw 1
                case 'Rig-a-jig':
                case 'New Step':
                    this.cardEffect('drawCard', 1);
                    break;

                // cards - points + TT beats
                case 'Hydraulic Hornpipe':
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    this.cardEffect('earnBeats', cardDesc.match(/([\d.]+)( beat)/)[1]);
                    break;

                // cards - points + hype
                case 'Put Down Roots':
                case 'Boogie Blossom':
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    this.cardEffect('earnHypes', cardDesc.match(/([\d.]+)( hype)/)[1]);
                    break;

                // cards - points + NT 1 beats
                case 'Icing On The Cake':
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    this.cardEffect('nextBeats', 1);
                    break;

                // cards - self fluster + NT beats
                case 'Double Dutch Clutch':
                    this.cardEffect('flusterSelf', cardDesc.match(/([\d.]+)( fluster)/)[1]);
                    this.cardEffect('nextBeats', cardDesc.match(/([\d.]+)( extra)/)[1]);
                    break;

                //cards - self fluster + points
                case 'Fair Port De Corps':
                    this.cardEffect('flusterSelf', cardDesc.match(/([\d.]+)( fluster)/)[1]);
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    break;

                // cards - discard all + NT beats
                case 'Consolation Deflation':
                    this.cardEffect('nextBeats', $('.pt-g-card').length);
                    $('.pt-g-cardgame').empty();
                    break;

                // cards - set beat cost to 1
                case 'Minuscule Medley':
                    this.cardEffect('minusculeMedley');
                    break;

                // cards - discard all + draw all
                case 'Shuffle Shanty':
                    this.cardEffect('shuffleShanty');
                    break;

                // cards - lose points + draw
                case 'Saturday Gigue':
                    this.cardEffect('earnPoints', 0 - parseInt(cardDesc.match(/([\d.]+)( point)/)[1]));
                    this.cardEffect('drawCard', 1);
                    break;

                // cards - lose points + TT beats
                case 'Hokeyokay':
                case 'Wuddlin Waddle':
                    this.cardEffect('earnPoints', 0 - parseInt(cardDesc.match(/([\d.]+)( point)/)[1]));
                    this.cardEffect('earnBeats', cardDesc.match(/([\d.]+)( beat)/)[1]);
                    break;

                // cards - points per move in hand
                case 'Slick Pick':
                    this.cardEffect('earnPoints', parseInt(cardDesc.match(/([\d.]+)( point)/)[1]) * parseInt($('.pt-g-card').length));
                    break;

                // cards - beats next turn + hand size next turn
                case 'Swap Hop':
                    this.cardEffect('nextBeats', 2);
                    this.cardEffect('decreaseNextHand', -1);
                    break;

                // cards - wincon
                case 'Pike Drop':
                    this.showMessage('You won! Click Ready to playtest again.', 'green');
                    this.isPlaying = false;

                // cards - discard random + gain beat this turn
                case 'Flitter Flutter':
                    this.cardEffect('discardRandom', 1);
                    this.cardEffect('earnBeats', cardDesc.match(/([\d.]+)( beat)/)[1]);
                    break;

                // cards - discard random + draw
                case 'Displaced Dervish':
                    this.cardEffect('discardRandom', 1);
                    this.cardEffect('drawCard', 1);
                    break;

                // cards - convert fluster to points
                case 'Flip Trip':
                    this.cardEffect('earnPoints', parseInt($('.pt-g-fluster span').text()));
                    this.cardEffect('clearFlusters');
                    break;

                // cards - 50:50 point gain
                case 'Risky Shift':
                    coinFlip = (Math.floor(Math.random() * 2) == 0);
                    if (coinFlip) {
                        this.cardEffect('earnPoints', 5);
                    }
                    break;

                // cards - points + draw
                case 'Sugar Pan Shuffle':
                    this.cardEffect('earnPoints', cardDesc.match(/([\d.]+)( point)/)[1]);
                    this.cardEffect('drawCard', 1);
                    break;

                // cards - finite loop
                case 'Finite Loop':
                    this.finiteLoop = true;
                    break;

                // none
                default:
                    this.showMessage('Nothing happened', 'green');
                    break;

            }

        }

    }

    /** 	card effects
			contains the function of each card effect
	**/

    cardEffect(method, num) {

        var goalPoints = parseInt($('.pt-g-goal').text());
        var currentPoints = parseInt($('.pt-g-current').text());
        var currentHeight = $('.pt-g-bar div').height() / 685 * 100;
        var currentHype = parseInt($('.pt-g-hype span').text());
        var currentFluster = parseInt($('.pt-g-fluster span').text());
        var currentBeats = parseInt($('.pt-g-beats div').text());
        var heightToGain, newHeight, beatsToGain, newPoints, toDiscard, toDraw, toNextHand, loop;
        var newValue;

        var cardsInHand = $('.pt-g-card');
        var discardRNG;

        switch (method) {
            case 'earnPoints':
                newValue = this.finiteLoop == true ? parseInt(num) * 2 : parseInt(num);
                newPoints = currentPoints + newValue;
                newPoints = newPoints > goalPoints ? goalPoints : newPoints; // if points is more than goal points, just put goal points

                heightToGain = parseInt(num) / goalPoints * 100;
                newHeight = currentHeight + heightToGain;
                newHeight = newHeight > 100 ? 100 : newHeight; // if height is more than 100, just put 100
                $('.pt-g-bar div').css('height', newHeight + '%');
                $('.pt-g-current').text(newPoints);
                break;
            case 'earnHypes':
                newValue = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                $('.pt-g-hype span').text(currentHype + newValue);
                this.updateHand();
                this.finiteLoop = false;
                break;
            case 'flusterSelf':
                newValue = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                $('.pt-g-fluster span').text(currentFluster + newValue);
                this.updateHand();
                this.finiteLoop = false;
                break;
            case 'bonusPointsThisTurn':
                this.bonusPointsThisTurn = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                this.finiteLoop = false;
                break;
            case 'earnBeats':
                beatsToGain = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                $('.pt-g-beats div').text(currentBeats + beatsToGain);
                this.finiteLoop = false;
                break;
            case 'nextBeats':
                beatsToGain = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                this.bonusBeats = beatsToGain;   
                this.finiteLoop = false;             
                break;
            case 'minusculeMedley':
                this.minusculeMedley = true;
                this.updateHand();
                break;
            case 'lowerCosts':
                this.costReduction = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                this.finiteLoop = false;
                this.updateHand();
                break;
            case 'discardRandom':
                toDiscard = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                for (var i = 0; i < toDiscard; i ++) {
                    discardRNG = Math.random() * cardsInHand.length;
                    discardRNG = Math.floor(discardRNG);
                    $('.pt-g-card').eq(discardRNG).remove();
                }
                this.finiteLoop = false;
                break;
            case 'clearFlusters':
                $('.pt-g-fluster span').text('0');
                this.updateHand();
                break;
            case 'drawCard':
                toDraw = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                this.generateCards(toDraw);
                this.finiteLoop = false;
                break;
            case 'decreaseNextHand':
                toNextHand = this.finiteLoop ? parseInt(num) * 2 : parseInt(num);
                this.tempCardCount = toNextHand;
                this.finiteLoop = false;
                break;
            case 'shuffleShanty':
                loop = this.finiteLoop ? 2: 1;
                for (var i = 0 ; i < loop ; i++) {
                    cardsInHand = $('.pt-g-card').length;
                    $('.pt-g-cardgame').empty();
                    this.generateCards(cardsInHand);
                }
                this.finiteLoop = false;
                break;
        }

        if (newHeight >= 100) {
            this.showMessage('You won! Click Start to playtest again.', 'green');
            this.isPlaying = false;
        }

    }

    /** 	updates current hand
            for moves that affect description and beat cost of current hand
	**/

    updateHand() {

        var cardsInHand = $('.pt-g-card');
        var currentHype = parseInt($('.pt-g-hype span').text());
        var currentFluster = parseInt($('.pt-g-fluster span').text());
        var updatedPoints, updatedDesc, updatedCost;

        for (var i = 0; i < cardsInHand.length ; i++) {
            if ($.inArray($('.pt-g-cardname').eq(i).text(), this.pointCards) != -1) {
                for (var j = 0 ; j < this.cards.length ; j++) {

                    if ($('.pt-g-cardname').eq(i).text() == this.cards[j].name) {

                        updatedPoints = parseInt(this.cards[j].desc.match(/([\d.]+)( point)/)[1]) + currentHype - currentFluster;
                        updatedPoints = updatedPoints < 0 ? 0 : updatedPoints;
                        updatedDesc = $('.pt-g-carddesc').eq(i).text().replace(/([\d.]+)( point)/, updatedPoints + ' point');
                        $('.pt-g-carddesc').eq(i).text(updatedDesc);

                    }
                }
            }
        }


        // update beat cost based on minuscule medley
        if (this.minusculeMedley) {
            for (var i = 0; i < cardsInHand.length; i++) {
                $('.pt-g-card span').eq(i).text('1');
            }
        }

        // update beat cost based on cost reduction
        for (var i = 0; i < cardsInHand.length; i++) {
            updatedCost =  $('.pt-g-card span').eq(i).text();
            updatedCost = parseInt(updatedCost) - this.costReduction;
            updatedCost = updatedCost < 0 ? 0 : updatedCost; // if less than 0, just set to 0
            $('.pt-g-card span').eq(i).text(updatedCost);
        }

    }

    /** 	clicking end turn
			refreshes hand and beats, and removes single-turn buffs, then draws a hand
	**/

    endTurn() {

        // clean current hand
        $('.pt-g-cardgame').empty();

        // clean drawnCards array
        this.drawnCards = [];

        // gain beats
        $('.pt-g-beats div').text(this.maxBeats + this.bonusBeats);
        this.bonusBeats = 0;

        // remove the per-turn bonus points
        this.bonusPointsThisTurn = 0;

        // remove the cost reduction
        this.costReduction = 0;

        // removes Fleeble's minuscule effect
        this.minusculeMedley = false;

        // remove finite loop
        this.finiteLoop = false;

        // add turn count
        var currentTurn = parseInt($('.pt-g-log a').text());
            currentTurn += 1;

            $('.pt-g-log a').text(currentTurn);

        // draw new hand
        this.generateCards(this.cardCount + this.tempCardCount);

        // reset default handsize
        this.tempCardCount = 0;

    }

    /** 	show message for in-game
            shows the red error message or green success message
	**/

    showMessage(str, color) {

        switch (color) {
            case 'red':
                $('.pt-g-message').css('color','var(--playred)');
                break;
            case 'green':
                $('.pt-g-message').css('color','var(--green)');
                break;
        }

        $('.pt-g-message').hide(); // in case there's a previous message displaying, hide it first, otherwise the new message will have a shorter fade delay
        $('.pt-g-message').text(str);
        $('.pt-g-message').show().delay(3000).fadeOut();
        
    }

    /** 	ajax request - signature cards
            gets the name, cost, and description of the members' signature cards
	**/

    ajaxRequest(members) {

        var postData = 'name=' + members;

        return $.ajax({
			type: 'POST',
			url: 'php/playtestAjaxRequest.php',
			dataType: 'json',
			data: postData,
            success: () => {
                
                // enables start button
                $('.pt-t-start').prop('disabled', false);
                $('.pt-t-start').text('READY');
            }
        });

    }

    /** 	ajax request - default dance cards
            gets the name, cost, and description of the default dance cards
	**/

    ajaxRequest2() {

        return $.ajax({
			type: 'POST',
			url: 'php/playtestAjaxRequest2.php',
			dataType: 'json'
        });

    }

    /** 	convert to title case
            converts any string to title case, used for the select options element
	**/

    toTitleCase(str) {
        return str.replace(/(?:^|\s)\w/g, function(match) {
            return match.toUpperCase();
        });
    }

}

var a = new Main();
