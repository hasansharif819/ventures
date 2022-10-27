import React from 'react';
import card1 from '../../resources/images/card1.png';
import card2 from '../../resources/images/card2.png';
import card3 from '../../resources/images/card3.png';
import card4 from '../../resources/images/card4.png';
// import vector from '../../resources/images/Vector.png';
// import img25 from '../../resources/images/image 25.png';

const Category = () => {
    return (
        <div className='category'>
            <div>
            <p>CATEGORY</p>
            <h2>We Offer Best</h2>
            </div>
            <div className='cardDiv'>
                <div className="card">
                    <img src={card1} alt="" />
                    <h2>Calculated Weather</h2>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className="card2">
                    <img src={card2} alt="" />
                    <h2>Best Flights</h2>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div className="card">
                    <img src={card3} alt="" />
                    <h2>Local Events</h2>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
                <div className="card">
                    <img src={card4} alt="" />
                    <h2>Customization</h2>
                    <p>We deliver outsourced aviation services for military customers</p>
                </div>
                
            </div>
        </div>
    );
};

export default Category;