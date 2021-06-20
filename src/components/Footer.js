function Footer(props) {

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>{props.h3}</h3>
                                <p>
                                    {props.street} <br/>
                                    {props.city}<br/><br/>
                                    <strong>{props.phone.title}</strong>{props.phone.number}<br/>
                                    <strong>{props.email.title}</strong> {props.email.address}<br/>
                                </p>
                                <div className="social-links mt-3">
                                    <a href={props.social.facebook} target="_blank" className="facebook"><i
                                        className="bx bxl-facebook"/></a>
                                    <a href={props.social.instagram} target="_blank" className="instagram"><i
                                        className="bx bxl-instagram"/></a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>{props.h4[0]}</h4>
                            <ul>
                                {props.links.map(
                                    (link) => {
                                        return (
                                            <li>
                                                <i className="bx bx-chevron-right"/>
                                                <a href={link.href}> {link.title}</a>
                                            </li>
                                        )
                                    }
                                )}
                            </ul>
                        </div>

                        <div className="col-lg-4 col-md-6 footer-links">
                            <h4>{props.h4[1]}</h4>
                            <ul>
                                {props.services.map(
                                    (service) => {
                                        return (
                                            <li>
                                                <i className="bx bx-chevron-right"/>
                                                <a href={service.href}>{service.title}</a>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>

                        {/*<div className="col-lg-4 col-md-6 footer-newsletter">*/}
                        {/*    <h4>{props.h4[2]}</h4>*/}
                        {/*    <p>Ez totál törölni való</p>*/}
                        {/*    <form action="" method="post">*/}
                        {/*        <input type="email" name="email"/>*/}
                        {/*        <input type="submit" value="Subscribe"/>*/}
                        {/*    </form>*/}

                        {/*</div>*/}

                    </div>
                </div>
            </div>

            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>{props.credits.title}</span></strong>. All Rights Reserved
                </div>
                <div className="credits">

                    Designed by <a href={props.credits.href}>{props.credits.ir}</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;