
import React from 'react';
import './_header.scss';
import { AiOutlineSearch, AiOutlineAudio } from 'react-icons';
import { MdNotifications, MdApps } from 'react-icons';
import { FaBars } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="header">
      <div className="header__left">
        <FaBars className="header__menu" size={24} />
        <img
          className="header__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg"
          alt="YouTube Logo"
        />
      </div>

      <form className="header__searchForm">
        <input type="text" placeholder="Search" />
        <button type="submit">
          <AiOutlineSearch size={20} />
        </button>
        <AiOutlineAudio className="header__mic" size={20} />
      </form>

      <div className="header__icons">
        <MdApps size={24} />
        <MdNotifications size={24} />
        <img
          className="header__avatar"
          src="https://yt3.ggpht.com/yti/AGOGRCrCrfGg03LXYIfEguYkU_NMxP1BtUlnTCGLuQ=s88-c-k-c0x00ffffff-no-rj"
          alt="User"
        />
      </div>
    </div>
  );
};

export default Header;