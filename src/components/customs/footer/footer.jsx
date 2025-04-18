import { Button } from '@/components/ui/button';
import React from 'react';
import { FaGithub } from "react-icons/fa";
import { FaHandsHelping } from "react-icons/fa";

const Footer = () => {
    return (
        <footer>
            <div className="flex items-center justify-between">
                <Button variant="outline" color="red"><FaHandsHelping />View on Github</Button>
                <Button variant="outline" color="red"><FaGithub />Contribute</Button>
            </div>
        </footer>
    );
}

export default Footer;
