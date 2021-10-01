import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';

const Products = (props) => {
    const {searchText} = props;
    const [products, setProducts] = useState([]);
    useEffect(() => {
        let url = (searchText === null || undefined)?`https://www.themealdb.com/api/json/v1/1/search.php?s`: `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;  

        // if(searchText === (null || undefined)){
           
        //     console.log("Undefined")
        // }else{
        //     url =
        //     console.log("Defined!")
        // }
       
        fetch(url)
            .then(res => res.json())
            .then(data => setProducts(data.meals))
            .catch(err => setProducts(err))
    }, [searchText])
    if(products === null){
        return (
            <div>
                <div>
                    <div className="text-6xl text-red-700 text-center py-24"> 
                    <p className="text-black text-4xl"><small>Your search keyword: {searchText}</small></p>
                    <p>No Record Found!!</p>
                    </div>
                </div>
            </div>
        )
    }
    return (
        <div>
           <h2 className="text-4xl text-green-700 mb-4 mt-5">Products</h2>
           <div className="grid grid-cols-3 justify-center items-center gap-4">
               {
                    products.map(product => <Product key={product.idMeal} data={product}></Product>)
               }
            </div>
             
        </div>
    );
};

export default Products;