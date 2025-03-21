'use client'
import React, { useState } from "react";
import SuccessState from "../components/success-state/success-state";
import AnimatedIcon from "../components/success-state/animated-icon";

export default function index (){
    const [open, setOpen] = useState(true)
    const [isDarkMode, setIsDarkMode] = useState(true);
    return(
        
        <div className="bg-main-bg bg-no-repeat bg-cover">
            <SuccessState 
            isOpen={open} 
            onClose={setOpen}
            message={'You have successfully LOCKED $200 xZB Tokens.'}
            isDarkMode={isDarkMode}
            icon={<AnimatedIcon iconType='lock' />}
            />
        </div>
    );
}