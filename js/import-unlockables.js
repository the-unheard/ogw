const slurryData = [
    {"item":"Bunch-o-buttons","amount":"1"},
    {"item":"Buttonboy","amount":"1"},
    {"item":"Gross Boot","amount":"1"},
    {"item":"Mystery Can","amount":"1"},
    {"item":"Pop Top","amount":"1"},
    {"item":"Shelbo","amount":"1"},
    {"item":"Shiny Bit","amount":"1"},
    {"item":"Sporbet","amount":"1"},
    {"item":"Strange Square","amount":"1"},
    {"item":"Wrapper","amount":"1"},
    {"item":"Nurny","amount":"2"},
    {"item":"Planklet","amount":"2"},
    {"item":"Quib","amount":"2"},
    {"item":"Arcade Token","amount":"3"},
    {"item":"Boregus","amount":"3"},
    {"item":"Caroot","amount":"3"},
    {"item":"Clothlet","amount":"3"},
    {"item":"Festive Bobble","amount":"3"},
    {"item":"Muz Flour","amount":"3"},
    {"item":"Muz","amount":"3"},
    {"item":"Recipe Piece","amount":"3"},
    {"item":"Seaplop","amount":"3"},
    {"item":"Sweetiebeetie","amount":"3"},
    {"item":"Dregplant","amount":"4"},
    {"item":"Fartichoke","amount":"4"},
    {"item":"Lopauliflower","amount":"4"},
    {"item":"Pompadoot","amount":"4"},
    {"item":"Sparkflower","amount":"4"},
    {"item":"Springbean","amount":"4"},
    {"item":"Zinooka","amount":"4"},
    {"item":"Clambrosia","amount":"6"},
    {"item":"Jinglebread Oob Cookie","amount":"6"},
    {"item":"Flootiflower","amount":"8"},
    {"item":"Froobtose","amount":"8"},
    {"item":"Ground Springbeans","amount":"10"},
    {"item":"Oodles","amount":"10"},
    {"item":"Pompadoot Juice","amount":"10"},
    {"item":"Delislush","amount":"12"},
    {"item":"Flooti Karioka","amount":"12"},
    {"item":"Button Soup","amount":"14"},
    {"item":"Quib Tart","amount":"14"},
    {"item":"Beanjuice","amount":"22"},
    {"item":"Caroot Cake","amount":"28"},
    {"item":"Balmybloom","amount":"30"},
    {"item":"Candy","amount":"30"},
    {"item":"Gember","amount":"30"},
    {"item":"Hyperglob","amount":"30"},
    {"item":"Oobsidian","amount":"30"},
    {"item":"Rainplop","amount":"30"},
    {"item":"Snowplop","amount":"30"},
    {"item":"Spicyspear","amount":"30"},
    {"item":"Sprockut","amount":"30"}
];

const recipesData = [
    {"name":"A Very Cellulettuce Sammy","location":"Wishy Well"},
    {"name":"Beanjuice","location":"Wishy Well"},
    {"name":"Beebun","location":"Bunglebee Mines"},
    {"name":"Beetie Curd","location":"Dance Barn"},
    {"name":"Blue Goo Pie","location":"Dance Barn"},
    {"name":"Bread Sammy","location":"Wishy Well"},
    {"name":"Button Soup","location":"Recipe Piece"},
    {"name":"Candy Salad","location":"Port Forward (Ticket Exchange)"},
    {"name":"Caroot Cake","location":"Wishy Well"},
    {"name":"Clambrosia","location":"Wishy Well"},
    {"name":"Delislush","location":"Wishy Well"},
    {"name":"Flooti Karioka","location":"Wishy Well"},
    {"name":"Flooti Sauce","location":"Default"},
    {"name":"Froobtose","location":"Default"},
    {"name":"Glob Blobs","location":"Wishy Well"},
    {"name":"Gloom Bun","location":"Nullwhere (Defeat the witch)"},
    {"name":"Go Go Cupcake","location":"Dance Barn"},
    {"name":"Ground Springbeans","location":"Wishy Well"},
    {"name":"Hop Dob","location":"Default"},
    {"name":"Hop Hop Hop Dob","location":"Default"},
    {"name":"Lurge Latty","location":"Recipe Piece"},
    {"name":"Mamoonia Macaroon","location":"Recipe Piece"},
    {"name":"Muz Flour","location":"Default"},
    {"name":"Muzimi","location":"Recipe Piece"},
    {"name":"Oodles","location":"Default"},
    {"name":"Pibblepug Pie","location":"Dance Barn"},
    {"name":"Pneumatic Gnocchi","location":"Wishy Well"},
    {"name":"Pompadoot Juice","location":"Wishy Well"},
    {"name":"Quib Tart","location":"Default"},
    {"name":"Roast Dregs","location":"Nullwhere (Find big Oogum)"},
    {"name":"Soggy Bread","location":"Wishy Well"},
    {"name":"Sootheysip","location":"Dance Barn"},
    {"name":"Spressy","location":"Recipe Piece"},
    {"name":"Squishmallow","location":"Wildlands (Level 9)"},
    {"name":"Thimbi Tartare","location":"Recipe Piece"},
    {"name":"Zinooka Cake","location":"Recipe Piece"}
];

