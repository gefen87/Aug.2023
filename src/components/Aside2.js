import React  from 'react';
import bruchetta from './bruchetta.png';
import delivery from './delivery.png'
const Aside2 = () => {
    return (
        <aside className="bruchetta">
            <div>
                <img src={bruchetta} alt="bruchetta"/>
                <h2>Bruchetta</h2>
                <h3>5.99$</h3>
            </div>
            <div>
                <p>Our Bruschetta is made from
                    grilled bread that has been
                    smeared with garlic and
                    seasoned with salt and olive 
                    oil.
                </p>
            </div>
            <div>
                <button>Order a delivery</button>
                <img src={delivery} alt="delivery"/>
            </div>
        </aside>
    );
};

export default Aside2;