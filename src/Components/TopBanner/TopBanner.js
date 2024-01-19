import React from 'react';
import f1 from '../../Images/feature1.png'
import f2 from '../../Images/feature2.png'
import f3 from '../../Images/feature3.png'
import f4 from '../../Images/feature4.png'

const TopBanner = () => {
    return (
        <div className="container my-2">

            <div className="row">
                <div style={{borderRadius: "40px"}} className="col m-2 bg-white">
                    <img   className="img-fluid p-2 w-50" src={f1} width="" alt="" />
                    <a href="/" className="text-decoration-none fw-bold text-dark">Free Shipping 1</a>
                </div>

                <div style={{borderRadius: "40px"}} className="col m-2 bg-white">
                    <img   className="img-fluid p-2 w-50" src={f2} width="30" alt="" />
                    <a href="/" className="text-decoration-none fw-bold text-dark">Free Shipping 2</a>
                </div>

                <div style={{borderRadius: "40px"}} className="col m-2 bg-white">
                    <img   className="img-fluid p-2 w-50" src={f3} width="30" alt="" />
                    <a href="/" className="text-decoration-none fw-bold text-dark">Free Shipping 3</a>
                </div>

                <div style={{borderRadius: "40px"}} className="col m-2 bg-white">
                    <img   className="img-fluid p-2 w-50" src={f3} width="30" alt="" />
                    <a href="/" className="text-decoration-none fw-bold text-dark">Free Shipping 4</a>
                </div>
            </div>

        </div>
    );
};

export default TopBanner;