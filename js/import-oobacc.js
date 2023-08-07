const oobaccData = [
    {"id":"1","type":"glasses","name":"bandaid","location":"mossprouts","cost":"16"},
    {"id":"2","type":"glasses","name":"eyeball enhancers","location":"story\/frenz","cost":"0"},
    {"id":"3","type":"glasses","name":"eyeball glasses","location":"story\/frenz","cost":"0"},
    {"id":"4","type":"glasses","name":"green sunglasses","location":"mossprouts","cost":"16"},
    {"id":"5","type":"glasses","name":"hay twig","location":"story\/frenz","cost":"0"},
    {"id":"6","type":"glasses","name":"hypno glasses","location":"story\/frenz","cost":"0"},
    {"id":"7","type":"glasses","name":"jazzy glasses","location":"story\/frenz","cost":"0"},
    {"id":"8","type":"glasses","name":"monocle","location":"story\/frenz","cost":"0"},
    {"id":"9","type":"glasses","name":"panache glasses","location":"story\/frenz","cost":"0"},
    {"id":"10","type":"glasses","name":"sunglasses","location":"story\/frenz","cost":"0"},
    {"id":"11","type":"hats","name":"antlers 1","location":"winter","cost":"0"},
    {"id":"12","type":"hats","name":"antlers 2","location":"winter","cost":"0"},
    {"id":"13","type":"hats","name":"baby present costume","location":"winter","cost":"0"},
    {"id":"14","type":"hats","name":"baby snowplop costume","location":"winter","cost":"0"},
    {"id":"15","type":"hats","name":"baby warm hat","location":"winter","cost":"0"},
    {"id":"16","type":"hats","name":"beanie","location":"mossprouts","cost":"16"},
    {"id":"17","type":"hats","name":"bowler hat","location":"peaksnubs","cost":"16"},
    {"id":"18","type":"hats","name":"feather hat","location":"peaksnubs","cost":"16"},
    {"id":"19","type":"hats","name":"fluffy hat 1","location":"winter","cost":"0"},
    {"id":"20","type":"hats","name":"fluffy hat 2","location":"winter","cost":"0"},
    {"id":"21","type":"hats","name":"head flower","location":"frunbuns","cost":"16"},
    {"id":"22","type":"hats","name":"headband","location":"mimpins","cost":"16"},
    {"id":"23","type":"hats","name":"lil hard hat","location":"story\/frenz","cost":"0"},
    {"id":"24","type":"hats","name":"little beret","location":"peaksnubs","cost":"16"},
    {"id":"25","type":"hats","name":"official police hat","location":"zuffle","cost":"0"},
    {"id":"26","type":"hats","name":"pirate hat","location":"story\/frenz","cost":"0"},
    {"id":"27","type":"hats","name":"propella hat","location":"story\/frenz","cost":"0"},
    {"id":"28","type":"hats","name":"rain hat","location":"mossprouts","cost":"16"},
    {"id":"29","type":"hats","name":"safari hat","location":"story\/frenz","cost":"0"},
    {"id":"30","type":"hats","name":"sailorin' hat","location":"story\/frenz","cost":"0"},
    {"id":"31","type":"hats","name":"spriggle top","location":"story\/frenz","cost":"0"},
    {"id":"32","type":"hats","name":"tall crown","location":"story\/frenz","cost":"0"},
    {"id":"33","type":"hats","name":"top hat","location":"peaksnubs","cost":"16"},
    {"id":"34","type":"hats","name":"witchy hat","location":"vampire bento","cost":"0"},
    {"id":"35","type":"necks","name":"backpacky","location":"mossprouts","cost":"16"},
    {"id":"36","type":"necks","name":"bow tie (blue)","location":"story\/frenz","cost":"0"},
    {"id":"37","type":"necks","name":"bow tie (dotted black)","location":"peaksnubs","cost":"16"},
    {"id":"38","type":"necks","name":"bow tie (pink)","location":"frunbuns","cost":"16"},
    {"id":"39","type":"necks","name":"bow tie (striped red)","location":"mimpins","cost":"16"},
    {"id":"40","type":"necks","name":"fannypack","location":"mimpins","cost":"16"},
    {"id":"41","type":"necks","name":"ruff","location":"peaksnubs","cost":"16"},
    {"id":"42","type":"necks","name":"tutu","location":"frunbuns","cost":"16"},
    {"id":"43","type":"shoes","name":"baby skates","location":"pantsabear hills","cost":"0"},
    {"id":"44","type":"wands","name":"bat","location":"mossprouts","cost":"16"},
    {"id":"45","type":"wands","name":"blue chalk","location":"dance barn","cost":"0"},
    {"id":"46","type":"wands","name":"camby cane","location":"winter","cost":"0"},
    {"id":"47","type":"wands","name":"green chalk","location":"dance barn","cost":"0"},
    {"id":"48","type":"wands","name":"handbag","location":"story\/frenz","cost":"0"},
    {"id":"49","type":"wands","name":"ice cream cone","location":"frunbuns","cost":"16"},
    {"id":"50","type":"wands","name":"lollipop","location":"mimpins","cost":"16"},
    {"id":"51","type":"wands","name":"love you wand","location":"frunbuns","cost":"16"},
    {"id":"52","type":"wands","name":"popsicle","location":"frunbuns","cost":"16"},
    {"id":"53","type":"wands","name":"propella umbrella","location":"mimpins","cost":"16"},
    {"id":"54","type":"wands","name":"red chalk","location":"dance barn","cost":"0"},
    {"id":"55","type":"wands","name":"sand shovel","location":"dance barn","cost":"0"},
    {"id":"56","type":"wands","name":"sophisticated umbrella","location":"story\/frenz","cost":"0"},
    {"id":"57","type":"wands","name":"star umbrella","location":"story\/frenz","cost":"0"},
    {"id":"58","type":"wands","name":"transmitter","location":"dance barn","cost":"0"},
    {"id":"59","type":"wands","name":"water pistol","location":"mimpins","cost":"16"},
    {"id":"60","type":"hats","name":"baby pumpkin costume","location":"halloween","cost":"16"},
    {"id":"61","type":"hats","name":"baby wizard hat","location":"halloween","cost":"10"},
    {"id":"62","type":"hats","name":"party hat","location":"steal","cost":"0"},
    {"id":"63","type":"glasses","name":"lil mask","location":"halloween","cost":"16"},
    {"id":"64","type":"necks","name":"baby cape","location":"halloween","cost":"16"},
    {"id":"65","type":"necks","name":"lil spooky wings","location":"halloween","cost":"16"}
];

toTitleCase = (str) => {return str.replace(/(?:^|\s)\w/g, (match) => { return match.toUpperCase()})}

oobaccData.forEach(item => {
   $('.oobacc-' + item.type).append(
       $(document.createElement('div'))
           .addClass('clothings-item d-inline-block m-2 p-3 align-top og-bg-gray-200 position-relative')
           .append(
               $(document.createElement('span'))
                   .addClass('clothings-cost position-absolute og-bg-sunsetpurple text-light')
                   .text(item.cost)
           )
           .append(
               $(document.createElement('span'))
                   .addClass('clothings-location position-absolute og-bg-gray-400')
                   .text(item.location)
           )
           .append(
               $(document.createElement('div'))
                   .addClass('clothings-img mx-auto')
                   .css('background-image', 'url("../images/clothings/oobaccessories/' + item.type + '/' + item.name.replace(/ /g, '_').replace(/'/g, '') + '.jpg")')
           )
           .append(
               $(document.createElement('p'))
                   .addClass('clothings-name og-ellipsis')
                   .attr('title', toTitleCase(item.name))
                   .text(toTitleCase(item.name))
           )

   )
});