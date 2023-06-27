import React  from 'react';
import cake from './cake.png';
import delivery from './delivery.png'
const Aside3 = () => {
    return (
        <aside className="bruchetta">
            <div>
                <img src={cake} alt="cake"/>
                <h2>Lemon Dessert</h2>
                <h3>12.99$</h3>
            </div>
            <div>
                <p>This comes straight from
                    grandma’s recipe book, every
                    last ingredient has been
                    sourced and is as authentic
                    as can be imagined.
                </p>
            </div>
            <div>
                <button>Order a delivery</button>
                <img src={delivery} alt="delivery"/>
            </div>
        </aside>
    );
};

export default Aside3;