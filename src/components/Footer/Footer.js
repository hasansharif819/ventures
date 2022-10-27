import React from 'react';
import playS from '../../resources/images/playstore.png';

const Footer = () => {
    return (
        <div>
        <div className='footer'>
            <div className='FooterJadoo'>
                <h2>Jadoo.</h2>
                <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className='FooterCompany'>
                <h2>Company</h2>
                <p>About</p>
                <p>Careers</p>
                <p>Mobile</p>
            </div>
            <div className='FooterContact'>
                <h2>Contact</h2>
                <p>Help / Faq</p>
                <p>Press</p>
                <p>Affiliates</p>
            </div>
            <div className='FooterMore'>
                <h2>More</h2>
                <p>Airlinefess</p>
                <p>Airline</p>
                <p>Low fare tips</p>
            </div>
            <div className='FooterIcon'>
                <span>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-twitter"></i>
                </span>
                <h2>Discover our app</h2>
                <img src={playS} alt="" width={200} height={50}/>
            </div>
        </div>
        <p>All rights reserved @jadoo.co</p>
        </div>
    );
};

export default Footer;