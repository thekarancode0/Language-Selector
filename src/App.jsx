import React from "react";
import LanguageContextProvider from "./context/LanguageContent";
import LanguageSelector from "./component/LanguageSelector";
import Greeting from "./component/Greeting";

export default function App() {
  return (
    <div className="w-screen h-screen bg-gray-900 text-white flex flex-col sm:flex-row justify-center items-center px-4 sm:px-20">
    <Greeting />
    <LanguageSelector />
  </div>
  
  );
}
