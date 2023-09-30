import React from "react";
import "./Home.css";

import Util from "./../../view/Util/Util.json";
function Home() {
    return (
        <>
         <h1 className="center">Sweet Shop</h1>
 
            {
                Util.map((serviceData, index) => {
                    const { title, description, price } = serviceData
                    return (
                       
                        <div key={index} className="text">
                           
                                <h1>{title}😋</h1>
                                <h2>{description}😍</h2>
                                <h3>Price:{price}💸</h3>


                        </div>
                    )
                })
            } 
        </>
    )
}
export default Home
