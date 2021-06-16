function Cake(props) {

    return (
        <div className="col-lg-6 menu-item">
            <img src={props.src} className="menu-img" alt={props.alt}/>
            <div className="menu-content">
                <a href="#">{props.name}</a><span>{props.price}</span>
            </div>
            <div className="menu-ingredients">
                {props.description}
            </div>
        </div>
    );
}

export default Cake;