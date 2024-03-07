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
            clickNavButton(buttonName, buttonElement)
        })
    })

    // Toggles class change and active page change
    function clickNavButton(buttonName, buttonElement) {
        if (activePage == buttonName) return;
        activePage = buttonName;
        buttonElement.classList.toggle('active')
        for (const name in buttons) {
            if (name != buttonName) buttons[name].classList.remove('active')
        }
        changePage(activePage)
    }

    // Changes page based on property name in buttons object
    function changePage(page) {
        document.querySelector('#content').lastChild.remove()
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
    }

    createHome()
})()