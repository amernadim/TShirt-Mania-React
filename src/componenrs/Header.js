import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar bg-purple-300">
    <div className="flex-1">
      <Link to='/' className="btn btn-ghost normal-case text-xl">T Shirt Mania</Link>
    </div>
    <div className="flex-none">
      <ul className="menu menu-horizontal p-0">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/orders'>Orders</Link></li>
        <li><Link to='/grandpa'>Granpa</Link></li>
      </ul>
    </div>
  </nav>
  );
};

export default Header;