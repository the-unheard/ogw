class Main {

    constructor (){
        this.init();
    }

    init() {
        this.globeOoblets = [
            {"name":"Angkze","town":"Port Forward"},
            {"name":"Bibbin","town":"Badgetown"},
            {"name":"Bittle","town":"Badgetown"},
            {"name":"Bristlebud","town":"Mamoonia"},
            {"name":"Bunglebee","town":"Badgetown"},
            {"name":"Chickadingding","town":"Nullwhere"},
            {"name":"Clickyclaws","town":"Badgetown"},
            {"name":"Clomper","town":"Badgetown"},
            {"name":"Derble","town":"Mamoonia"},
            {"name":"Dooziedug","town":"Oobtrotter"},
            {"name":"Dumbirb","town":"Badgetown"},
            {"name":"Firmo","town":"Mamoonia"},
            {"name":"Fleeble","town":"Badgetown"},
            {"name":"Fripp","town":"Mamoonia"},
            {"name":"Glanter","town":"Nullwhere"},
            {"name":"Gloopylonglegs","town":"Nullwhere"},
            {"name":"Gopslop","town":"Tippy Top"},
            {"name":"Grebun","town":"Oobtrotter"},
            {"name":"Gubwee","town":"Port Forward"},
            {"name":"Gullysplot","town":"Port Forward"},
            {"name":"Gumple","town":"Oobtrotter"},
            {"name":"Hermble","town":"Mamoonia"},
            {"name":"Isopud","town":"Badgetown"},
            {"name":"Jama","town":"Badgetown"},
            {"name":"Kingwa","town":"Oobtrotter"},
            {"name":"Legsy","town":"Port Forward"},
            {"name":"Lickzer","town":"Nullwhere"},
            {"name":"Lumpstump","town":"Badgetown"},
            {"name":"Marshling","town":"Nullwhere"},
            {"name":"Moogy","town":"Badgetown"},
            {"name":"Namnam","town":"Nullwhere"},
            {"name":"Nuppo","town":"Badgetown"},
            {"name":"Oogum","town":"Badgetown"},
            {"name":"Pantsabear","town":"Pantsabear Hill"},
            {"name":"Petula","town":"Badgetown"},
            {"name":"Plob","town":"Badgetown"},
            {"name":"Quabbo","town":"Port Forward"},
            {"name":"Radlad","town":"Badgetown"},
            {"name":"Rockstack","town":"Tippy Top"},
            {"name":"Shrumbo","town":"Badgetown"},
            {"name":"Sidekey","town":"Badgetown"},
            {"name":"Skuffalo","town":"Nullwhere"},
            {"name":"Snurfler","town":"Nullwhere"},
            {"name":"Spuddle","town":"Badgetown"},
            {"name":"Tamlin","town":"Oobtrotter"},
            {"name":"Taterflop","town":"Badgetown"},
            {"name":"Tud","town":"Badgetown"},
            {"name":"Unnyhunny","town":"Badgetown"},
            {"name":"Whirlitzer","town":"Badgetown"},
            {"name":"Wigglewip","town":"Badgetown"},
            {"name":"Wuddlin","town":"Badgetown"}
        ];
        this.arranged = Array.from(this.globeOoblets).sort((a, b) => a.name.localeCompare(b.name));
        this.owned = [];
        this.progressCommon = 0;
        this.progressUncommon = 0;
        this.progressGleamy = 0;
        this.populateTable();
        this.events();
        this.updateProgressBars();
        this.loadFromUrl();
        this.toolTipEnabler();
    }

    events() {
        // toggle
        $(document).on('click', '.gg-tracker-toggleable', (evt) => {
            const target = $(evt.target);
            target.toggleClass('gg-tracker-owned');
            this.updateOwned(target);
        });
    }

    populateTable(){
        for(let i = 0; i < this.arranged.length; i ++) {

            let ooblet = this.arranged[i];
            let targetTable =  (i < this.arranged.length / 3) ? '1' : (i < this.arranged.length / 3 * 2) ? '2' : '3';

            $('.gg-tracker-table-' + targetTable + ' tbody').append(
                $(document.createElement('tr'))
                    .addClass('gg-tracker-' + ooblet.name.toLowerCase())
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-img p-0')
                            .css('background-image', 'url("images/glimmyglobes-tracker/ooblets/shadow.png")')
                            .append (
                                $(document.createElement('img'))
                                    .attr('src', 'images/glimmyglobes-tracker/ooblets/c_' + ooblet.name.toLowerCase() + '.png')
                            )
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-name text-start')
                            .text(ooblet.name)
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-c-basic gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'a')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_basic.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-c-fancy gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'b')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_fancy.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-c-exquisite gg-tracker-toggleable gg-tracker-bordered')
                            .attr('data-tracker-letter', 'c')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_exquisite.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-u-basic gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'd')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_basic.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-u-fancy gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'e')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_fancy.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-u-exquisite gg-tracker-toggleable gg-tracker-bordered')
                            .attr('data-tracker-letter', 'f')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_exquisite.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-g-basic gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'g')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_basic.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-g-fancy gg-tracker-toggleable gg-tracker-toggleable')
                            .attr('data-tracker-letter', 'h')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_fancy.png")')
                    )
                    .append(
                        $(document.createElement('td'))
                            .addClass('gg-tracker-g-exquisite gg-tracker-toggleable gg-tracker-bordered')
                            .attr('data-tracker-letter', 'i')
                            .css('background-image', 'url("images/glimmyglobes-tracker/' + ooblet.town.toLowerCase().replace(/ /, '_') + '_exquisite.png")')
                    )
            )
        }
    }

    updateOwned(target) {

        const name = target.parent('tr').find('.gg-tracker-name').text();
        let i, id, num;
        let str = '';

        // get the ID of the ooblet by comparing the name with the globe ooblets array
        id = this.globeOoblets.findIndex(ooblet => ooblet.name === name);
        str += id;

        // get the current letter and adjust progress accordingly
        num = ($(target).hasClass('gg-tracker-owned')) ? 1 : -1;
        this.updateProgress($(target).data('tracker-letter'), num);

        // get the letters of all owned globe to be merged with the ID
        $('.gg-tracker-' + name.toLowerCase() + ' .gg-tracker-owned').each((i, e) => {
            str += $(e).data('tracker-letter');
        });

        // check if the id already exists in the owned array, then delete it
        for(i = 0; i < this.owned.length; i++) {
            if(parseInt(this.owned[i].match(/\d+/)[0]) === id) {
                this.owned.splice(i, 1);
            }
        }

        // shortens the code
        str = str
            .replace('abc', 'x')
            .replace('def', 'y')
            .replace('ghi', 'z');

        // if the code has a succeeding letter(s) then push it to array, otherwise, if it doesn't have any globes then don't push it to array
        (/[a-zA-Z]/.test(str)) && this.owned.push(str);
        this.updateUrl();

    }

    updateUrl() {

        const url = window.location.href.replace(/\?o=(.*)/,'');
        let param = '';
        let newUrl;

        for (let i = 0; i < this.owned.length; i++) {
            param += this.owned[i] + '-';
        }

        newUrl = (param === '') ? url : url + '?o=' + param.substring(0, param.length - 1);
        window.history.pushState({ path: newUrl }, '', newUrl);

    }

    loadFromUrl() {
        const url = window.location.href;
        if (url.indexOf("?o=") > -1) {
            this.owned = url.match(/\?o=(.*)/)[1].split(/-/);
            this.applyOwned();
        }
    }

    applyOwned() {

        let i, j, id, name, letters;

        for(i = 0; i < this.owned.length; i++) {
            id = this.owned[i].match(/\d+/)[0];
            name = this.globeOoblets[id].name.toLowerCase();
            letters = this.owned[i].match(/\d+(.*)/)[1].replace('x', 'abc').replace('y', 'def').replace('z', 'ghi').split('');

            for(j = 0; j < letters.length; j++) {
                // upgrades progress bar
                this.updateProgress(letters[j], 1);
                // marks all owned globes
                $('.gg-tracker-' + name + ' [data-tracker-letter="' + letters[j] + '"]').addClass('gg-tracker-owned');
            }
        }

    }

    updateProgress(letter, num) {
        switch(letter) {
            case 'a':
            case 'b':
            case 'c':
                this.progressCommon += num;
                break;
            case 'd':
            case 'e':
            case 'f':
                this.progressUncommon += num;
                break;
            case 'g':
            case 'h':
            case 'i':
                this.progressGleamy += num;
                break;
        }
        this.updateProgressBars();
    }

    updateProgressBars() {
        const max = this.globeOoblets.length * 3;
        const cPercent = this.progressCommon / max * 100;
        const uPercent = this.progressUncommon / max * 100;
        const gPercent = this.progressGleamy / max * 100;

        $('.common-count').text(this.progressCommon + ' / ' + max);
        $('.uncommon-count').text(this.progressUncommon + ' / ' + max);
        $('.gleamy-count').text(this.progressGleamy + ' / ' + max);

        $('.progress1-bar-common div').width(cPercent + '%');
        $('.progress1-bar-uncommon div').width(uPercent + '%');
        $('.progress1-bar-gleamy div').width(gPercent + '%');
    }

    toolTipEnabler() {
        let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
        let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
            return new bootstrap.Tooltip(tooltipTriggerEl)
        })
    }

}

const a = new Main();
