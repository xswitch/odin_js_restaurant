import El from "../modules/CreateEl";

function createMenu() {
    console.log('Creating Menu')

    const containers = {
        mainContainer: new El('div', {
            classes: 'mainContainer menuContainer',
            parent: '#content'
        })
    }
}

export default createMenu;