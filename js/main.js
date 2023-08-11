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

        path = path.replace(/\\/, '').replace('clothings', '');

        $('.nav-item-' + path).addClass('active');

    }

}

const headerA = new HeaderMain();