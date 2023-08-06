const fishingData = [
    {"location":"badgetown","bait":"basic","type":"garbage","item":"wrapper","qty":"1","rate":"4.32"},
    {"location":"badgetown","bait":"basic","type":"garbage","item":"gross boot","qty":"1","rate":"4.32"},
    {"location":"badgetown","bait":"basic","type":"garbage","item":"strange square","qty":"1","rate":"4.32"},
    {"location":"badgetown","bait":"basic","type":"garbage","item":"pop top","qty":"1","rate":"4.32"},
    {"location":"badgetown","bait":"basic","type":"garbage","item":"shiny bit","qty":"1","rate":"4.32"},
    {"location":"badgetown","bait":"basic","type":"essentials","item":"gummy","qty":"1","rate":"7.2"},
    {"location":"badgetown","bait":"basic","type":"essentials","item":"nurny","qty":"5","rate":"5.6"},
    {"location":"badgetown","bait":"basic","type":"essentials","item":"planklet","qty":"5","rate":"5.6"},
    {"location":"badgetown","bait":"basic","type":"best","item":"oobsidian","qty":"1","rate":"0.8"},
    {"location":"badgetown","bait":"basic","type":"fertilizer","item":"speedy grow","qty":"1","rate":"24"},
    {"location":"badgetown","bait":"basic","type":"fertilizer","item":"meltilizer","qty":"1","rate":"19.2"},
    {"location":"badgetown","bait":"basic","type":"fertilizer","item":"speedy grow pro","qty":"1","rate":"5.6"},
    {"location":"badgetown","bait":"basic","type":"fertilizer","item":"stay soggy","qty":"1","rate":"8"},
    {"location":"badgetown","bait":"basic","type":"fertilizer","item":"stay soggy extra","qty":"1","rate":"2.4"},
    {"location":"badgetown","bait":"hq","type":"garbage","item":"wrapper","qty":"1","rate":"1.2"},
    {"location":"badgetown","bait":"hq","type":"garbage","item":"gross boot","qty":"1","rate":"1.2"},
    {"location":"badgetown","bait":"hq","type":"garbage","item":"strange square","qty":"1","rate":"1.8"},
    {"location":"badgetown","bait":"hq","type":"garbage","item":"pop top","qty":"1","rate":"1.8"},
    {"location":"badgetown","bait":"hq","type":"garbage","item":"shiny bit","qty":"1","rate":"1.8"},
    {"location":"badgetown","bait":"hq","type":"essentials","item":"gummy","qty":"1","rate":"5.4"},
    {"location":"badgetown","bait":"hq","type":"essentials","item":"nurny","qty":"5","rate":"4.2"},
    {"location":"badgetown","bait":"hq","type":"essentials","item":"planklet","qty":"5","rate":"4.2"},
    {"location":"badgetown","bait":"hq","type":"best","item":"oobsidian","qty":"1","rate":"1.2"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"speedy grow","qty":"1","rate":"15.1"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"meltilizer","qty":"1","rate":"15.1"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"meltilizer","qty":"5","rate":"6"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"speedy grow pro","qty":"1","rate":"12"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"speedy grow pro","qty":"5","rate":"6"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"stay soggy","qty":"1","rate":"12"},
    {"location":"badgetown","bait":"hq","type":"fertilizer","item":"stay soggy extra","qty":"1","rate":"9"},
    {"location":"badgetown","bait":"hq","type":"music","item":"toot horn","qty":"1","rate":"0.6"},
    {"location":"badgetown","bait":"hq","type":"music","item":"annoyance drum","qty":"1","rate":"0.6"},
    {"location":"badgetown","bait":"hq","type":"music","item":"shakey shaker","qty":"1","rate":"0.6"},
    {"location":"badgetown","bait":"super","type":"essentials","item":"nurny","qty":"15","rate":"36.4"},
    {"location":"badgetown","bait":"super","type":"essentials","item":"planklet","qty":"15","rate":"36.4"},
    {"location":"badgetown","bait":"super","type":"best","item":"oobsidian","qty":"1","rate":"18.2"},
    {"location":"badgetown","bait":"super","type":"best","item":"curlyhorn","qty":"1","rate":"9.1"},
    {"location":"wildlands","bait":"basic","type":"essentials","item":"gummy","qty":"1","rate":"1.7"},
    {"location":"wildlands","bait":"basic","type":"essentials","item":"nurny","qty":"10","rate":"6"},
    {"location":"wildlands","bait":"basic","type":"essentials","item":"planklet","qty":"10","rate":"6"},
    {"location":"wildlands","bait":"basic","type":"essentials","item":"oobsidian","qty":"1","rate":"1.7"},
    {"location":"wildlands","bait":"basic","type":"essentials","item":"speedy grow","qty":"1","rate":"25.9"},
    {"location":"wildlands","bait":"basic","type":"fertilizer","item":"meltilizer","qty":"1","rate":"25.9"},
    {"location":"wildlands","bait":"basic","type":"fertilizer","item":"speedy grow pro","qty":"1","rate":"6"},
    {"location":"wildlands","bait":"basic","type":"fertilizer","item":"stay soggy","qty":"1","rate":"8.6"},
    {"location":"wildlands","bait":"basic","type":"fertilizer","item":"stay soggy extra","qty":"1","rate":"2.6"},
    {"location":"wildlands","bait":"basic","type":"best","item":"random seed","qty":"1","rate":"5.2"},
    {"location":"wildlands","bait":"basic","type":"best","item":"random token","qty":"1","rate":"7.8"},
    {"location":"wildlands","bait":"basic","type":"garbage","item":"strange square","qty":"1","rate":"2.6"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"gummy","qty":"1","rate":"4.7"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"nurny","qty":"15","rate":"2.6"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"planklet","qty":"15","rate":"2.6"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"nurny","qty":"10","rate":"4.1"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"planklet","qty":"10","rate":"4.1"},
    {"location":"wildlands","bait":"hq","type":"essentials","item":"oobsidian","qty":"1","rate":"1"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"speedy grow","qty":"1","rate":"13"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"speedy grow","qty":"5","rate":"5.2"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"speedy grow pro","qty":"1","rate":"10.4"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"stay soggy","qty":"1","rate":"10.4"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"stay soggy extra","qty":"1","rate":"7.8"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"meltilizer","qty":"1","rate":"13"},
    {"location":"wildlands","bait":"hq","type":"fertilizer","item":"meltilizer","qty":"5","rate":"4.7"},
    {"location":"wildlands","bait":"hq","type":"best","item":"random seed","qty":"1","rate":"6.2"},
    {"location":"wildlands","bait":"hq","type":"best","item":"random token","qty":"2","rate":"7.8"},
    {"location":"wildlands","bait":"hq","type":"garbage","item":"strange square","qty":"1","rate":"2.6"},
    {"location":"wildlands","bait":"super","type":"essentials","item":"nurny","qty":"15","rate":"20"},
    {"location":"wildlands","bait":"super","type":"essentials","item":"nurny","qty":"25","rate":"8"},
    {"location":"wildlands","bait":"super","type":"essentials","item":"planklet","qty":"15","rate":"20"},
    {"location":"wildlands","bait":"super","type":"essentials","item":"planklet","qty":"25","rate":"8"},
    {"location":"wildlands","bait":"super","type":"best","item":"oobsidian","qty":"1","rate":"8"},
    {"location":"wildlands","bait":"super","type":"best","item":"curlyhorn","qty":"1","rate":"8"},
    {"location":"wildlands","bait":"super","type":"best","item":"random seed","qty":"1","rate":"20"},
    {"location":"wildlands","bait":"super","type":"best","item":"random token","qty":"3","rate":"8"},
    {"location":"portforward","bait":"basic","type":"garbage","item":"wrapper","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"basic","type":"garbage","item":"gross boot","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"basic","type":"garbage","item":"pop top","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"basic","type":"garbage","item":"shiny bit","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"basic","type":"essentials","item":"planklet","qty":"1","rate":"16.7"},
    {"location":"portforward","bait":"basic","type":"essentials","item":"planklet","qty":"5","rate":"11.1"},
    {"location":"portforward","bait":"basic","type":"essentials","item":"gummy","qty":"1","rate":"16.7"},
    {"location":"portforward","bait":"basic","type":"best","item":"soggy balloon","qty":"1","rate":"5.6"},
    {"location":"portforward","bait":"basic","type":"best","item":"bulk candy","qty":"1","rate":"8.3"},
    {"location":"portforward","bait":"basic","type":"best","item":"arcade token","qty":"1","rate":"16.7"},
    {"location":"portforward","bait":"basic","type":"best","item":"arcade ticket","qty":"3","rate":"8.3"},
    {"location":"portforward","bait":"basic","type":"best","item":"sprockut","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"basic","type":"garbage","item":"strange square","qty":"1","rate":"2.8"},
    {"location":"portforward","bait":"hq","type":"garbage","item":"wrapper","qty":"1","rate":"2.2"},
    {"location":"portforward","bait":"hq","type":"garbage","item":"gross boot","qty":"1","rate":"2.2"},
    {"location":"portforward","bait":"hq","type":"garbage","item":"pop top","qty":"1","rate":"2.2"},
    {"location":"portforward","bait":"hq","type":"garbage","item":"shiny bit","qty":"1","rate":"2.2"},
    {"location":"portforward","bait":"hq","type":"essentials","item":"planklet","qty":"1","rate":"10.8"},
    {"location":"portforward","bait":"hq","type":"essentials","item":"planklet","qty":"5","rate":"8.1"},
    {"location":"portforward","bait":"hq","type":"essentials","item":"gummy","qty":"1","rate":"13.5"},
    {"location":"portforward","bait":"hq","type":"best","item":"soggy balloon","qty":"2","rate":"10.8"},
    {"location":"portforward","bait":"hq","type":"best","item":"bulk candy","qty":"1","rate":"10.8"},
    {"location":"portforward","bait":"hq","type":"best","item":"arcade token","qty":"2","rate":"18.9"},
    {"location":"portforward","bait":"hq","type":"best","item":"arcade ticket","qty":"6","rate":"10.8"},
    {"location":"portforward","bait":"hq","type":"best","item":"sprockut","qty":"1","rate":"5.4"},
    {"location":"portforward","bait":"hq","type":"garbage","item":"strange square","qty":"1","rate":"2.2"},
    {"location":"portforward","bait":"super","type":"garbage","item":"wrapper","qty":"1","rate":"2.1"},
    {"location":"portforward","bait":"super","type":"garbage","item":"gross boot","qty":"1","rate":"2.1"},
    {"location":"portforward","bait":"super","type":"garbage","item":"pop top","qty":"1","rate":"2.1"},
    {"location":"portforward","bait":"super","type":"garbage","item":"shiny bit","qty":"1","rate":"2.1"},
    {"location":"portforward","bait":"super","type":"essentials","item":"planklet","qty":"1","rate":"10.3"},
    {"location":"portforward","bait":"super","type":"essentials","item":"planklet","qty":"5","rate":"5.1"},
    {"location":"portforward","bait":"super","type":"essentials","item":"gummy","qty":"1","rate":"10.3"},
    {"location":"portforward","bait":"super","type":"best","item":"soggy balloon","qty":"3","rate":"10.3"},
    {"location":"portforward","bait":"super","type":"best","item":"bulk candy","qty":"1","rate":"12.8"},
    {"location":"portforward","bait":"super","type":"best","item":"arcade token","qty":"3","rate":"20.5"},
    {"location":"portforward","bait":"super","type":"best","item":"arcade ticket","qty":"9","rate":"12.8"},
    {"location":"portforward","bait":"super","type":"best","item":"sprockut","qty":"1","rate":"7.7"},
    {"location":"portforward","bait":"super","type":"garbage","item":"strange square","qty":"1","rate":"2.1"}
];

fishingData.forEach(item => {
    $('.fh-' + item.location + '-' + item.bait ).append(
        $(document.createElement('div'))
            .addClass('fh-catch rounded position-relative d-inline-block og-bg-gray-200')
            .append(
                $(document.createElement('div'))
                    .addClass('fh-catch-img')
                    .css('background-image', 'url("images/fishing/' + item.item.replace(/ /g, '_') + '.png")')
            )
            .append(
                $(document.createElement('div'))
                    .addClass('fh-catch-name')
                    .text(item.item)
            )
            .append(
                $(document.createElement('div'))
                    .addClass('fh-catch-qty')
                    .text(item.qty)
            )
            .append(
                $(document.createElement('div'))
                    .addClass('fh-catch-rate position-absolute og-bg-cyan text-light')
                    .text(item.rate + '%')
            )
    )
});
