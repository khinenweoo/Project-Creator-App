export default function Guest({ children }) {
    return (
        <div className="min-h-screen h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-indigo-300">

            <div className="w-full sm:max-w-md px-6 my-auto py-4 shadow-md bg-indigo-300 overflow-hidden sm:rounded-lg">
                {children}
            </div>
        </div>
    );
}
