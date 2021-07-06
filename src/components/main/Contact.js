function Contact(props) {

    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>

            <div data-aos="fade-up">
                <iframe style={{border: "0", width: "100%", height: "350px"}}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2732.6266080541013!2d17.236563515847404!3d46.77225597913817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47691dfdd8230efb%3A0x1246f47039e35c05!2sHello%20%C3%89des%20Desszertm%C5%B1hely!5e0!3m2!1shu!2shu!4v1623864395525!5m2!1shu!2shu"
                        frameborder="0" allowfullscreen/>
            </div>

            <div className="container" data-aos="fade-up">

                <div className="row mt-5">

                    <div className="col-lg-4">
                        <div className="info">
                            <div className="address">
                                <i className="bi bi-geo-alt"/>
                                <h4>{props.address.title}</h4>
                                <p>{props.address.location}</p>
                            </div>

                            <div className="open-hours">
                                <i className="bi bi-clock"/>
                                <h4>{props.open.title}</h4>
                                <p>
                                    {props.open.open_days}<br/>
                                    {props.open.hours}
                                </p>
                                <p>
                                    {props.open.closed_days}<br/>
                                    {props.open.closed}
                                </p>
                            </div>

                            <div className="email">
                                <i className="bi bi-envelope"/>
                                <h4>{props.email.title}</h4>
                                <p>{props.email.email}</p>
                            </div>

                            <div className="phone">
                                <i className="bi bi-phone"/>
                                <h4>{props.phone.title}</h4>
                                <p>{props.phone.number}</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 mt-5 mt-lg-0">

                        <form action="forms/contact.php" method="post" role="form" className="php-email-form">
                            <div className="row">
                                <div className="col-md-6 form-group">
                                    <input type="text" name="name" className="form-control" id="name"
                                           placeholder="Neved" required/>
                                </div>
                                <div className="col-md-6 form-group mt-3 mt-md-0">
                                    <input type="email" className="form-control" name="email" id="email"
                                           placeholder="Email címed" required/>
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <input type="text" className="form-control" name="subject" id="subject"
                                       placeholder="Téma" required/>
                            </div>
                            <div className="form-group mt-3">
                                <textarea className="form-control" name="message" rows="8" placeholder="Üzenet"
                                          required/>
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message"/>
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            <div className="text-center">
                                <button type="submit">Elküld</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;