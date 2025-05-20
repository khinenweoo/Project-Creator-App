/* eslint-disable @next/next/no-img-element */

import { classNames } from 'primereact/utils';
import React, { forwardRef, useContext, useImperativeHandle, useRef } from 'react';
import { LayoutContext } from './context/layoutcontext';
import { Link } from "@inertiajs/react";
import { UserContext } from "./context/usercontext";

const AppTopbar = forwardRef(({ user }, ref) => {
    const { layoutState, onMenuToggle, showProfileSidebar } = useContext(LayoutContext);
    const { userState } = useContext(UserContext);
    const menubuttonRef = useRef(null);
    const topbarmenuRef = useRef(null);
    const topbarmenubuttonRef = useRef(null);

    useImperativeHandle(ref, () => ({
        menubutton: menubuttonRef.current,
        topbarmenu: topbarmenuRef.current,
        topbarmenubutton: topbarmenubuttonRef.current
    }));


    return (
        <div className="layout-topbar">
            <Link href="/" className="layout-topbar-logo hidden md:block">
                {/* <img src={`/images/logo/-${layoutConfig.colorScheme !== 'light' ? 'white' : 'dark'}.svg`} width="100.22px" height={'35px'} alt="logo" /> */}
                <img src={`/images/logo/logocolor.svg`} width="" height={'35px'} alt="logo" />
                {/* <span className='logo-text text-lg'>My-Project</span> */}
                <span className="logo-text text-2xl font-bold -ml-1">ProJix</span>
            </Link>

            <button ref={menubuttonRef} type="button" className="p-link layout-menu-button layout-topbar-button sm:justify-content-start ml-0" onClick={onMenuToggle}>
                <i className="pi pi-bars" />
            </button>


            <button ref={topbarmenubuttonRef} type="button" className="p-link layout-topbar-menu-button layout-topbar-button" onClick={showProfileSidebar}>
                {/* Display User Avatar */}
                {userState && userState.profile_image? (
                    <div className="user-avatar">
                        <img
                            src={userState.profile_image}
                            alt=""
                            className="border-circle border-1 border-gray-300 w-4rem h-4rem p-1 m-2 shadow-md"
                        />
                    </div>
                ) : <i className="pi pi-user" />}
            </button>
            <div className='flex flex-column'>
            <span className='hidden md:block text-md font-medium text-gray-900 ml-3'>{userState? userState.username: ''}</span>
            <span className='hidden md:block text-sm text-gray-900 ml-3'>{userState? 'Admin Profile': ''}</span>
            </div>



            <div ref={topbarmenuRef} className={classNames('layout-topbar-menu', { 'layout-topbar-menu-mobile-active': layoutState.profileSidebarVisible })}>
                <Link href={route('profile.edit')} className="p-link layout-topbar-button">
                    <i className="pi pi-user"></i>
                    <span>Profile</span>
                </Link>
                <Link href={route('logout')} method="post" as="button" className="p-link layout-topbar-button">
                    <i className="pi pi-lock"></i>
                    <span>Logout</span>
                </Link>
            </div>


        </div>
    );
});

AppTopbar.displayName = 'AppTopbar';

export default AppTopbar;
