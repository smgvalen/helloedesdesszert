function Gallery(props) {

    return (
        <section id="gallery" className="gallery">

            <div className="container" data-aos="fade-up">
                <div className="section-title">
                    <div className="row g-0">

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">

                                    {/*{props.images.map(*/}
                                    {/*    (image) => {*/}
                                    {/*        return (*/}
                                    {/*            <a href={image.href}*/}
                                    {/*               className="gallery-lightbox"*/}
                                    {/*               data-gall="gallery-item"*/}
                                    {/*            >*/}
                                    {/*                <img src={image.src}*/}
                                    {/*                     alt={image.alt}*/}
                                    {/*                     className="img-fluid"*/}
                                    {/*                />*/}
                                    {/*            </a>*/}
                                    {/*        )*/}
                                    {/*    }*/}
                                    {/*)}*/}

                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-3.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-2.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-3.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-3.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-4.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-4.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-5.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-5.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-6.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-6.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-3.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-7.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="gallery-item">
                                <a href="/assets/img/gallery/gallery-3.jpg" className="gallery-lightbox"
                                   data-gall="gallery-item">
                                    <img src="/assets/img/gallery/gallery-8.jpg" alt="" className="img-fluid"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );

}

export default Gallery;