import React, { useState } from 'react';
import './_side_bar.scss';
import {
  FaHome, FaFire, FaListUl, FaPlayCircle, FaHistory, FaBars, FaSignOutAlt
} from 'react-icons/fa';
import { MdSubscriptions } from 'react-icons/md';

function Sidebar() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(true);

  const menuItems = [
    { icon: <FaHome size={24} />, text: 'Home' },
    { icon: <FaFire size={24} />, text: 'Trending' },
    { icon: <MdSubscriptions size={24} />, text: 'Subscriptions' },
    { icon: <FaHistory size={24} />, text: 'History' },
    { icon: <FaListUl size={24} />, text: 'Library' },
    { icon: <FaPlayCircle size={24} />, text: 'Your Videos' },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button className="sidebar__toggle" onClick={toggleSidebar} aria-label="Toggle Sidebar">
        <FaBars size={24} />
      </button>

      <nav className={`sidebar__container ${isOpen ? 'open' : 'closed'}`}>
        <ul className="sidebar__menu">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`sidebar__item ${activeIndex === index ? 'active' : ''}`}
              onClick={() => handleItemClick(index)}
            >
              <span className="sidebar__icon">{item.icon}</span>
              <span className="sidebar__text">{item.text}</span>
            </li>
          ))}
        </ul>

        {/* Logout Button */}
        <div className="sidebar__logout">
          <li className="sidebar__item">
            <span className="sidebar__icon"><FaSignOutAlt size={24} /></span>
            <span className="sidebar__text">Logout</span>
          </li>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
