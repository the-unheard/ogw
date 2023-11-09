class HeaderMain {

    constructor() {
        this.init();
    }

    init() {
        this.setActiveNav();
    }

    setActiveNav() {

        let path = window.location.pathname;

        if(path === '/' || path === '/index') {
            path = 'index';
        }

        if(path.includes('clothings')) {
            $('#clothingDropdown').addClass('active');
        }
        else if(path.includes('glimmyglobe')) {
            $('#glimmyglobesDropdown').addClass('active');
        }

        path = path.replace(/\//g, '').replace('clothings', '');

        $('.nav-item-' + path + ' a').addClass('active');

    }

}

const headerA = new HeaderMain();