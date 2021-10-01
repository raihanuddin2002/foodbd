import React from 'react';

const Product = (props) => {
    const {strMeal,strMealThumb,idMeal} = props.data;
    
    const btnStyle ={
        backgroundColor: '#76c539',
    }
    return (
        <div className="border-2 border-green-600 rounded-sm">
            <div>
                <img src={strMealThumb} alt="" />
            </div>

            <div className="mt-2">
                <h2 className="text-2xl text-center font-bold text-green-700 mt-2">{strMeal}</h2>
                <p className="text-center font-bold mb-2">Price: ৳{idMeal}</p>
                <div className="bg-black text-center text-white py-2 text-xl hover:text-gray-300 cursor-pointer" title="Click to see details">Details</div>
                <div style={btnStyle} className="text-center py-2 text-xl text-green-900 hover:text-green-100 cursor-pointer" title="Click to see details"> Add to Cart</div>
            </div>
        </div>
    );
};

export default Product;