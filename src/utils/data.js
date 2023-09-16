import {retro, laptop, gaming, logo, close, hamburger} from '../assets'

export const news = [
    {
        id: 1,
        title: 'Hydrogen VS Electric Cars',
        content: "Will hydrogen-fueled cars ever catch up to EVs?"
    },
    {
        id: 2,
        title: 'The Downsides of AI Artistry',
        content: "What are the possible adverse effects of on-demand AI image generation?"
    },
    {
        id: 3,
        title: 'Is VC Funding Drying Up?',
        content: "Private funding by VC firms is down 50% YOY. We take a look at what that means."
    }
]

export const spots = [
    {
        id: "01",
        title: "Reviving Retro PCs",
        desc: "What happens when old PCs are given modern upgrades?",
        imgUrl: retro
    },
    {
        id: "02",
        title: "Top 10 Laptops of 2022",
        desc: "Our best picks for various needs and budgets.",
        imgUrl: laptop
    },
    {
        id: "03",
        title: "The Growth of Gaming",
        desc: "How the pandemic has sparked fresh opportunities.",
        imgUrl: gaming
    }
]

export const hero = {
    title: "The Bright Future of Web 3.0?",
    info: `We dive into the next evolution of the web that 
    claims to put the power of the platforms back into 
    the hands of the people. But is it really fulfilling 
    its promise?`,
    bgImage: "bg-hero-mob lg:bg-hero-desk bg-cover bg-no-repeat"
}

export const navItems = {
    logo: logo,
    navLinks: ["Home","New","Popular","Trending","Categories"],
    close: close,
    hamburger
}