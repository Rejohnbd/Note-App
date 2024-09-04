'use client'

import { useAuth } from '@/hooks/auth'
import Navigation from '@/app/(app)/Navigation'
import Loading from '@/app/(app)/Loading'

import { useState } from "react";
import Sidebar from '@/components/sidebar';
import SidebarV2 from '@/components/sidebar/SidebarV2';
import Overlay from '@/components/overlay';
import ProtoTypes from "prop-types";
import HeaderOne from '@/components/header/HeaderOne';
import HeaderTwo from '@/components/header/HeaderTwo';

const AppLayout = ({ bg, overlay, children }) => {
    const { user } = useAuth({ middleware: 'auth' })
    const [sidebar, setSidebar] = useState(true);

    if (!user) {
        return <Loading />
    }

    return (
        <div className={`layout-wrapper ${sidebar && "active"}  w-full`}>
            <div className="relative flex w-full">
                <Sidebar handleActive={() => setSidebar(!sidebar)} />
                {overlay ? overlay : <Overlay />}
                <SidebarV2 />
                <div
                className={`body-wrapper flex-1 overflow-x-hidden ${
                    bg ? bg : "dark:bg-darkblack-500"
                } `}
                >
                <HeaderOne handleSidebar={() => setSidebar(!sidebar)} />
                <HeaderTwo handleSidebar={() => setSidebar(!sidebar)} />
                {children}
                </div>
            </div>
        </div>
    )
}

export default AppLayout
