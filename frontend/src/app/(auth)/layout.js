import Link from 'next/link'
import AuthCard from '@/app/(auth)/AuthCard'
import ApplicationLogo from '@/components/ApplicationLogo'

import "/public/static/css/style.css";
import "/public/static/css/font-awesome-all.min.css";

export const metadata = {
    title: 'Laravel',
}

const Layout = ({ children }) => {
    return (
        <div>
            {/* <div className="text-gray-900 antialiased">
                <AuthCard
                    logo={
                        <Link href="/">
                            <ApplicationLogo className="w-20 h-20 fill-current text-gray-500" />
                        </Link>
                    }> */}
                    {children}
                {/* </AuthCard>
            </div> */}
        </div>
    )
}

export default Layout
