import Cakes from './Cakes'
import {useEffect, useState} from "react";

function Menu(props) {
    const [filter, setFilter] = useState("*")
    const [cakes, setCakes] = useState(props.cakes)

    useEffect(() => {
        setCakes(props.cakes.filter((cake) => cake.type.includes(filter)))
    }, [filter])

    return (
        <section id="menu" className="menu section-bg">
            <div className="container" data-aos="fade-up">

                <div className="section-title">
                    <h2>{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>

                <div className="row" data-aos="fade-up" data-aos-delay="100">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <ul id="menu-flters">
                            <li onClick={() => {setFilter("*")}}>Mind</li>
                            {props.cakeTypes.map(
                                (listItem) => {
                                    return (
                                        <li onClick={() => {setFilter(listItem.filter)}}>
                                            {listItem.title}
                                        </li>
                                    );
                                }
                            )}
                        </ul>
                    </div>
                </div>

                <Cakes cakes={cakes}/>

            </div>
        </section>

    );
}

export default Menu;