import { Button } from '@/components/ui/button';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";
import { buttonVariants } from "@/components/ui/button"; // update path if needed

const Footer = () => {
    return (
        <footer>
            <div className="flex items-center justify-center gap-5">
                <a href="https://github.com/shravan20/jsonp" target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "default" })} !text-white`}>
                    <FaGithub />View on Github
                </a>
                <a href="https://github.com/shravan20/jsonp/blob/main/README.md" target="_blank" rel="noopener noreferrer" className={`${buttonVariants({ variant: "secondary" })} !text-white`}>
                    <FaHandsHelping />Contribute
                </a>
            </div>
            <p align="center"  className='m-2'><img
        src="https://madewithlove.now.sh/in?heart=true&colorA=%23ff671f&colorB=%23046a38&text=India"
        alt="Made with love with Open Source"
      /></p>
        </footer>
    );
}

export default Footer;
