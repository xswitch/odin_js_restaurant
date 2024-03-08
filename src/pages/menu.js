import El from "../modules/CreateEl";

function createMenu() {
    console.log('Creating Menu')

    const containers = {
        mainContainer: new El('div', {
            classes: 'mainContainer menuContainer',
            parent: '#content'
        }),
        menuContainer: new El('div', {
            classes: 'menu',
            parent: '.menuContainer'
        }),
        menuWrapper: new El('div', {
            classes: 'menuWrapper',
            parent: '.menu'
        }),
        entreesSection: new El('div', {
            classes: 'menuSection entreesSection',
            parent: '.menuWrapper'
        }),
        sidesSection: new El('div', {
            classes: 'menuSection sidesSection',
            parent: '.menuWrapper'
        }),
        dessertSection: new El('div', {
            classes: 'menuSection dessertSection',
            parent: '.menuWrapper'
        }),
        wineSection: new El('div', {
            classes: 'menuSection wineSection',
            parent: '.menuWrapper'
        })

    }

    const menuTitles = {
        entreesTitle: new El('h3', {
            classes: 'menuTitle',
            parent: containers.entreesSection.element,
            text: 'MAIN ENTREES',
        }),
        sidesTitle: new El('h3', {
            classes: 'menuTitle',
            parent: containers.sidesSection.element,
            text: 'SIDES'
        }),
        dessertTitle: new El('h3', {
            classes: 'menuTitle',
            parent: containers.dessertSection.element,
            text: 'DESSERTS',
        }),
        wineTitle: new El('h3', {
            classes: 'menuTitle',
            parent: containers.wineSection.element,
            text: 'WINES'
        })
    }


}

export default createMenu;