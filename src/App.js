import TopBar from './components/TopBar';
import Header from './components/Header';
import Hero from './components/Hero';
import Main from './components/Main';
import Footer from './components/Footer';
import {hero, footer} from "./contents";


function App() {
    return (
        <>
            <TopBar/>
            <Header/>
            <Hero
                greeting={hero.greeting}
                title={hero.title}
                subtitle={hero.subtitle}
                buttonMenu={hero.buttonMenu}
                buttonOrder={hero.buttonOrder}
                introVideo={hero.introVideo}
            />
            <Main/>
            <Footer
                h3={footer.h3}
                street={footer.street}
                city={footer.city}
                phone={footer.phone}
                email={footer.email}
                social={footer.social}
                h4={footer.h4}
                links={footer.links}
                services={footer.services}
                credits={footer.credits}
            />
        </>
    );
}

export default App;
