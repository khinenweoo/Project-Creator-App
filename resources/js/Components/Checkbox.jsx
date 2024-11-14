export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                'rounded-full border-gray-800 bg-black text-white shadow-sm focus:ring-gray-500 ' +
                className
            }
        />
    );
}
