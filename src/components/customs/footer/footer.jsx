import { Button } from '@/components/ui/button';
import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className="flex items-center justify-between">
                <Button variant="outline" color="red">View on Github</Button>
                <Button variant="outline" color="red">Contribute</Button>
            </div>
        </footer>
    );
}

export default Footer;
