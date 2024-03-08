import El from "../modules/CreateEl";

function createAbout() {
    console.log('Creating About')

    const containers = {
        mainContainer: new El('div', {
            classes: 'mainContainer aboutContainer',
            parent: '#content'
        }),
        aboutContainer: new El('div', {
            classes: 'about',
            parent: '.aboutContainer'
        }),
        aboutWrapper: new El('div', {
            classes: 'aboutWrapper',
            parent: '.about',
        }),
    }

    const textElements = {
        title: new El('h1', {
            classes: 'aboutTitle',
            parent: containers.aboutWrapper.element,
            text: 'The Restaurant'
        }),
        textContainer: new El('div', {
            classes: 'textWrapper',
            parent: '.aboutWrapper'
        }),
        background: new El('p', {
            classes: 'aboutBackground',
            parent: '.textWrapper',
            text: `One of America's most beloved restaurants, The Restaurant has welcomed guests to enjoy its contemporary American cuisine, warm hospitality, and unparalleled service in New York City for over two decades.`
        }),
        background2: new El('p', {
            classes: 'aboutBackground',
            parent: '.textWrapper',
            text: `Chef John Doe's ever-evolving seasonal menu showcases the restaurant's relationships with local farms and purveyors.`
        }),
        background3: new El('p', {
            classes: 'aboutBackground',
            parent: '.textWrapper',
            text: 'Opened in 1994 by restaurateur Jane Doe in a historic landmark building just north of Union Square, the restaurant has earned nine James Beard Awards, including "Outstanding Restaurant" and "Outstanding Chef in America.”'
        })
    }
}

export default createAbout;