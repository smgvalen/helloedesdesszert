import Gallery from './gallery';
import Chef from './chef';
import Contact from './contact';
import Testimonial from './testimonial';
import Bookatable from './bookatable';
import About from './about';
import WhyUs from './whyus';
import Menu from './menu';
import Specials from './specials';
import Events from './events';
import {about} from "../contents";

function Main () {


        return (
            <>
                <About title={about.title} list={about.list}/>
                <WhyUs/>
                <Menu/>
                <Specials/>
                <Events/>
                <Bookatable/>
                <Testimonial/>
                <Gallery/>
                <Chef/>
                <Contact/>
            </>
        );

}

export default Main;