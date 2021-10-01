import React from 'react';

const DisplayImageAd = () => {
    return (
        <div className="grid grid-cols-12 gap-3 py-4 w-full">
            <div className="col-span-7">
                <img className="mb-4" src="https://st4.depositphotos.com/1558912/21709/i/1600/depositphotos_217091392-stock-photo-green-food-assortment-on-light.jpg" alt="" />
                <img src="https://www.shamrockfoodservice.com/wp-content/uploads/2020/08/CM_Kitchentelligence-Live-Image-1400x780_0820.jpg" alt="" />
            </div>

            <div className="col-span-5 mb-3">
                <img src="https://image.shutterstock.com/image-photo/green-food-delicious-soup-smoothie-600w-607253459.jpg" alt="" />
                <img src="https://image.shutterstock.com/image-photo/assortment-aromatic-organic-spices-herbs-600w-1892433058.jpg" alt="" />
                <img src="https://c4.wallpaperflare.com/wallpaper/130/534/465/macro-fruit-limes-wallpaper-preview.jpg" alt="" />
                
            </div>
           
        </div>
    );
};

export default DisplayImageAd;