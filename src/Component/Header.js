import React from "react";

export default function Header (props) {
    return ( 
        <header className="row block center">
            <nav>
                <a href="#/">
                    <h1>Waka Shop</h1>
                </a>
            </nav>
            <div>
                <a href="#/cart">
                     Cart
                </a>
            </div>
            

        </header>
 
    )
   
}