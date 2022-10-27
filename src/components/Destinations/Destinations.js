import React from 'react';
import img1 from '../../resources/images/Rectangle 14.png';
import img2 from '../../resources/images/Rectangle 14 (1).png';
import img3 from '../../resources/images/Rectangle 14 (2).png';

const Destinations = () => {
    return (
        <div className='destinations'>
            <p>Top Selling</p>
            <h2>Top Destinations</h2>
            <div className='cardDestinations'>
                <div className='singleCard'>
                    <img src={img1} alt="" />
                    <div>
                        <h2>Rome, Italty</h2>
                        <h2>$5,42k</h2>
                    </div>
                    <p><i class="fa-solid fa-location-arrow"></i><span>10 Days Trip</span></p>
                </div>
                <div className='singleCard'>
                    <img src={img2} alt="" />
                    <div>
                        <h2>London, UK</h2>
                        <h2>$4.2k</h2>
                    </div>
                    <p><i class="fa-solid fa-location-arrow"></i> <span>12 Days Trip</span></p>
                </div>
                <div className='singleCard'>
                    <img src={img3} alt="" />
                    <div>
                        <h2>Full Europe</h2>
                        <h2>$15k</h2>
                    </div>
                    <p><i class="fa-solid fa-location-arrow"></i> <span>28 Days Trip</span></p>
                </div>
            </div>
        </div>
    );
};

export default Destinations;