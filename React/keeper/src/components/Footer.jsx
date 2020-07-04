import React from "react";

function Footer(){
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    return (
        <div className="footer">
            <p>copyright © {currentYear}</p>
        </div>
    )
}

export default Footer;