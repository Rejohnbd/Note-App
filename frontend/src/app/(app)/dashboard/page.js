import Header from '@/app/(app)/Header'
import TeamChat from '@/components/dashboard/TeamChat'

export const metadata = {
    title: 'Laravel - Dashboard',
}

const Dashboard = () => {
    return (
        <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px] dark:bg-darkblack-700">
            <div className="2xl:flex 2xl:space-x-[48px]">
                <section className="mb-6 2xl:mb-0 2xl:flex-1">
                    Meeting 
                </section>
                <section className="2xl:w-[400px] w-full flex flex-col lg:flex-row 2xl:space-x-0 2xl:flex-col lg:space-x-6 space-x-0">
                    <div className="mb-6 w-full rounded-lg bg-white px-[42px] py-5 dark:border dark:border-darkblack-400 dark:bg-darkblack-600 lg:mb-0 lg:w-1/2 2xl:mb-6 2xl:w-full">
                        <div className="my-wallet mb-8 w-full">
                            <div className="mb-3 flex items-center justify-between">
                                <h3 className="text-lg font-bold text-bgray-900 dark:text-white">
                                    Filter
                                </h3>
                            </div>
                            <div className="flex justify-center">
                            </div>
                        </div>
                        
                    </div>
                    <TeamChat />
                </section>
            </div>
        </main>
    )
}

export default Dashboard