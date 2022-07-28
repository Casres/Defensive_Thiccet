import React from "react";
import { Link } from "react-router-dom";


function Nav() {
  function showNavigation() {
    return (
      <ul className="flex-row ">
        <li className="mx-1">
          <Link to="/InventoryList">Inventory</Link>
        </li>
        <li className="mx-1">
          <Link to="/Search">Search</Link>
        </li>
        <li className="mx-1">
          <Link to="/Update">Update Inventory</Link>
        </li>
        <li className="mx-1">
          <Link to="/Login">Log In</Link>
        </li>
        <li className="mx-1">
          <Link to="/Signup">Sign Up</Link>
        </li>
      </ul>
    );
  }

  return (
    <header className="flex-row px-1 nav">
      <nav>
        {showNavigation()}
        
      </nav>
    </header>
  );
}

export default Nav;

// import React from 'react';
// import { Link } from 'react-router-dom';

// import Auth from '../../utils/auth';

// const Nav = () => {
//   const logout = event => {
//     event.preventDefault();
//     Auth.logout();
//   };

//   return (
//     <header className="bg-secondary mb-4 py-2 flex-row align-center">
//       <div className="container flex-row justify-space-between-lg justify-center align-center">
//         <Link to="/">
//           <h1>On The Shelf</h1>
//         </Link>

//         <nav className="text-center">
//           {Auth.loggedIn() ? (
//             <>
//               <Link to="/profile">Me</Link>
//               <a href="/" onClick={logout}>
//                 Logout
//               </a>
//             </>
//           ) : (
//             <>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </>
//           )}
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Nav;