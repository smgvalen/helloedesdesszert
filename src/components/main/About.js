function About(props) {

    return (

        <section id="about" className="about">
            <div className="container" data-aos="fade-up">

                <div className="row">
                    <div className="col-lg-6 order-1 order-lg-2" data-aos="zoom-in" data-aos-delay="100">
                        <div className="about-img">
                            <img src={props.image} alt={props.image}></img>
                        </div>
                    </div>
                    <div className="col-lg-6 pt-4 pt-lg-0 order-2 order-lg-1 content">
                        <h3>{props.title}</h3>
                        <p className="fst-italic">
                            {props.intro}
                        </p>
                        <ul>
                            {props.list.map(
                                (listItem) => {
                                    return (
                                        <li>{listItem}</li>
                                    );
                                }
                            )}
                        </ul>
                        <p>
                            {props.etc}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default About;