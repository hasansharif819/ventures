import React from 'react';
import icon1 from '../../resources/images/icon1.png';
import icon2 from '../../resources/images/icon2.png';
import icon3 from '../../resources/images/icon3.png';
import icon4 from '../../resources/images/icon4.png';


const NextTrip = () => {
    return (
        <div className='nextTrip'>
            <div className='nextTripText'>
            <p>Easy and Fast</p>
            <h2>Book your next trip <br /> in 3 easy steps</h2>
            <div>
                <img src={icon1} alt="" height={50} width={50}/>
                <div>
                    <h5>Choose</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div>
                <img src={icon2} alt="" height={50} width={50}/>
                <div>
                    <h5>Make Payment</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            <div>
                <img src={icon3} alt="" height={50} width={50}/>
                <div>
                    <h5>Reach Airport on Selected Date</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus. </p>
                </div>
            </div>
            </div>
            <div>
                <img src={icon4} alt="" />
            </div>
        </div>
    );
};

export default NextTrip;