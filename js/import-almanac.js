const almanacData = [
    {"name":"Angkze","town":"Port Forward","image":"angkze","food":"3 Soggy Balloon","move1cost":"1","move1name":"Daze Raise","move1desc":"Stun one of your team's ooblets for 2 turns, gain 6 points","move2cost":"2","move2name":"Double Dutch Clutch","move2desc":"Gain 2 fluster, get 3 extra beats next turn","move3cost":"3","move3name":"Consolation Deflation","move3desc":"Discard all moves in hand, get equal number of extra beats next turn","description":"Angkzes are semi-aquatic ambulatory ooblets native to Port Forward, similar in many respects to Legsies, but without the natural moxie or detached destructiveness."},
    {"name":"Bibbin","town":"Badgetown (Rain)","image":"bibbin","food":"2 Soggy Bread","move1cost":"3","move1name":"Drizzle Drop","move1desc":"Gain 3 points plus an extra 2 hype if it's raining","move2cost":"4","move2name":"Bibbin Bop","move2desc":"Complete growth cycle on a random farm crop","move3cost":"6","move3name":"Flora Flip","move3desc":"Randomize & regrow all region forageables","description":"A Badgetown-native ooblet partial to rainy days"},
    {"name":"Bittle","town":"Badgetown","image":"bittle","food":"1 Peaksnub Pickle","move1cost":"2","move1name":"Pilfer Polka","move1desc":"Steal 4 points","move2cost":"3","move2name":"Flout for Doubt","move2desc":"Add 2 fluster to opponent team","move3cost":"0","move3name":"Capoeira Copy","move3desc":"Steal a random opponent signature move","description":"Bittles have an aggressive dance battle style that has led to them being the mascot ooblets of the Peaksnubs club. Wild bittles can only be lured into dances with exclusive Peaksnubs treabies."},
    {"name":"Bristlebud","town":"Mamoonia","image":"bristlebud","food":"3 Mamoonia Macaroon","move1cost":"2","move1name":"Prickle Prance","move1desc":"Stun target for 2 turns","move2cost":"2","move2name":"Spiny Spin","move2desc":"Add 2 fluster to opponent team","move3cost":"4","move3name":"Stompulent","move3desc":"Increase opponent move costs by 2 beats for their next turn","description":"Despite being marginally prickly, Bristlebuds are clearly very friendly ooblets originating in the arid clime of Mamoonia."},
    {"name":"Bunglebee","town":"Bunglebee Mines","image":"bunglebee","food":"3 Honeygob","move1cost":"3","move1name":"Gimme Gimme","move1desc":"Summon a totally random item to your inventory","move2cost":"2","move2name":"Sting Ringer","move2desc":"Make any humanoid opponents’ heads swell up","move3cost":"4","move3name":"Hive Jive","move3desc":"Start each following turn with an extra move","description":"Bunglebees were thought to be imaginary mythical folklore ooblets but turned out to be real. They live in caves underground and build honeycone structures."},
    {"name":"Chickadingding","town":"Nullwhere","image":"chickadingding","food":"3 Glob Globs","move1cost":"3","move1name":"Slipper Samba","move1desc":"Opponents lose 6 points","move2cost":"2","move2name":"Give a Dance","move2desc":"Gain 2 points every time a move is played this hand","move3cost":"2","move3name":"Rubadubdub","move3desc":"Gain 2 points and clear all stuns from your team","description":"Chickadingdings are stolid but not particularly spooky ooblets from Nullwhere."},
    {"name":"Clickyclaws","town":"Badgetown","image":"clickyclaws","food":"2 Froobtose","move1cost":"0","move1name":"Marginal Mamba","move1desc":"Gain 1 point","move2cost":"1","move2name":"Hopping Mad","move2desc":"Steal up to 1 hype","move3cost":"3","move3name":"Just a Taste","move3desc":"Steal 5 points","description":"A generally belligerent little ooblet native to Badgetown. Clickyclaws are known to congregate in unused structures and may act aggressively to interlopers."},
    {"name":"Clomper","town":"Badgetown","image":"clomper","food":"2 Sweetiebeetie","move1cost":"1","move1name":"Shock 'n Shimmy","move1desc":"Gain 5 points, lose all your hype","move2cost":"0","move2name":"Jittershrug","move2desc":"Stun target for 1 turn","move3cost":"4","move3name":"Astound Around","move3desc":"Stun opponent team for 1 turn","description":"Clompers' aggressive name belies their gentle (and some might say simple) nature. Taxonomically related to Lumpstumps insofar as they both have lil leaves on their heads."},
    {"name":"Derble","town":"Mamoonia","image":"derble","food":"3 Fartichoke","move1cost":"1","move1name":"Quiddany Quickstep","move1desc":"Gain 6 points after 2 turns of warm-up","move2cost":"2","move2name":"Jelly Jive","move2desc":"Join a teammate's warm-up move and decrease its warm-up time by 1 turn","move3cost":"3","move3name":"Bon Bon Bop","move3desc":"Earn 14 points after 3 turns of warm-up","description":"Derbles are light-footed desert-dwellers who can be found scurrying around Mamoonia."},
    {"name":"Dooziedug","town":"Oobtrotter","image":"dooziedug","food":"3 Pibblepug Pie","move1cost":"2","move1name":"Pep Pep","move1desc":"Earn 3 points and get an extra beat next turn","move2cost":"8","move2name":"Pop-In","move2desc":"Add 3 hype","move3cost":"3","move3name":"Rough Landing","move3desc":"Reset all points to zero","description":"Dooziedugs are rare ooblets with interesting and somewhat confusing moves."},
    {"name":"Dumbirb","town":"Badgetown","image":"dumbirb","food":"2 Muz","move1cost":"1","move1name":"Jolt 'n Bolt","move1desc":"Remove 1 fluster from your team","move2cost":"1","move2name":"Dawdle Waddle","move2desc":"Add 2 trepidation (useless) cards to opponent's deck","move3cost":"2","move3name":"Muster Fluster","move3desc":"Give 2 fluster to a random team","description":"Dumbirbs are flightless ooblets that look like they really should be able to fly. Well I've never seen them flying but maybe they can and they're just shy."},
    {"name":"Firmo","town":"Mamoonia","image":"firmo","food":"3 Sparkflower","move1cost":"0","move1name":"Hydraulic Hornpipe","move1desc":"Earn 1 points and gain 1 beat","move2cost":"1","move2name":"Gear Glissade","move2desc":"Clear all trepidation from your deck","move3cost":"2","move3name":"Soft Shoe Servo","move3desc":"Lower your move costs by 1 beat this turn","description":"Firmos are monocular, mechanical-based ooblets found in Mamoonia."},
    {"name":"Fleeble","town":"Badgetown","image":"fleeble","food":"3 Sporbet","move1cost":"2","move1name":"Petty Formation","move1desc":"Add 1 fluster to opponent team","move2cost":"3","move2name":"Skip Step","move2desc":"Gain 4 points and remove 1 fluster from your team","move3cost":"3","move3name":"Minuscule Medley","move3desc":"Lowers move costs to 1 beat this turn","description":"A somewhat timid and reserved ooblet found around Badgetown. Fleebles are distantly related to shrumbos. Despite appearances to the contrary, they do have arms, they're just guite small."},
    {"name":"Fripp","town":"Mamoonia","image":"fripp","food":"3 Spressy","move1cost":"0","move1name":"Fair Port De Corps","move1desc":"Add 1 fluster to your team, earn 4 points","move2cost":"2","move2name":"Loaded Lindy","move2desc":"Earn 18 points after 4 turns of warm-up","move3cost":"3","move3name":"Swing Crimson","move3desc":"Add 3 trepidation (useless) moves to your deck, earn 6 points","description":"Fripps are cheerfully peculiar natives of Mamoonia. It's been said that their top-mounted proboscis changes color in accordance with the proxtumnal oblivox (which only happens every 281,000 years)."},
    {"name":"Glanter","town":"Nullwhere","image":"glanter","food":"1 Roast Dregs","move1cost":"2","move1name":"Tarantelantern","move1desc":"Gain 3 points and stun a random opponent for 1 turn","move2cost":"0","move2name":"Pumpkizzicato","move2desc":"Lose 3 points, gain a beat","move3cost":"3","move3name":"Hoberdygurdy","move3desc":"Stun 2 random opponents for 2 turns","description":"Glanters are native to Nullwhere whose shyness is sometimes mistaken for creepiness when explorers see them peeking out from behind tall reeds in the dark."},
    {"name":"Gloopylonglegs","town":"Nullwhere","image":"gloopylonglegs","food":"3 Gember","move1cost":"2","move1name":"Glomp Tromp","move1desc":"Gain 5 points","move2cost":"2","move2name":"Jelly Jazz","move2desc":"Clear all fluster from your team","move3cost":"4","move3name":"Marmalade Moat","move3desc":"Block all fluster for the rest of the match","description":"Gloopylonglegs are jelly-encased creatures native to Nullwhere. Their long legs make them adept at wading through marshy swamps and herds of marshlings."},
    {"name":"Gopslop","town":"Tippy Top","image":"gopslop","food":"3 Droostral","move1cost":"1","move1name":"Mudslide","move1desc":"Gain 7 points if you’ve already played 4 moves this turn","move2cost":"2","move2name":"Muddy the Waters","move2desc":"Lose 6 points, give opponent 2 fluster","move3cost":"5","move3name":"Grubby Hands","move3desc":"Clone a random opponent ooblet’s accessory","description":"Gopslops are found in mountainous areas like Tippytop, where they toot around."},
    {"name":"Grebun","town":"Oobtrotter","image":"grebun","food":"3 Zinooka Cake","move1cost":"1","move1name":"Waddleswap","move1desc":"Redraw 2 random moves in hand","move2cost":"2","move2name":"NEXT!","move2desc":"Change music","move3cost":"4","move3name":"Just a Taste","move3desc":"Opponent only draws 2 starting moves next turn","description":"Grebuns are rare ooblets with mediocre moves (sorry, it's true!)"},
    {"name":"Gubwee","town":"Port Forward","image":"gubwee","food":"3 Thimbi Tartare","move1cost":"1","move1name":"Shuffle Shanty","move1desc":"Redraw remaining moves in hand","move2cost":"3","move2name":"Overbear Snare","move2desc":"Steal 6 points","move3cost":"4","move3name":"Sassy Sauté ","move3desc":"Increase opponent move costs by 1 for the whole match","description":"Gubwees are Port Forward-native ooblets whose facial features have been observed to evolve and devolve at various times."},
    {"name":"Gullysplot","town":"Port Forward","image":"gullysplot","food":"3 Pnuematic Gnocchi","move1cost":"3","move1name":"Icing On The Cake","move1desc":"Earn 4 points and get an extra beat next turn","move2cost":"2","move2name":"Swap Hop","move2desc":"Start next turn with 2 extra beats but 1 less move","move3cost":"2","move3name":"Room To Croon","move3desc":"Gain an extra 3 beats next turn","description":"Gullysplot are of unknown origin but native to Port Forward, with researchers unsure whether they are fungi-type, jelly-type, or melon-type creatures. The issue is hotly debated."},
    {"name":"Gumple","town":"Oobtrotter","image":"gumple","food":"3 Muzimi","move1cost":"1","move1name":"Stress Relief","move1desc":"Convert all opponent’s fluster to your points","move2cost":"3","move2name":"SILLY ARMS!","move2desc":"Give your player character silly arms for the day","move3cost":"1","move3name":"Hypebeast","move3desc":"Convert your hype to points multiplied by 2","description":"Gumples are rare ooblets that have interesting and varied dance moves."},
    {"name":"Hermble","town":"Mamoonia","image":"hermble","food":"3 Buttonboy","move1cost":"1","move1name":"Saturday Gigue","move1desc":"Lose 4 points, draw a new move","move2cost":"2","move2name":"Extra Mild Salsa","move2desc":"Lose 6 points, stun a random opponent for 3 turns","move3cost":"0","move3name":"Hokeyokay","move3desc":"Lose 10 points, gain 3 beats","description":"Hermbles try really hard."},
    {"name":"Isopud","town":"Badgetown","image":"isopud","food":"3 Bean Juice","move1cost":"1","move1name":"Hunker Down","move1desc":"Get 3 extra beats after 2 turns of warm-up","move2cost":"2","move2name":"Spin Up","move2desc":"Join a teammate's warm-up move and increase any points it earns by 50%","move3cost":"2","move3name":"Repress Duress","move3desc":"Give all your trepidation cards to your opponent","description":"Isopuds have a lethargic appearance, but that's only because they have to expend so much energy on having so many arms. You try staying alert after lugging around 8 arms and two arm-like antennae all day."},
    {"name":"Jama","town":"Badgetown (Snow) \/ Tippy Top","image":"jama","food":"3 Soothey Sip","move1cost":"1","move1name":"Cozy Courante","move1desc":"Makes your ooblets smaller for the rest of the match","move2cost":"1","move2name":"Bumpabuff","move2desc":"Clear all fluster from both teams","move3cost":"3","move3name":"Snug Sarabande","move3desc":"Stun a random opponents for 2 turns","description":"Jamas are snuggly lil buds always ready for a snow day."},
    {"name":"Kingwa","town":"Oobtrotter","image":"kingwa","food":"3 Blue Goo Pie","move1cost":"2","move1name":"Doubtful Decree","move1desc":"Gain 5 points and 1 trepidation","move2cost":"3","move2name":"Divine Sleight","move2desc":"All point gains\/losses from opponent’s next turn are reversed","move3cost":"3","move3name":"Royal Concession","move3desc":"Lose 10 points, start each turn with an extra beat","description":"Kingwas are rare ooblets that have somewhat double-edged moves."},
    {"name":"Legsy","town":"Port Forward","image":"legsy","food":"3 Candy Salad","move1cost":"4","move1name":"Slick Pick","move1desc":"Gain 2 points per move in your hand","move2cost":"5","move2name":"Fluster Foist","move2desc":"Give all your team's fluster to opponent","move3cost":"7","move3name":"Pike Drop","move3desc":"Double your team’s current points","description":"Legsies are a mischievous, semi-aquatic, yet very clearly ambulatory ooblet, native to Port Forward."},
    {"name":"Lickzer","town":"Nullwhere","image":"lickzer","food":"3 Glob Globs","move1cost":"1","move1name":"Focus Pocus","move1desc":"Clear all stuns from your team","move2cost":"4","move2name":"Concoct Obstruct","move2desc":"Block your team from fluster for the rest of the match","move3cost":"1","move3name":"Magniphilter","move3desc":"Make your ooblets bigger for the rest of the match","description":"Lickzers are a newly-discovered ooblet species from Nullwhere. Some have been noted to present strange effects during dances."},
    {"name":"Lumpstump","town":"Badgetown","image":"lumpstump","food":"4 Planklet","move1cost":"1","move1name":"Put Down Roots","move1desc":"Gain 2 hype after 2 turns of warm-up","move2cost":"3","move2name":"Boogie Blossom","move2desc":"Gain 3 points and 1 hype","move3cost":"3","move3name":"Shake the Tree","move3desc":"Steal 3 points and add 1 fluster to opponent","description":"A woodsy ooblet found in the forests around Badgetown. Scientists are divided on classifying lumpstumps' head branches as ears or horns."},
    {"name":"Marshling","town":"Nullwhere","image":"marshling","food":"3 Gloom Bun","move1cost":"3","move1name":"Swamp Romp","move1desc":"Opponent gets 1 fewer beats each hand for the rest of the match","move2cost":"4","move2name":"Fluster Flood","move2desc":"Gain 3 points and 1 fluster to opponent team","move3cost":"1","move3name":"Mire Medley","move3desc":"Opponent gets 2 fewer beats next turn","description":"Creatures of the swamps of Nullwhere, Marshlings are powerful dancers if you know how and when to use their power."},
    {"name":"Moogy","town":"Badgetown","image":"moogy","food":"2 Pompadoot Juice","move1cost":"0","move1name":"Flitter Flutter","move1desc":"Discard a random card, gain 1 beat","move2cost":"3","move2name":"Grand Pa-Dee-Do","move2desc":"Join a teammate's warm-up move and decrease its warm-up time by 2 turns","move3cost":"2","move3name":"Inundation Notation","move3desc":"Add 5 trepidation moves to opponent's deck","description":"Moogy is flightless ooblet. Most ooblets are flightless but it just seemed more pertinent to mention in regard to Moogy."},
    {"name":"Namnam","town":"Nullwhere","image":"namnam","food":"3 Freep","move1cost":"1","move1name":"Bitsy Boo","move1desc":"Give 4 trepidation to both teams","move2cost":"1","move2name":"Roar Routine","move2desc":"Give your opponent 1 hype, gain 5 points","move3cost":"1","move3name":"Clawback","move3desc":"Convert your opponent’s fluster to your points","description":"Namnam is a spirited lil spirit from Nullwhere. Said to be a distant relative to Clickyclaws in some way but ooblet taxonomy is confusing."},
    {"name":"Nuppo","town":"Badgetown","image":"nuppo","food":"1 Flooti Karioka","move1cost":"2","move1name":"Friend Flurry Floss","move1desc":"Gain 2 hype","move2cost":"3","move2name":"Flummoxtrot","move2desc":"Earn 5 points and add 1 fluster to opponent team","move3cost":"3","move3name":"Grand Adage","move3desc":"Stun target for 3 turns","description":"Nuppos have been observed to act rapscalliously in their native environments as well as important social functions."},
    {"name":"Oogum","town":"Badgetown","image":"oogum","food":"1 Oodles","move1cost":"1","move1name":"Displaced Dervish","move1desc":"Discard a random move and get another move from your deck","move2cost":"2","move2name":"Counter Projection","move2desc":"Steal 10 points after 4 turns of warm-up","move3cost":"3","move3name":"Backward Limbo","move3desc":"Lower all your team's future warm-up times by 1 turn for the match","description":"Oogums are blessed with natural head tufting and glum expressions that indicate an adolescent phase but are assuredly coincidental."},
    {"name":"Pantsabear","town":"Pantsabearhill","image":"pantsabear","food":"3 Button Soup","move1cost":"2","move1name":"Slip Jig Slacks","move1desc":"Randomize your current beats (0-6)","move2cost":"1","move2name":"Sean Nos Boop","move2desc":"Stun a random ooblet on either team for 1 turn, gain 4 points","move3cost":"2","move3name":"Treble Reel Trousers","move3desc":"Gain 2 points per stunned ooblet on either team","description":"Pantsabear are their own thing."},
    {"name":"Petula","town":"Badgetown","image":"petula","food":"1 Caroot Cake","move1cost":"2","move1name":"Blue Sky This","move1desc":"Earn 16 points after 4 turns of warm-up","move2cost":"1","move2name":"Bike Shed Cred","move2desc":"Add 1 turn of warm-up time to opponent warming-up move in progress","move3cost":"4","move3name":"Design by Committee","move3desc":"Add 1 turn of warm-up time to all opponents' warm-up moves for the match","description":"A flowering ooblet known for being quite prim. Capable of powerful dances that involve warm ups."},
    {"name":"Plob","town":"Badgetown","image":"plob","food":"2 Muz Flour","move1cost":"2","move1name":"Loot Scoot","move1desc":"Gain a basic resource (nurnies, planklets, etc.)","move2cost":"3","move2name":"Crop Bop","move2desc":"Gain a basic random crop seed","move3cost":"4","move3name":"Sow Glow","move3desc":"Gain a better random crop seed","description":"Plobs are seemingly unremarkable semi-aquatic ooblet... with surprisingly unique dance battle characteristics. Found around watery areas in and around Badgetown."},
    {"name":"Quabbo","town":"Port Forward","image":"quabbo","food":"3 A Very Cellulettuce Sammy","move1cost":"3","move1name":"New Step","move1desc":"Clear all hype from opponent’s team","move2cost":"5","move2name":"Flip Trip","move2desc":"Convert your team's fluster to points","move3cost":"5","move3name":"Hype Swipe","move3desc":"Steal all opponent team's hype","description":"Quabbos are inquisitive yet unopinionated ooblets native to Port Forward."},
    {"name":"Radlad","town":"Badgetown","image":"radlad","food":"2 Hob Dobs","move1cost":"1","move1name":"Slow Jam","move1desc":"Give 2 hype to a random team","move2cost":"2","move2name":"Cancel Prancel","move2desc":"Interrupt and cancel an opponent's warming-up move","move3cost":"3","move3name":"Big Flourish","move3desc":"Earn 12 points after 3 turns of warm-up","description":"Radlads as a species seem to have misinterpreted the root of their namesakes, and as such, tend to have a too-cool-for-school rad demeanor."},
    {"name":"Rockstack","town":"Tippy Top","image":"rockstack","food":"1 Creamadroostral Soup","move1cost":"3","move1name":"Fresh Quarry","move1desc":"Gain some sorta fancy rock (gember or oobsidian or droostral)","move2cost":"4","move2name":"Boulder Smoulder","move2desc":"Prevent any ooblets on this team from being stunned this match","move3cost":"6","move3name":"In the Rough","move3desc":"Stun opponent team for 2 turns","description":"Rockstacks were thought to be imaginary mythical folklore ooblets but turned out to be real. Found only near the top of Tippytop Mountain."},
    {"name":"Shrumbo","town":"Badgetown","image":"shrumbo","food":"1 Mossprouts Float","move1cost":"2","move1name":"Shake It","move1desc":"Earn 6 points","move2cost":"1","move2name":"Sashay","move2desc":"Earn 4 points","move3cost":"4","move3name":"Showcase","move3desc":"Earn 8 points","description":"Shrumbos are the mascot ooblets of the Mossprouts club. They have a very straightforward dance battle style. Wild shrumbos can only be lured into dances with exclusive Mossprouts treabies."},
    {"name":"Sidekey","town":"Badgetown","image":"sidekey","food":"1 Mimpins Metal Mallow","move1cost":"3","move1name":"Finite Loop","move1desc":"Play next move twice","move2cost":"2","move2name":"System Pause","move2desc":"Stun target for 2 turns","move3cost":"3","move3name":"Machine Spurning","move3desc":"Increase opponents' move costs by 2 beats next turn","description":"Sidekeys feature eponymous key-like biological structures protruding from their sides. Their mechanical appearance made them the perfect mascot ooblets for the Mimpins club. Wild sidekeys can only be lured into dances with exclusive Mimpins treabies."},
    {"name":"Skuffalo","town":"Nullwhere","image":"skuffalo","food":"3 Dregplants","move1cost":"3","move1name":"Clean Quadrille","move1desc":"Clear all stun, trepidation, and fluster from your team","move2cost":"2","move2name":"Steady Gains","move2desc":"Earn 6 points after 1 turns of warm-up","move3cost":"3","move3name":"Trep Trip","move3desc":"Add 4 trepidation (useless) moves to opponent's deck","description":"Skuffalo bring a pastel flair to the often dreary atmosphere of Nullwhere."},
    {"name":"Snurfler","town":"Nullwhere","image":"snurfler","food":"3 Hyperglobs","move1cost":"1","move1name":"Gemjolt","move1desc":"20% chance of producing a gember","move2cost":"2","move2name":"Gemjive","move2desc":"40% chance of producing a gember","move3cost":"3","move3name":"Gemjam","move3desc":"70% chance of producing a gember","description":"Snurflers are a Nullwhere species that are particularly good at snurfling out gembers but aren't particularly useful in competitive dance battles."},
    {"name":"Spuddle","town":"Badgetown","image":"spuddle","food":"1 Clambrosia","move1cost":"0","move1name":"Risky Shift","move1desc":"50:50 chance of earning 5 points or giving opponent 5 points","move2cost":"0","move2name":"Berserka Mazurka","move2desc":"Stun a random ooblet from either team","move3cost":"1","move3name":"Group Think Slink","move3desc":"Add 10 points to both teams","description":"Spuddles are complex and mysterious ooblets that require a certain level of recklessness to employ in dance battles."},
    {"name":"Tamlin","town":"Oobtrotter","image":"tamlin","food":"3 Go Go Cupcake","move1cost":"1","move1name":"Fey-Away","move1desc":"Convert your trepidation to points","move2cost":"1","move2name":"Pixie Dustup","move2desc":"Swap your team’s hype & fluster with opponent’s hype & fluster","move3cost":"7","move3name":"Babbify","move3desc":"Make player tiny for the day","description":"Tamlins are rare ooblets with whimsical moves"},
    {"name":"Taterflop","town":"Event","image":"taterflop","food":"1 Bounce Salad","move1cost":"1","move1name":"Bippy Hop","move1desc":"Get 2 extra beats after 1 turn of warm-up","move2cost":"3","move2name":"Razzle Dazzle","move2desc":"Clear all hype from opponent's team","move3cost":"4","move3name":"Twist 'N Sprout","move3desc":"Gain 4 points and remove 1 fluster from your team","description":"A rare ooblet only found in Spring. Tater in shape. (Obtainable during Spring Event)"},
    {"name":"Tud","town":"Badgetown","image":"tud","food":"1 Frunbun Hunbun","move1cost":"1","move1name":"Glaze Glide","move1desc":"Gain 1 hype","move2cost":"1","move2name":"Tadpolka","move2desc":"Gain 1 point every time a move is played this hand","move3cost":"3","move3name":"Hype Tram Jam","move3desc":"Gain 3 hype","description":"Tuds are the semi-aquatic mascot ooblets of the Frunbuns club. They are good at being supportive members of a dance troupe. Wild tuds can only be lured into dances with exclusive Frunbuns treabies."},
    {"name":"Unnyhunny","town":"Badgetown","image":"unnyhunny","food":"1 Quib Tart","move1cost":"3","move1name":"Sugar Pan Shuffle","move1desc":"Earn 3 points and get a new move from your deck","move2cost":"1","move2name":"Fresh Start","move2desc":"Start with 2 extra beats next turn","move3cost":"3","move3name":"Let Loose","move3desc":"Join a teammate's warming-up move to decrease its warm-up time by 1 turn","description":"A diminutive yet multi-layered ooblet sporting natural rings that resemble headbands. Also little red booties."},
    {"name":"Whirlitzer","town":"Badgetown","image":"whirlitzer","food":"2 Ground Springbeans","move1cost":"1","move1name":"Gracing Pacing","move1desc":"Get 2 extra beats after 1 turn of warm-up","move2cost":"3","move2name":"Abrupt Disrupt","move2desc":"Interrupt and cancel all opponents' current warm-up moves","move3cost":"4","move3name":"Fateful Flourish","move3desc":"Opponent draws 1 fewer moves each hand for the rest of the match","description":"Whirlitzer, at the time of this writing, are the only ooblets known to be capable of flight, although not a whole lot of flight as they seem to just hover."},
    {"name":"Wigglewip","town":"Badgetown","image":"wigglewip","food":"2 Caroot","move1cost":"2","move1name":"Gyrate Fete","move1desc":"Add 3 trepidation (useless) cards to opponent's deck","move2cost":"2","move2name":"Rattle 'n Addle","move2desc":"Convert your opponent's hype to points for your team","move3cost":"1","move3name":"Plie DJ","move3desc":"Clear all fluster from your team, lose 4 points","description":"A root-based ooblet with more advanced and subtle dance battle techniques. Legend speaks of giant wigglewips that used to wander the land, but legend speaks of a lot of stuff."},
    {"name":"Wuddlin","town":"Badgetown (Snow) \/ Tippy Top","image":"wuddlin","food":"3 Delislushes","move1cost":"0","move1name":"Freeze Frame","move1desc":"Stun an opponent for 1 turn","move2cost":"0","move2name":"Wuddlin Waddle","move2desc":"Lose 5 points and gain 2 beats","move3cost":"2","move3name":"Softserve Shuffle","move3desc":"Gain 3 points plus an extra 2 hype if it's snowing","description":"A snow-waddling ooblet that is typically only found in colder climes and during snowfalls."}
];