const dribblerData = [
    {"type":"Dribbly Can","uses":"10","cost":"0"},
    {"type":"Drizzle Dribbler","uses":"20","cost":"250"},
    {"type":"Dandy Dribbler","uses":"30","cost":"500"}
]

const wishywellData = [
    {"wish":"Basic Sprinkler","type":"Blueprint","cost":"75"},
    {"wish":"Good Sprinkler","type":"Blueprint","cost":"100"},
    {"wish":"Medium Sprinkler","type":"Blueprint","cost":"100"},
    {"wish":"Swooshler","type":"Blueprint","cost":"75"},
    {"wish":"Oobcoop Level 2","type":"Blueprint","cost":"100"},
    {"wish":"Oobcoop Level 3","type":"Blueprint","cost":"100"},
    {"wish":"Oobcoop Level 4","type":"Blueprint","cost":"100"},
    {"wish":"Oobcoop Level 5","type":"Blueprint","cost":"100"},
    {"wish":"Spaceheater","type":"Blueprint","cost":"150"},
    {"wish":"Sprinklehot","type":"Blueprint","cost":"200"},
    {"wish":"Sprinklehot XL","type":"Blueprint","cost":"300"},
    {"wish":"Beanjuice","type":"Recipe","cost":"50"},
    {"wish":"Caroot Cake","type":"Recipe","cost":"50"},
    {"wish":"Clambrosia","type":"Recipe","cost":"50"},
    {"wish":"Delislush","type":"Recipe","cost":"200"},
    {"wish":"Flooti Karioka","type":"Recipe","cost":"50"},
    {"wish":"Glob Blobs","type":"Recipe","cost":"200"},
    {"wish":"Ground Springbeans","type":"Recipe","cost":"50"},
    {"wish":"Pompadoot Juice","type":"Recipe","cost":"50"},
    {"wish":"Meed's Seeds","type":"Expansion","cost":"75"},
    {"wish":"Snups I","type":"Expansion","cost":"50"},
    {"wish":"Snups II","type":"Expansion","cost":"50"},
    {"wish":"Snups III","type":"Expansion","cost":"50"},
    {"wish":"Kibbon-bon I","type":"Expansion","cost":"50"},
    {"wish":"Kibbon-bon II","type":"Expansion","cost":"50"},
    {"wish":"Kibbon-bon III","type":"Expansion","cost":"50"},
    {"wish":"Manatwee I","type":"Expansion","cost":"50"},
    {"wish":"Manatwee II","type":"Expansion","cost":"50"},
    {"wish":"Manatwee III","type":"Expansion","cost":"50"},
    {"wish":"More Home Decor","type":"Expansion","cost":"50"},
    {"wish":"Even More Home Decor","type":"Expansion","cost":"75"},
    {"wish":"Even More Home Decor II","type":"Expansion","cost":"200"},
    {"wish":"Plennys Level II","type":"Upgrade","cost":"75"},
    {"wish":"Plennys Level III","type":"Upgrade","cost":"100"},
    {"wish":"Plennys Level IV","type":"Upgrade","cost":"125"},
    {"wish":"Faster Reconstitooter","type":"Upgrade","cost":"100"},
    {"wish":"Even Faster Reconstitooter","type":"Upgrade","cost":"100"},
    {"wish":"More Energy","type":"Upgrade","cost":"300"},
    {"wish":"Faster Run Speed","type":"Upgrade","cost":"500"},
    {"wish":"Even Faster Run Speed","type":"Upgrade","cost":"750"},
    {"wish":"Bigger Toolbelt","type":"Upgrade","cost":"300"},
    {"wish":"Bigger Farm","type":"Upgrade","cost":"1000"},
    {"wish":"More Ooblets","type":"Upgrade","cost":"50"},
    {"wish":"Even More Ooblets I","type":"Upgrade","cost":"100"},
    {"wish":"Even More Ooblets II","type":"Upgrade","cost":"100"},
    {"wish":"Even More Ooblets III","type":"Upgrade","cost":"100"},
    {"wish":"Even More Ooblets IV","type":"Upgrade","cost":"100"},
    {"wish":"1x Speedy Grow","type":"Repeatable","cost":"5"},
    {"wish":"1x Speedy Grow Pro","type":"Repeatable","cost":"25"},
    {"wish":"1x Clothlet","type":"Repeatable","cost":"75"},
    {"wish":"1x Oobsidian","type":"Repeatable","cost":"100"},
    {"wish":"100x Gummy","type":"Repeatable","cost":"50"},
    {"wish":"Bread Sammy","type":"Recipe","cost":"100"},
    {"wish":"Soggy Bread","type":"Recipe","cost":"100"}
];

