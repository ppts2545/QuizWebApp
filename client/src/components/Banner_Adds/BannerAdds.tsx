import React, { useState } from 'react';
import "./BannerAdds.css";

type BannerAddsProps = {
    title: string;
    text: string;
    buttonText: string;
    className?: string;
};

const BannerAdds: React.FC<BannerAddsProps> = ({ title, text, buttonText, className}) => {
    return(
            <div className='ba'>
                <div className={`banner ${className}`}>
                    <div className="banner-image">
                        <div className="banner-text">
                            <h1>{title}</h1>
                            <p>{text}</p>
                            <button>{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
    );
};


export default BannerAdds;