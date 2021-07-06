function Footer(props) {

    return (
        <footer id="footer">
            <div className="footer-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="footer-info">
                                <h3>{props.h3}</h3>
                                {/*<p>*/}
                                {/*    {props.street} <br/>*/}
                                {/*    {props.city}<br/><br/>*/}
                                {/*    <strong>{props.phone.title}</strong>{props.phone.number}<br/>*/}
                                {/*    <strong>{props.email.title}</strong> {props.email.address}<br/>*/}
                                {/*</p>*/}
                                <div className="social-links mt-3">
                                    <a href={props.social.facebook} target="_blank" className="facebook"><i
                                        className="bx bxl-facebook"/></a>
                                    <a href={props.social.instagram} target="_blank" className="instagram"><i
                                        className="bx bxl-instagram"/></a>
                                </div>
                            </div>
                        </div>
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