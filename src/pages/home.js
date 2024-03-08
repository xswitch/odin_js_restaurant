import El from "../modules/CreateEl";

function createHome() {
    console.log('Creating Home')

    const containers = {
        mainContainer: new El('div', {
            classes: 'mainContainer homeContainer',
            parent: '#content'
        }),
        textContainer: new El('div', {
            classes: 'textContainer home',
            parent: '.homeContainer'
        }),
        buttonContainer: new El('div', {
            classes: 'buttonContainer home',
            parent: '.homeContainer',
        })
    }

    const textContainer = containers.textContainer.element
    const buttonContainer = containers.buttonContainer.element

    const textElements = {
        smallText: new El('div', {
            parent: textContainer,
            classes: 'smallText home',
            text: 'Best dishes & ingredients'
        }),
        mediumText: new El('div', {
            parent: textContainer,
            classes: 'mediumText home',
            text: 'Always Innovating'
        }),
        largeText: new El('div', {
            parent: textContainer,
            classes: 'largeText home',
            text: 'Amazing Experience',
        })
    }

    const buttonElements = {
        bookButton: new El('button', {
            classes: 'homeButton bookButton',
            parent: buttonContainer,
            text: 'RESERVE TABLE'
        }),
    }
}

export default createHome;