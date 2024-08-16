import { ComponentProps } from "react";
import "./input.css"
import { twMerge } from "tailwind-merge";

interface InputProps extends ComponentProps<'input'>{
    label?: string;
}

export default function Input({label, ...props}: InputProps ){
    const className = twMerge('w-[350px]', props.className)
    return(
        <div className="flex flex-col gap-2 justify-start">
            <span className="ml-3 font-medium">{label}</span>
            <input {...props} className={className} />
        </div>
    )
}