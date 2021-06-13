import Gallery from './Gallery';
import Chef from './Chef';
import Contact from './Contact';
import Testimonial from './Testimonial';
import OrderACake from './OrderACake';
import About from './About';
import WhyUs from './WhyUs';
import Menu from './Menu';
import Specials from './Specials';
import Events from './Events';
import {about} from "../contents";

function Main() {

    return (
        <>
            <About title={about.title} intro={about.intro} list={about.list} etc={about.etc}/>
            <WhyUs/>
            <Menu/>
            <Specials/>
            <Events/>
            <OrderACake/>
            <Testimonial/>
            <Gallery/>
            <Chef/>
            <Contact/>
        </>
    );
}

export default Main;