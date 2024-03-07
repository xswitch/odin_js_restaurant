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
        })
    }
}

export default createMenu;