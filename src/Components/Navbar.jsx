import React from 'react';
// import Divider from 'Components/Divider';
import { ReactComponent as Brand } from 'assets/img/brand.svg';

function Navbar() {
  return (
    <nav className="p-4 flex">
      <div className="flex items-center">
        <Brand />
        <p className="ml-6 leading-9 pl-6 h-5/6 border-l border-white text-primary font-main text-sm font-thin">
          To-Do-List Alarm System
        </p>
      </div>
    </nav>
  );
}

export default Navbar;
