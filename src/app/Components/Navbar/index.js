import React from 'react';
import Style from './navbar.module.scss';
export const Navbar = () => {
  return (
    <div className={Style['navbar-wrapper']}>
      <div className={Style['navbar-container']}>
        <div className={Style['navbar-fixed']}>
          <div className={Style['navbar-content']}>
            <ul>
              <li onClick={() => window.scrollTo(0, 0)}> Image </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
