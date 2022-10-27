import React from 'react';
import pic1 from '../../resources/images/Traveller 1.png';

const Home = () => {
    return (
        <div className='homePage'>
            <div>
            <h2 className='primaryColor'>Best Destinations around the world</h2>
            <h1 className='color1'>Travel, enjoy and live a <br/> new</h1>
            <p id='firstParagraph'>Built Wicket longer admire do barton vanity itself do in it.</p>
            <p>Preferred to sportsmen it engrossed listening. Park gate</p>
            <p>sell they west hard for the.</p>
            <span className='playDemo'>
                <button id='findOut'>Find out</button>
                <p id='playDemo'> <span><i className="fa-solid fa-circle-play"></i></span> Play Demo</p>
            </span>
        </div>
        <div className='homepageImage'>
            <img src={pic1} height={620} width={600} alt="" />
        </div>
        </div>
    );
};

export default Home;