import createHome from './pages/home';
import createMenu from './pages/menu';
import createAbout from './pages/about';
import './style.css';

(function controller() {
    const buttons = {
        home: document.querySelector('.btn1'),
        menu: document.querySelector('.btn2'),
        about: document.querySelector('.btn3'),
    }

    // to prevent creating if already on page
    let activePage = 'home';

    // Sets event listeners for all the buttons
    Object.entries(buttons).forEach(([buttonName, buttonElement]) => {
        buttonElement.addEventListener('click', ev => {
            if (activePage == buttonName) return;
            changePage(buttonName)
        })
    })

    // Changes nav buttons class based on active page
    function toggleNavClass() {
        for (const name in buttons) {
            (name != activePage) ? buttons[name].classList.remove('active') : buttons[name].classList.add('active')
        }
    }

    // Changes page based on property name in buttons object
    function changePage(page) {
        activePage = page;
        const contentContainer = document.querySelector('#content')
        if (contentContainer.lastChild) contentContainer.lastChild.remove()
        switch (page) {
            case 'home':
                createHome();
                break;
            case 'menu':
                createMenu();
                break;
            case 'about':
                createAbout();
                break;
            default:
                break;
        }
        toggleNavClass()
    }
    changePage('menu')
})()