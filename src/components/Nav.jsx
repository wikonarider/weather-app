import React from 'react';
// import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';

function Nav({onSearch}) {
  return (
    <div>
       <nav className="nav-header">
       <img src="https://images.vexels.com/media/users/3/240797/isolated/lists/22e639105d35ae6155998c55d57f4ccc-iconos-graficos-del-tiempo-55.png" alt="logoimage" width="80px" height="80px"/>
       {/* <a className="title" href="">TWN</a> */}
        {/* Pasa la función onSearch */}
        <SearchBar onSearch={onSearch}/>
      </nav>
    </div>
  );
};

export default Nav;