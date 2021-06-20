function Hero(props) {

    return (
        <section id="hero" className="d-flex align-items-center">
            <div className="container position-relative text-center text-lg-start" data-aos="zoom-in"
                 data-aos-delay="100">
                <div className="row">
                    <div className="col-lg-8">
                        <h1>{props.greeting}<span>{props.title}</span></h1>
                        <h2>{props.subtitle}</h2>

                        <div className="btns">
                            <a href={props.buttonMenu.href}
                               className="btn-menu animated fadeInUp scrollto">
                                {props.buttonMenu.title}
                            </a>
                            <a href={props.buttonOrder.href}
                               className="btn-book animated fadeInUp scrollto">
                                {props.buttonOrder.title}
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 d-flex align-items-center justify-content-center position-relative"
                         data-aos="zoom-in" data-aos-delay="200">
                        <a href={props.introVideo} className="glightbox play-btn"/>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Hero;