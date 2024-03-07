import El from "../modules/CreateEl";

function createAbout() {
    console.log('Creating About')

    const containers = {
        mainContainer: new El('div', {
            classes: 'mainContainer aboutContainer',
            parent: '#content'
        })
    }
}

export default createAbout;