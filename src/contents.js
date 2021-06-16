export const about = {
    title: "Hello Édes Desszertműhely",
    intro: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut\n" +
        "labore et dolore\n" +
        "magna aliqua.",
    list: ["tojás", "cukor", "só"],
    etc: "Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in\n" +
        "reprehenderit in voluptate\n" +
        "velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n" +
        "proident, sunt in\n" +
        "culpa qui officia deserunt mollit anim id est laborum",
    image:
        {
            src: "assets/img/about.jpg",
            alt: "cake torta hellóédes süti"
        }
}

export const menu = {
    title: "Menü",
    subtitle: "Aktuális kínálat",
    cakeTypes: [
        {
            title: "Torták",
            filter: "parkettás"
        },
        {
            title: "Aprósütemények",
            filter: "asztali"
        },
        {
            title: "Péksütemények",
            filter: "elfogadható"
        }
    ],
    cakes: [
        {
            src: "assets/img/menu/bread-barrel.jpg",
            alt: "",
            name: "Bread Barrel",
            price: "$6.95",
            description: " Lorem, deren, trataro, filede, nerada",
            type: ["parkettás", "*"]
        },
        {
            src: "assets/img/menu/bread-barrel.jpg",
            alt: "",
            name: "Bread Barrel",
            price: "$6.95",
            description: " Lorem, deren, trataro, filede, nerada",
            type: ["asztali", "*"]
        },
        {
            src: "assets/img/menu/bread-barrel.jpg",
            alt: "",
            name: "Bread Barrel",
            price: "$6.95",
            description: " Lorem, deren, trataro, filede, nerada",
            type: ["elfogadható", "*"]
        },
        {
            src: "assets/img/menu/bread-barrel.jpg",
            alt: "",
            name: "Bread Barrel",
            price: "$6.95",
            description: " Lorem, deren, trataro, filede, nerada",
            type: ["elfogadható", "asztali", "*"]
        }
    ]
}

export const header = {
    h1:
        {
            title: "Helló Édes Desszertműhely",
            // href: "index.html",
            href: "#hero"
        },
    logo:
        {
            src: "assets/img/logo.png",
            alt: "Helló Édes Desszertműhely"
        },
    links: [
        {
            title: "Rólunk",
            url: "#about"
        },
        {
            title: "Miket alkotunk",
            url: "#menu"
        },
        {
            title: "Specialitásunk",
            url: "#specials"
        },
        {
            title: "Itt találsz meg",
            url: "#contact"
        }
    ],
    order: {
        title: "Rendelés",
        href: "#order-a-cake"
    }
}

