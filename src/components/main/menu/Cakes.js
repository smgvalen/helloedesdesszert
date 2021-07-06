import Cake from "./Cake";

function Cakes(props) {

    return (
        <div className="row menu-container" data-aos="fade-up" data-aos-delay="200">

            {props.cakes.map(
                (cake, index) => {
                    return (
                        <Cake key={index}
                            src={cake.src}
                            alt={cake.alt}
                            name={cake.name}
                            price={cake.price}
                            description={cake.description}
                        />
                    )
                }
            )}

            {/*<div className="col-lg-6 menu-item filter-starters">*/}
            {/*    <img src="assets/img/menu/cake.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Crab Cake</a><span>$7.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        A delicate crab cake served on a toasted roll with lettuce and tartar sauce*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-salads">*/}
            {/*    <img src="assets/img/menu/caesar.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Caesar Selections</a><span>$8.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Lorem, deren, trataro, filede, nerada*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-specialty">*/}
            {/*    <img src="assets/img/menu/tuscan-grilled.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Tuscan Grilled</a><span>$9.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Grilled chicken with provolone, artichoke hearts, and roasted red pesto*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-starters">*/}
            {/*    <img src="assets/img/menu/mozzarella.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Mozzarella Stick</a><span>$4.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Lorem, deren, trataro, filede, nerada*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-salads">*/}
            {/*    <img src="assets/img/menu/greek-salad.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Greek Salad</a><span>$9.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Fresh spinach, crisp romaine, tomatoes, and Greek olives*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-salads">*/}
            {/*    <img src="assets/img/menu/spinach-salad.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Spinach Salad</a><span>$9.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Fresh spinach with mushrooms, hard boiled egg, and warm bacon vinaigrette*/}
            {/*    </div>*/}
            {/*</div>*/}

            {/*<div className="col-lg-6 menu-item filter-specialty">*/}
            {/*    <img src="assets/img/menu/lobster-roll.jpg" className="menu-img" alt=""></img>*/}
            {/*    <div className="menu-content">*/}
            {/*        <a href="#">Lobster Roll</a><span>$12.95</span>*/}
            {/*    </div>*/}
            {/*    <div className="menu-ingredients">*/}
            {/*        Plump lobster meat, mayo and crisp lettuce on a toasted bulky roll*/}
            {/*    </div>*/}
            {/*</div>*/}

        </div>
    );

}

export default Cakes;