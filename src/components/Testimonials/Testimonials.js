import React from 'react';

const Testimonials = () => {
    return (
        <div className='testimonials'>
            <div>
                <p>TESTIMONIALS</p>
                <h2>What people say about Us.</h2>
                <p> <p></p> <span></span> <span></span></p>
            </div>
            <div className='paragraphTag'>
                <p>“On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”</p>
                <h5>Mike Taylor</h5>
                <small>Lahore, Pakistan</small>
                <div>
                    <h5>Chris Thomas</h5>
                    <p>CEO of Red Button</p>
                </div>
            </div>
            <div className='chevron'>
            <span id='chevronUp'><i class="fa-solid fa-chevron-up"></i></span>
            <span id='chevronDown'><i class="fa-solid fa-chevron-down"></i></span>
            </div>
        </div>
    );
};

export default Testimonials;