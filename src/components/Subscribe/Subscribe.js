import React from 'react';
import ic1 from '../../resources/images/ic1.png';
import ic2 from '../../resources/images/ic2.png';
import ic3 from '../../resources/images/ic3.png';
import ic4 from '../../resources/images/ic4.png';
import ic5 from '../../resources/images/ic5.png';

const Subscribe = () => {
    return (
        <div className='subscribe'>
            <div className='iconImage'>
                <div className='imageIcon'>
                    <img src={ic1} alt="" height={50} width={100}/>
                </div>
                <div className='imageIcon'>
                    <img src={ic2} alt="" height={50} width={100}/>
                </div>
                <div className='imageIcon'>
                    <img src={ic3} alt="" height={50} width={100}/>
                </div>
                <div className='imageIcon'>
                    <img src={ic4} alt="" height={50} width={100}/>
                </div>
                <div className='imageIcon'>
                    <img src={ic5} alt="" height={50} width={100}/>
                </div>
            </div>
            <div className='subscribePage'>
                <div>
                    <h2>Subscribe to get information, latest news and other interesting offers about Cobham</h2>
                    
                    <span>
                    <p> <i class="fa-regular fa-envelope"></i> Your email</p>
                    <button className='buttonClass'>Subscribe</button>
                    </span>
                    
                </div>
            </div>
        </div>
    );
};

export default Subscribe;