import React, { useContext } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Header.css";
import logo from "../../images/Logo.svg";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
      logOut()
      .then(() => {
        toast.success('Successfully signed out', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
            });
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <nav className="header">
        <img src={logo} alt="" />
        <div>
          <Link to="/">Shop</Link>
          <Link to="/orders">Orders</Link>
          <Link to="/inventory">Inventory</Link>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
          {user && (
            <>
              <span className="user-text">{user.email}</span>
              <span>
                <button onClick={handleLogOut}>Signout</button>
              </span>
            </>
          )}
        </div>
      </nav>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default Header;
