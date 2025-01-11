import React from 'react';
import "./featuredProperty.css"
const FeaturedProperty = () => {
    return (
        <div className='fp'>
            <div className="fpItem">
                <img src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1" alt="" className="fpImg" />
                <span className="fpName">Aparthotel Stare Miaso</span>
                <span className="fpCity">Madrid</span>
                <span className="fpPrice">Starting from $120</span>
                <div className="fpRating">
                    <button>8.7</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                src='https://media.istockphoto.com/id/104731717/photo/luxury-resort.jpg?s=612x612&w=0&k=20&c=cODMSPbYyrn1FHake1xYz9M8r15iOfGz9Aosy9Db7mI=' alt=""
                    className="fpImg"
                />
                <span className="fpName">Comfort Suites Airport</span>
                <span className="fpCity">Austin</span>
                <span className="fpPrice">Starting from $140</span>
                <div className="fpRating">
                    <button>9.3</button>
                    <span>Exceptional</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                src='https://media.istockphoto.com/id/119926339/photo/resort-swimming-pool.jpg?s=612x612&w=0&k=20&c=9QtwJC2boq3GFHaeDsKytF4-CavYKQuy1jBD2IRfYKc='
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Four Seasons Hotel</span>
                <span className="fpCity">Lisbon</span>
                <span className="fpPrice">Starting from $99</span>
                <div className="fpRating">
                    <button>8.8</button>
                    <span>Excellent</span>
                </div>
            </div>
            <div className="fpItem">
                <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe91lmkQ2L86B_0m3dPKjzK3lt13pD_BHxwg&s'
                    alt=""
                    className="fpImg"
                />
                <span className="fpName">Hilton Garden Inn</span>
                <span className="fpCity">Berlin</span>
                <span className="fpPrice">Starting from $105</span>
                <div className="fpRating">
                    <button>8.9</button>
                    <span>Excellent</span>
                </div>
            </div>
        </div>
    );
};

export default FeaturedProperty;