const badgetownOobletsData = [
    {"name":"Clomper","unlockedby":"Default"},
    {"name":"Dumbirb","unlockedby":"Default"},
    {"name":"Fleeble","unlockedby":"Default"},
    {"name":"Lumpstump","unlockedby":"Default"},
    {"name":"Wigglewip","unlockedby":"Default"},
    {"name":"Clickyclaws","unlockedby":"More Ooblets"},
    {"name":"Oogum","unlockedby":"More Ooblets"},
    {"name":"Unnyhunny","unlockedby":"More Ooblets"},
    {"name":"Isopud","unlockedby":"Even More Ooblets I"},
    {"name":"Plop","unlockedby":"Even More Ooblets I"},
    {"name":"Radlad","unlockedby":"Even More Ooblets I"},
    {"name":"Nuppo","unlockedby":"Even More Ooblets II"},
    {"name":"Petula","unlockedby":"Even More Ooblets II"},
    {"name":"Spuddle","unlockedby":"Even More Ooblets II"},
    {"name":"Moogy","unlockedby":"Even More Ooblets III"},
    {"name":"Sidekey","unlockedby":"Even More Ooblets III"},
    {"name":"Whirlitzer","unlockedby":"Even More Ooblets III"},
    {"name":"Bittle","unlockedby":"Even More Ooblets IV"},
    {"name":"Shrumbo","unlockedby":"Even More Ooblets IV"},
    {"name":"Tud","unlockedby":"Even More Ooblets IV"}
];

const wildlandsData = [
    {"unlockables":"Spicyspear Scrub","type":"Location","level":"2"},
    {"unlockables":"Hay Twig","type":"Ooblets Accessory","level":"3"},
    {"unlockables":"Lightylanty","type":"Player Accessory","level":"4"},
    {"unlockables":"Lumberjack Hat","type":"Player Accessory","level":"5"},
    {"unlockables":"Droneydrip Pond","type":"Location","level":"6"},
    {"unlockables":"Lookie Lenses","type":"Player Accessory","level":"7"},
    {"unlockables":"Flannel Wallpaper","type":"Decoration","level":"8"},
    {"unlockables":"Squishmallow Recipe","type":"Recipe","level":"9"},
    {"unlockables":"Nurnycrop Crag","type":"Location","level":"10"}
];

const backpacksData = [
    {"type":"None Equipped","slots":"15","cost":"0"},
    {"type":"Basic Bum Bag","slots":"20","cost":"250"},
    {"type":"Sadsack Pack","slots":"22","cost":"350"},
    {"type":"Basic Backpack","slots":"25","cost":"500"},
    {"type":"Mega Rucksack","slots":"30","cost":"600"}
];

slurryData.forEach(item => {
    $('.upgrades-slurry tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.item)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.amount)
            )
    )
});

recipesData.forEach(item => {
    $('.upgrades-recipe tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.name)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.location)
            )
    )
});

dribblerData.forEach(item => {
    $('.upgrades-dribbler tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.type)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.uses)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.cost)
            )
    )
});

wishywellData.forEach(item => {
    $('.upgrades-wishywell tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.wish)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.type)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.cost)
            )
    )
});

badgetownOobletsData.forEach(item => {
    $('.upgrades-badgetown tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.name)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.unlockedby)
            )
    )
});

wildlandsData.forEach(item => {
    $('.upgrades-wildlands tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.unlockables)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.type)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.level)
            )
    )
});

backpacksData.forEach(item => {
    $('.upgrades-backpack tbody').append(
        $(document.createElement('tr'))
            .append(
                $(document.createElement('td'))
                    .text(item.type)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.slots)
            )
            .append(
                $(document.createElement('td'))
                    .text(item.cost)
            )
    )
});