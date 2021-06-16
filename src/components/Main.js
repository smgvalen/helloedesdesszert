import Gallery from './main/Gallery';
import Contact from './main/Contact';
import OrderACake from './main/OrderACake';
import About from './main/About';
import Menu from './main/menu/Menu';
import Specials from './main/Specials';
import {about, menu} from "../contents";

function Main() {

    return (
        <>
            <About
                title={about.title}
                intro={about.intro}
                list={about.list}
                etc={about.etc}
                image={about.image.src}
                alt={about.image}
            />
            <Menu
                title={menu.title}
                subtitle={menu.subtitle}
                cakeTypes={menu.cakeTypes}
                cakes={menu.cakes}
            />
            <Specials/>
            <OrderACake/>
            <Gallery/>
            <Contact/>
        </>
    );
}

export default Main;