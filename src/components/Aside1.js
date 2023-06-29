import React  from 'react';
import salad from './salad.png';
import delivery from './delivery.png'
const Aside1 = () => {
    return (
        <aside className="salad">
            <div>
                <img src={salad} alt="salad" width={300}/>
                <h2>Greek Salad</h2>
                <h3>12.99$</h3>
            </div>
            <div>
                <p>The famous greek salad of
                crispy lettuce, peppers, olives
                and our Chicago style feta cheese,
                garnished with crunchy garlic and
                rosemary croutons.
                Order a delivery</p>
            </div>
            <div>
                <button>Order a delivery</button>
                <img src={delivery} alt="delivery"/>
            </div>
        </aside>
    );
};

export default Aside1;