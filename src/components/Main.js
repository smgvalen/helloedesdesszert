import Gallery from './main/gallery/Gallery';
import Contact from './main/Contact';
import OrderACake from './main/OrderACake';
import About from './main/About';
import Menu from './main/menu/Menu';
import Specials from './main/Specials';
import {about, contact, gallery, menu} from "../contents";

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
            <Gallery
                h2={gallery.h2}
                subtitle={gallery.h2}
                href={gallery.images}
                src={gallery.images}
                alt={gallery.images}
            />
            <Contact
                title={contact.title}
                subtitle={contact.subtitle}
                address={contact.address}
                open={contact.open}
                email={contact.email}
                phone={contact.phone}
            />
        </>
    );
}

export default Main;