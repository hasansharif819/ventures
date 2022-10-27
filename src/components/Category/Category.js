import React from 'react';
import vector from '../../resources/images/Vector.png';
import img25 from '../../resources/images/image 25.png';

const Category = () => {
    return (
        <div className='category'>
            <div>
            <p>CATEGORY</p>
            <h2>We Offer Best</h2>
            </div>
            <div className='cardDiv'>
                <div className="card">
                    <img src={vector} alt="" />
                    <h2>Calculated Weather</h2>
                    <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                </div>
                <div className="card2">
                    <img src="" alt="" />
                    <h2>Best Flights</h2>
                    <p>Engrossed listening. Park gate sell they west hard for the.</p>
                </div>
                <div className="card">
                    <img src={img25} alt="" />
                    <h2>Local Events</h2>
                    <p>Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
                </div>
                <div className="card">
                    <img src="" alt="" />
                    <h2>Customization</h2>
                    <p>We deliver outsourced aviation services for military customers</p>
                </div>
                
            </div>
        </div>
    );
};

export default Category;