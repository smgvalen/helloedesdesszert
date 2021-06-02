import Gallery from './gallery';
import Chef from './chef';
import Contact from './contact';
import Testimonial from './testimonial';
import Bookatable from './bookatable';
import About from './about';
import WhyUs from './whyus';
import Menu from './menu';

function Main() {

    return (
        <main id="main">
            <About/>
            <WhyUs/>
            <Menu/>
            <Bookatable/>
            <Testimonial/>
            <Gallery/>
            <Chef/>
            <Contact/>
        </main>
    );
}

export default Main;