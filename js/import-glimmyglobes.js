const glimmyglobesData = ['angkze', 'bibbin', 'bittle', 'bristlebud', 'bunglebee', 'chickadingding', 'clickyclaws', 'clomper', 'derble',
    'dooziedug', 'dumbirb', 'firmo', 'fleeble', 'fripp', 'glanter', 'gloopylonglegs', 'gopslop', 'grebun', 'gubwee', 'gullysplot',
    'gumple', 'hermble', 'isopud', 'jama', 'kingwa', 'legsy', 'lickzer', 'lumpstump', 'marshling', 'moogy', 'namnam', 'nuppo',
    'oogum', 'pantsabear', 'petula', 'plob', 'quabbo', 'radlad', 'rockstack', 'shrumbo', 'sidekey', 'skuffalo', 'snurfler',
    'spuddle', 'tamlin', 'taterflop', 'tud', 'unnyhunny', 'whirlitzer', 'wigglewip', 'wuddlin', 'xanaboo'];

const globeType = ['basic', 'exquisite', 'fancy'];
const oobletRarity = ['common', 'uncommon', 'gleamy'];
let fullName;

toTitleCase = (str) => {return str.replace(/(?:^|\s)\w/g, (match) => { return match.toUpperCase()})}

glimmyglobesData.forEach(ooblet =>{
    oobletRarity.forEach(rarity => {
        globeType.forEach(type => {
            fullName = toTitleCase(rarity) + ' ' + toTitleCase(ooblet) + ' - ' + toTitleCase(type);

            $('.glimmyglobes-' + rarity).append(
                $(document.createElement('div'))
                    .addClass('glimmyglobes-item d-inline-block m-2 p-3 align-top position-relative')
                    .append(
                        $(document.createElement('a'))
                            .addClass('glimmyglobes-link')
                            .attr('href', 'images/glimmyglobes/small/'+ rarity[0] +'_' + ooblet + '_'+ type[0] +'.jpg')
                            .append(
                                $(document.createElement('img'))
                                    .addClass('glimmyglobes-img mx-auto')
                                    .attr('src', 'images/glimmyglobes/small/'+ rarity[0] +'_' + ooblet + '_'+ type[0] +'.jpg"')
                                    .attr('alt', fullName)
                            )
                    )
                    .append(
                        $(document.createElement('p'))
                            .addClass('glimmyglobes-name og-ellipsis')
                            .attr('title', fullName)
                            .text(fullName)
                    )
            )
        })
    })
})