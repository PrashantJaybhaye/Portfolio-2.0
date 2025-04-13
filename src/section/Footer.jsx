import React from 'react'
import {socialImgs} from "../constants/index.js";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="flex flex-col justify-center items-center">
                    <a href="/">Visit our website</a>
                </div>

                <div className="socials">
                    {socialImgs.map((img)=>(
                        <a className="icon" target="_blank" href={img.url} key={img.url}>
                            <img src={img.imgPath}/>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col justify-center">
                    <p className="text-center md:text-end">
                        &copy;{new Date().getFullYear()} Prashant. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    )
}
