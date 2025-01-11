
import React from 'react';


const Footer = () => {
    return (
        <footer className="bg-white shadow-md text-black py-4">
            <div className="mx-auto text-center">
                <p>&copy; {new Date().getFullYear()} My Shop. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;