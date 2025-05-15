import {Button} from "primereact/button";

export default function PrimaryButton({ className = '', disabled, children, ...props }) {
    return (
        <Button
            {...props}
            className={
                `border border-transparent rounded-md font-medium  text-white capitalize tracking-widest bg-indigo-400 hover:bg-indigo-700 focus:bg-indigo-600 active:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition ease-in-out duration-150 ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </Button>
    );
}
