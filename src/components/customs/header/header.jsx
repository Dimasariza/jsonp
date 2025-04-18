import { Button } from '@components/ui/button';
import React from 'react';

const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between gap-2">
                <h1>JSONP - Multi tab JSON toolkit</h1>
                <Button variant="outline" color="red">Toogle Dark Mode</Button>
                <Button variant="outline" color="red">Shortcuts</Button>
            </div>
        </header>
    );
}

export default Header;
