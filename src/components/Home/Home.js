import React from 'react';
import DisplayImageAd from '../DisplayImageAd/DisplayImageAd';
import Products from '../Products/Products';

const Home = (props) => {
    const {searchText} = props;
    return (
        <div className="pb-3">
            <DisplayImageAd></DisplayImageAd>
            <Products searchText={searchText}></Products>
        </div>
    );
};

export default Home;