almanacData.forEach(ooblet => {
    $('.almanac-ooblets > .row').append(
        $(document.createElement('div'))
            .addClass('almanac-ooblet col-xl-4 col-md-6 col-12 og-bg-gray-300 px-0 py-2 mx-md-0 mx-auto border border-5 border-light rounded')
            .append(
                $(document.createElement('div'))
                    .addClass('container px-3')
                    .append(
                        $(document.createElement('div'))
                            .addClass('row')
                            // name and location
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-12 og-bg-darkpurple text-white py-1')
                                    .append(
                                        $(document.createElement('span'))
                                            .text(ooblet.name)
                                    )
                                    .append(
                                        $(document.createElement('span'))
                                            .addClass('float-end almanac-location')
                                            .text(ooblet.town)
                                    )
                            )
                            // images
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-12')
                                    .append(
                                        $(document.createElement('div'))
                                            .addClass('row my-2')
                                            // gleamy
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4 p-0')
                                                    .append(
                                                        $(document.createElement('img'))
                                                            .addClass('img-gleamy clickable-oob d-flex my-0 mx-auto')
                                                            .data('action', 'add')
                                                            .data('oobname', ooblet.name.toLowerCase())
                                                            .data('oobtype', 'g')
                                                            .attr('src', 'images/ooblets/' + ooblet.name.toLowerCase() + '_g.png')
                                                    )
                                            )
                                            // common
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4 p-0')
                                                    .append(
                                                        $(document.createElement('img'))
                                                            .addClass('img-common clickable-oob d-flex my-0 mx-auto')
                                                            .data('action', 'add')
                                                            .data('oobname', ooblet.name.toLowerCase())
                                                            .data('oobtype', 'c')
                                                            .attr('src', 'images/ooblets/' + ooblet.name.toLowerCase() + '_c.png')
                                                    )
                                            )
                                            // uncommon
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4 p-0')
                                                    .append(
                                                        $(document.createElement('img'))
                                                            .addClass('img-uncommon clickable-oob d-flex my-0 mx-auto')
                                                            .data('action', 'add')
                                                            .data('oobname', ooblet.name.toLowerCase())
                                                            .data('oobtype', 'u')
                                                            .attr('src', 'images/ooblets/' + ooblet.name.toLowerCase() + '_u.png')
                                                    )
                                            )
                                    )
                            )
                            // variant
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-12 almanac-variant mb-2')
                                    .append(
                                        $(document.createElement('div'))
                                            .addClass('row text-center')
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4')
                                                    .text('Gleamy')
                                            )
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4')
                                                    .text('Common')
                                            )
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-4')
                                                    .text('Uncommon')
                                            )
                                    )
                            )
                            // food
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-11 og-bg-gray-400 almanac-food py-1 text-center rounded')
                                    .text(ooblet.food)
                            )
                            // bio
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-11 og-bg-gray-400 almanac-bio py-1 mt-2 mb-1 rounded')
                                    .text(ooblet.description)
                            )
                            // cards
                            .append(
                                $(document.createElement('div'))
                                    .addClass('col-11 almanac-cards')
                                    .append(
                                        $(document.createElement('div'))
                                            .addClass('row')
                                            // card 1
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-12')
                                                    .append(
                                                        $(document.createElement('div'))
                                                            .addClass('row my-1 almanac-card')
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 px-1 almanac-costname')
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardcost text-white rounded-circle float-start')
                                                                            .text(ooblet.move1cost)
                                                                    )
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardname text-white')
                                                                            .text(ooblet.move1name)
                                                                    )
                                                            )
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 almanac-carddesc')
                                                                    .text(ooblet.move1desc)
                                                            )
                                                    )
                                            )
                                            // card 2
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-12')
                                                    .append(
                                                        $(document.createElement('div'))
                                                            .addClass('row my-1 almanac-card')
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 px-1 almanac-costname')
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardcost text-white rounded-circle float-start')
                                                                            .text(ooblet.move2cost)
                                                                    )
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardname text-white')
                                                                            .text(ooblet.move2name)
                                                                    )
                                                            )
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 almanac-carddesc')
                                                                    .text(ooblet.move2desc)
                                                            )
                                                    )
                                            )
                                            // card 3
                                            .append(
                                                $(document.createElement('div'))
                                                    .addClass('col-12')
                                                    .append(
                                                        $(document.createElement('div'))
                                                            .addClass('row my-1 almanac-card')
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 px-1 almanac-costname')
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardcost text-white rounded-circle float-start')
                                                                            .text(ooblet.move3cost)
                                                                    )
                                                                    .append(
                                                                        $(document.createElement('div'))
                                                                            .addClass('almanac-cardname text-white')
                                                                            .text(ooblet.move3name)
                                                                    )
                                                            )
                                                            .append(
                                                                $(document.createElement('div'))
                                                                    .addClass('col-12 almanac-carddesc')
                                                                    .text(ooblet.move3desc)
                                                            )
                                                    )
                                            )
                                    )
                            )
                    )
            )
    )
})

$('.almanac-ooblets > .row').append(
    $(document.createElement('div'))
        .addClass('almanac-fullwish mx-auto my-0 w-auto text-center')
        .append(
            $(document.createElement('div'))
                .addClass('almanac-fullwish-content')
        )
        .append(
            $(document.createElement('p'))
                .addClass('canvas-credit')
                .css('display', 'none')
                .text('@ ooblets.guide')
        )
)