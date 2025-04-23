import React from "react";
import LanguageContextProvider from "./context/LanguageContent";
import LanguageSelector from "./component/LanguageSelector";
import Greeting from "./component/Greeting";

export default function App() {
  return (
    <div className=" w-screen h-screen overflow-hidden bg-gray-900 text-white flex  justify-center items-center flex-col px-4 sm:px-20">
    <div className="flex flex-col items-center sm:items-start gap-6">
      <Greeting />
      <LanguageSelector />
    </div>
  </div>
  
  
  );
}
