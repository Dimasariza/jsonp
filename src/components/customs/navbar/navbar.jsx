import React from 'react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
    return (
        <nav>
            <div className="flex items-center justify-between">
                {
                    ["JSON Formatter", "JSON Compare", "JSON to Code", "Dict ↔ JSON", "Mock Data"].map((item) => (
                        <Button variant="outline" color="red">{item}</Button>
                    ))
                }
            </div>
        </nav>
    );
}

export default Navbar;
