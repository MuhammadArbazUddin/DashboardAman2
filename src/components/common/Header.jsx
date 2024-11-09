import React, { useState } from "react";
import { FaPlusSquare, FaBell } from "react-icons/fa";
import Flag from "react-world-flags";
import arbaz from "../../assets/Images/arbaz.jpeg";
import { NavLink } from "react-router-dom";

const Header = ({ title }) => {
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);

  const languages = [
    { code: "US", name: "English" },
    { code: "TR", name: "Türkçe" },
    { code: "SA", name: "العربية" },
  ];

  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  const toggleLanguageDropdown = () => {
    setLanguageDropdownOpen(!languageDropdownOpen);
  };

  const handleLanguageChange = (code, name) => {
    setSelectedLanguage({ code, name });
    setLanguageDropdownOpen(false);
  };

  const availableLanguages = languages.filter(
    (language) => language.code !== selectedLanguage.code
  );

  return (
    <header className="bg-white backdrop-blur-md shadow-lg">
      <div className="flex justify-between max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8 items-center gap-4">
        {/* Create Store Button */}
        <NavLink to="/sales">
          <button className="flex items-center gap-2 text-[#459246] bg-gray-100 px-4 py-2 rounded-full">
            <FaPlusSquare className="text-xl " /> Create Store
          </button>
        </NavLink>

        {/* Header Title */}
        {/* <h1 className="text-2xl font-semibold text-green-800">{title}</h1> */}

        {/* Right-side Actions */}
        <div className="flex items-center gap-4">
          {/* Language Dropdown */}
          <div
            className="flex items-center text-green-800 bg-gray-100 px-4 py-2 rounded-full cursor-pointer relative"
            onClick={toggleLanguageDropdown}
          >
            <Flag code={selectedLanguage.code} className="w-5 h-auto mr-2" />
            {selectedLanguage.name}
            <span className="ml-1 text-xs">&#x25BC;</span>
          </div>

          {languageDropdownOpen && (
            <div className="absolute top-16 text-green-800 bg-gray-100 shadow-md rounded-md w-40 py-2 z-50">
              {availableLanguages.map((language) => (
                <div
                  key={language.code}
                  className="flex items-center px-4 py-2 cursor-pointer hover:bg-gray-200"
                  onClick={() =>
                    handleLanguageChange(language.code, language.name)
                  }
                >
                  <Flag code={language.code} className="w-5 h-auto mr-2" />
                  {language.name}
                </div>
              ))}
            </div>
          )}

          {/* Notification Icon */}
          <FaBell className="text-2xl text-green-800 cursor-pointer transition duration-300 hover:text-secondary" />

          {/* Profile Picture */}
          <img
            src={arbaz}
            alt="Profile"
            className="w-10 h-10 rounded-full object-cover cursor-pointer transition duration-300 hover:shadow-lg"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
