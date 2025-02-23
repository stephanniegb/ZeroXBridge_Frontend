'use client'
import React, { useState } from "react";
import SuccessState from "../components/success-state/success-state";
import AnimatedIcon from "../components/success-state/animated-icon";

export default function index (){
    const [open, setOpen] = useState(true)
    return(
        <div className="bg-main-bg bg-no-repeat bg-cover">
            <SuccessState 
            isOpen={open} 
            onClose={setOpen}
            message={'You have successfully SWAPPED 0.00034 ETH to 5.79 SOL'}
            icon={<AnimatedIcon iconType='swap' />}
            />
        </div>
    );
}