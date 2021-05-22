import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div className="foot-cont">
            <h3>
                Follow me on my social handles
            </h3>
            <div>
                <a className="foot-icons" href="https://github.com/vighnesh777" target="_blank" rel="noreferrer"><i class="fa fa-github"></i></a>

                <a className="foot-icons" href="https://www.linkedin.com/in/vighnesh-kanakala-4ab816190/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a>

                <a className="foot-icons" href="https://www.facebook.com/bunty.vighnesh.7/" target="_blank" rel="noreferrer"><i class="fa fa-facebook"></i></a>
            </div>

        </div >

    );
}

export default Footer;