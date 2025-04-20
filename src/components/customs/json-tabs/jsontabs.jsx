import { createNewTab } from '@/utils/crereteNewTab';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@components/ui/alert-dialog';
import { Button } from '@components/ui/button';
import { Popover, PopoverTrigger, PopoverContent } from '@components/ui/popover';
import React, { useState } from 'react';

const Jsontabs = ({tabs = [], setTabs, setActiveTab}) => {
    const [openPopover, setOpenPopover] = useState(tabs.map(() => false));

    const handleClick = (e, tab) => {
        e.stopPropagation();
        e.preventDefault();
        setActiveTab(tab);
        console.log("click")
    }

    const handleDoubleClick = (e, index) => {
        e.stopPropagation();
        e.preventDefault();
        setOpenPopover(tabs.map((_, i) => i === index ? true : false));
        console.log("double click")
    }

    return (    
        <div className='flex gap-2'>
            {tabs.map((tab, index) => (
                <Popover open={openPopover[index]} key={index}>
                    <PopoverTrigger asChild>
                        <Button 
                            variant="primary" 
                            className='flex items-center justify-between'  
                            onDoubleClick={(e) => handleDoubleClick(e, index)}
                            onClick={(e) => handleClick(e, tab)}
                        >
                            {tab.name}
                            <input 
                                type="color" 
                                className='border-none outline-none size-[20px] cursor-pointer' 
                                value={tab.color} 
                                onChange={(e) => setTabs(tabs.map((t, i) => i === index ? {...t, color: e.target.value} : t))}
                            />
                            <AlertDialog>
                                <AlertDialogTrigger asChild>
                                    <span className='text-red-500'>x</span>
                                </AlertDialogTrigger>
                                <AlertDialogContent className='!text-black'>
                                    <AlertDialogHeader>
                                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                                    <AlertDialogDescription>
                                        This action cannot be undone. This will permanently delete your
                                        account and remove your data from our servers.
                                    </AlertDialogDescription>
                                    </AlertDialogHeader>
                                        <AlertDialogFooter>
                                            <AlertDialogCancel>Cancel</AlertDialogCancel>
                                            <AlertDialogAction onClick={() => setTabs(tabs.filter((_, i) => i !== index))}>Continue</AlertDialogAction>
                                        </AlertDialogFooter>
                                </AlertDialogContent>
                            </AlertDialog>
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-64" align="start" onInteractOutside={(e) => setOpenPopover(false)}>
                        <input 
                            type="text" 
                            className='w-full' 
                            value={tab.name} 
                            onChange={(e) => setTabs(tabs.map((t, i) => i === index ? {...t, name: e.target.value} : t))}
                        />
                    </PopoverContent>
                </Popover>
            ))}
            <Button variant="primary" onClick={() => setTabs([...tabs, createNewTab(`Tab ${tabs.length + 1}`)])}>+Add Tab</Button>
        </div>
    );
}

export default Jsontabs;
