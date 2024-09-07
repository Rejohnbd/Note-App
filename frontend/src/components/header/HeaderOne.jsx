"use client";
import ProtoTypes from "prop-types";
import { useState } from "react";
import SearchBar from "../forms/SearchBar";
import Author from "./Author";
import MassagePopup from "./MassagePopup";
import NotificationPopup from "./NotificationPopup";
import ProfilePopup from "./ProfilePopup";
import StorePopUp from "./StorePopUp";
import ToggleBtn from "./ToggleBtn";
import ModeToggler from "./ModeToggler";
import Button from "../Button";
import Input from '@/components/Input'
import ModalEditor from '@/components/quil/ModalEditor';
import useNote from "@/hooks/useNote"; 

function HeaderOne({ handleSidebar, user }) {
  const [popup, setPopup] = useState({
    notification: false,
    massage: false,
    profile: false,
    store: false,
  });

  const [showModal, setShowModal] = useState(false);
  const [note, setNote] = useState({ title: "", description: "" });
  const { submitNote, fetchNotes, loading, error } = useNote();

  const handlePopup = (name) => {
    setPopup({ ...popup, [name]: !popup[name] });
  };

  const handleChange = (e) => {
    setNote({
      ...note,
      [e.target.id]: e.target.value,
    });
  };

  const handleModalSubmit = async (e) => {
    e.preventDefault();
    console.log(note)
    await submitNote(note);
    setShowModal(false); 
    setNote({ title: "", description: "" }); 
  };

  return (
    <>
    <header className="header-wrapper fixed z-30 hidden w-full md:block">
      <div className="relative flex h-[108px] w-full items-center justify-between bg-white px-10 dark:bg-darkblack-600 2xl:px-[76px]">
        <button
          aria-label="none"
          onClick={handleSidebar}
          title="Ctrl+b"
          type="button"
          className="drawer-btn absolute left-0 top-auto rotate-180 transform"
        >
          <span>
            <svg
              width="16"
              height="40"
              viewBox="0 0 16 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 10C0 4.47715 4.47715 0 10 0H16V40H10C4.47715 40 0 35.5228 0 30V10Z"
                fill="#22C55E"
              />
              <path
                d="M10 15L6 20.0049L10 25.0098"
                stroke="#ffffff"
                strokeWidth="1.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        </button>
        {/* page-title */}
        {/* <div>
          <h3 className="text-xl font-bold text-bgray-900 dark:text-bgray-50 lg:text-3xl lg:leading-[36.4px]">
            Dashboard
          </h3>
          <p className="text-xs font-medium text-bgray-600 dark:text-bgray-50 lg:text-sm lg:leading-[25.2px]">
            Let’s check your update today
          </p>
        </div> */}
        {/* search-bar */}
        <SearchBar />
        {/* quick access */}
        <div className="quick-access-wrapper relative">
          <div className="flex items-center space-x-[43px]">
            <div className="hidden items-center space-x-4 xl:flex">
              <button
                className="bg-blue-200 text-black active:bg-blue-500 font-bold px-3 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => setShowModal(true)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </button>
              <ModeToggler />
            </div>
            <div className="hidden h-[48px] w-[1px] bg-bgray-300 dark:bg-darkblack-400 xl:block"></div>
            {/* author */}
            <Author showProfile={handlePopup} user={user}/>
          </div>
          {/* notification ,message, store */}
          <NotificationPopup
            active={popup.notification}
            handlePopup={handlePopup}
          />
          <MassagePopup active={popup.massage} handlePopup={handlePopup} />
          <StorePopUp active={popup.store} handlePopup={handlePopup} />
          <ProfilePopup active={popup.profile} handlePopup={handlePopup} />
        </div>
      </div>
    </header>
    {showModal ? (
        <>
          <div className="flex items-center justify-center fixed inset-0 z-50 bg-black/60">
            <div className="relative w-[90%] md:w-[80%] lg:w-[700px] my-6 mx-auto  h-auto">
              <div className={`translate duration-60 h-full ${showModal ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-10'}`}>
                <form 
                  onSubmit={handleModalSubmit}
                >
                  <div className="w-full h-auto rounded-xl relative flex flex-col bg-white">
                    <header className="h-[60px] flex items-center p-6 rounded-t justify-center relative border-b">
                      <div 
                        className="p-3 absolute left-3 hover:bg-gray-300 rounded-full cursor-pointer"
                        onClick={() => setShowModal(false)}
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                      </div>
                      <h2 className="text-lg font-bold">Create Note</h2>
                    </header>
                    <section className="p-6">
                      <div className="mb-5">
                        <label
                          htmlFor="title"
                          className="block text-basse dark:text-bgray-50 font-medium text-bgray-600 mb-2"
                        >
                          Title
                        </label>
                        <Input
                            id="title"
                            type="text"
                            value={note.title}
                            onChange={handleChange}
                            className="text-bgray-800 text-base border border-bgray-300 dark:border-darkblack-400 dark:bg-darkblack-500 dark:text-white h-14 w-full focus:border-success-300 focus:ring-0 rounded-lg px-4 py-3.5 placeholder:text-bgray-500 placeholder:text-base"
                            required
                            placeholder="Title"
                        />
                      </div>
                      <div className="mb-5">
                        <label
                          className="block text-basse dark:text-bgray-50 font-medium text-bgray-600 mb-2"
                        >
                          Description
                        </label>
                        <ModalEditor 
                          value={note.description} // Pass the current description state
                          onChange={(value) => setNote((prev) => ({ ...prev, description: value }))}
                        />
                      </div>
                    </section>
                    <section className="pr-6 mb-10">
                      <div className="flex justify-end">
                        <button
                        type="submit"
                        aria-label="none"
                        disabled={loading}
                        className="rounded-lg bg-success-300 px-12 py-3.5 transition-all text-white font-semibold hover:bg-success-400"
                      >
                        {loading ? "Submitting..." : "Create Note"}
                      </button>
                      </div>
                    </section>
                    {error && (
                    <p className="text-red-500 text-center">{error}</p>
                  )}
                  </div>
                </form>
              </div>
            </div>
        </div>
        </>
      ) : null}
    </>
  );
}

HeaderOne.propTypes = {
  handleSidebar: ProtoTypes.func,
};

export default HeaderOne;
