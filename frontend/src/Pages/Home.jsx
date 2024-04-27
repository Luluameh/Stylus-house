import React from 'react'
import BannerHome from '../component/HomeBanners/BannerHome'
import ShopNow from '../component/Now/ShopNow';
import NewArrival from '../component/Now/NewArrival';
import HomeEnding from '../component/Now/HomeEnding';


const Home = () => {
  return (
    <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8 ">
        <BannerHome />
        <div>
        <ShopNow />
        
        <NewArrival />
        <HomeEnding/>
        </div>
    </div>
  );
}

export default Home