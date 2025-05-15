import { Link, Head } from '@inertiajs/react';
import {LayoutContext, LayoutProvider} from "@/Layouts/layout/context/layoutcontext.jsx";
import {PrimeReactProvider} from "primereact/api";
import {Button} from "primereact/button";
import React, {useContext} from "react";
import "primereact/resources/themes/tailwind-light/theme.css";
import "primereact/resources/primereact.min.css";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const { layoutConfig} = useContext(LayoutContext);
    return (
        <>
            <PrimeReactProvider>
                <LayoutProvider>
            <Head title="Welcome" />
            <div className="relative min-h-screen  dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                {/* Navbar */}
                <nav className="bg-white shadow-3 relative z-10">
                    <div className="container mx-auto px-6 py-4 flex justify-content-between align-items-center">
                        <a href="/" className="router-link-active router-link-exact-active flex items-center space-x-0 hover:opacity-90 transition-opacity" aria-current="page">
                            <div className="h-10 w-16 relative overflow-visible">
                                 {/* <img src={`/images/logo/-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="100.22px" height={'35px'} alt="logo" className="absolute -top-2 -left-1 h-16 w-16"/> */}
                            </div>
                            <span className="text-2xl font-bold text-primary -ml-1">ProJix</span>
                        </a>
                        <div className="hidden md:flex md:mx-3">
                            <a href="/" className="router-link-active router-link-exact-active text-gray-900 hover:text-primary transition-colors duration-200" aria-current="page"> Home </a>
                            {auth.user ? (
                                <Link
                                    href={route('dashboard')}
                                    className="text-gray-900 ml-3 hover:text-primary transition-colors duration-200"
                                >
                                    Dashboard
                                </Link>
                            ) : (
                                <>
                                    <Link
                                        href={route('login')}
                                        className="text-gray-900 ml-3 hover:text-primary transition-colors duration-200"
                                    >
                                        Log in
                                    </Link>

                                    <Link
                                        href={route('register')}
                                        className="text-gray-900 ml-3 hover:text-primary transition-colors duration-200"
                                    >
                                        Register
                                    </Link>
                                </>
                            )}
                        </div>

                        <button type="button" className="md:hidden flex align-items-center justify-content-between border-round text-gray-700 p-link layout-menu-button layout-topbar-button">
                            <i className="pi pi-bars text-2xl" />
                        </button>
                    </div>
                </nav>

                <div className="grid grid-nogutter surface-0 text-800">
                    <div className="col-12 p-6 text-center flex justify-content-center align-items-center ">
                        <section>
                            <div className='flex justify-content-center mb-6'>
                                <img src={`/images/hero/project-draw.svg`} alt="welcome-image" className="h-3 w-3"/>
                            </div>
                            <span className="block text-5xl font-bold mb-1">Welcome to ProJix</span>
                            <div className="text-3xl text-primary font-bold mb-3">Bring Your Projects to Life, Together</div>
                            <p className="mt-0 mb-4 text-xl mx-8 text-gray-600 text-700 line-height-3">
                                Track progress, assign tasks, and meet every deadline with ease.<br/>
                                 Manage projects, tasks, and members effortlessly with ProJix.

</p>
                            <Button label="Start Manage Your Task" type="button" className="mr-3 p-button-raised" />
                        </section>
                    </div>
                </div>

            </div>
            </LayoutProvider>
            </PrimeReactProvider>
        </>
    );
}
