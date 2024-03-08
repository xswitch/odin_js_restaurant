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

    function newMenuItem(title, price, description = false, bottlePrice = false) {
        return {
            title,
            price,
            description,
            bottlePrice,
        }
    }

    const menuItems = {
        entrees: [
            newMenuItem('Beef Tenderloin', 26, 'Roasted with a spicy chili infusion, served medium rare and topped with chimichurri salsa'),
            newMenuItem('Delmonico', 28, 'Hand-cut 20 oz bone-in sirloin steak topped with pink peppercorn, cognac and leek reduction'),
            newMenuItem('Prime Rib', 28, 'Aged 8 oz prime rib slow roasted in rock salt and served with au jus and fresh grated horseradish'),
            newMenuItem('New Orleans Bouillabaisse', 16, 'Petite prawns, Andouille sausage, mirepoix and Cajun cream sauce served over red rice'),
            newMenuItem('Oregon Trout', 19, 'Sautéed fresh boneless trout with tarragon butter sauce, parsley and caramelized shallots'),
            newMenuItem('Squash Ravioli', 10, 'Ambercup squash, shallot brown butter and green apple chutney'),
            newMenuItem('Coho Salmon', 23, 'Over-roasted line-caught salmon with chervil and kumquat pesto'),
            newMenuItem('Veal Scallopini', 29, 'Thinly-pounded grilled veal chop stuffed with yellow peppers. San Marzano tomatoes and ricotta salad'),
            newMenuItem('Duck', 26, 'Oven-roasted organic duck boneless breast topped with Champagne vinaigrette, pancetta and pickled red onions'),
            newMenuItem("Grandma's Roast Beef", 27, 'Our farmhouse special'),
        ],
    
        
        sides: [
            newMenuItem('Petite Feta Quiche', 9),
            newMenuItem('Mashed Potatoes', 6),
            newMenuItem('Gnocchi & Cheese', 11),
            newMenuItem('Steamed Vegetables', 3),
            newMenuItem('Sautéed Mushrooms', 3),
            newMenuItem('Creamed Spinach', 3),
        ],
    
        dessert: [
            newMenuItem('House-Made Ice Cream of the Month', 9),
            newMenuItem('House-Made Sorbet of the Month', 7),
            newMenuItem('Walnut Sponge Cake with Fresh Cream', 11),
        ],
    
        wine: [
            newMenuItem('Colterenzio Pinot Grigio', 8, 'Italy 2018', 28),
            newMenuItem('Mudhouse Sauvignon Blanc', 8, 'New Zealand 2018', 29),
            newMenuItem('Graham Beck Chenin Blanc', 7, 'South Africa 2009', 27),
            newMenuItem('Charles & Charles Syrah Rose', 6, 'Columbia Valley 2016', 20),
        ],
    }

    function createMenuItem(item, parent, extraClass = false) {

        const menuItemContainer = new El('div', {
            classes: `menuItem${(extraClass != false) ? (' ' + extraClass) : ''}`,
            parent,
        }).element

        const menuItem = {
            title: new El('h4', {
                classes: 'menuItemTitle',
                parent: menuItemContainer,
                text: item.title
            }),
            price: new El('h4', {
                classes: 'menuItemPrice',
                parent: menuItemContainer,
                text: item.price,
            }),
        }
        if (item.bottlePrice != false) {
            menuItem.bottlePrice = new El('h4', {
                classes: 'menuItemBottlePrice',
                parent: menuItemContainer,
                text: item.bottlePrice,
            })
        }

        if (item.description != false) {
            menuItem.description = new El('p', {
                classes: 'menuItemDescription',
                parent: menuItemContainer,
                text: item.description,
            })
        }
    }

    function createAllItems(menuObj) {
        for (const section in menuObj) {
            menuObj[section].forEach(item => {
                createMenuItem(item, containers[section + 'Section'].element, section)
            })
        }
    }

    createAllItems(menuItems)
}

export default createMenu;