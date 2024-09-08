"use client";
import React, { useEffect } from "react";
import Header from '@/app/(app)/Header';
import TeamChat from '@/components/dashboard/TeamChat';
import useNote from '@/hooks/useNote'; 

const Dashboard = () => {
    const { notes, fetchNotes, loading, error } = useNote();

    useEffect(() => {
        console.log("Fetching notes... in dashboard");

        fetchNotes();
    }, []);

    return (
        <main className="w-full px-6 pb-6 pt-[100px] sm:pt-[156px] xl:px-[48px] xl:pb-[48px] dark:bg-darkblack-700">
            <div className="2xl:flex 2xl:space-x-[48px]">
                <section className="mb-6 2xl:mb-0 2xl:flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Meeting</h2>
                    {loading ? (
                        <p className="text-blue-500">Loading notes...</p>
                    ) : error ? (
                        <p className="text-red-500">Error: {error}</p>
                    ) : (
                        <div className="md:grid-cols-1 lg:grid-cols-1">
                            {notes.map((note) => (
                                <div
                                    key={note.id}
                                    className="bg-white dark:bg-darkblack-600 rounded-lg shadow-md overflow-hidden mb-2"
                                >
                                    <div className="p-6">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {note.title}
                                        </h3>
                                        <div
                                            className="text-gray-700 dark:text-gray-300"
                                            dangerouslySetInnerHTML={{ __html: note.description }}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
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
                                {/* Add filter controls here */}
                            </div>
                        </div>
                    </div>
                    <TeamChat />
                </section>
            </div>
        </main>
    );
};

export default Dashboard;
