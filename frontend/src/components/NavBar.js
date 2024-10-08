import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>CRM Tool</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <NavLink
            exact
            to="/"
            activeClassName={styles.active}
            className={styles.navLink}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/users"
            activeClassName={styles.active}
            className={styles.navLink}
          >
            Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/tasks"
            activeClassName={styles.active}
            className={styles.navLink}
          >
            Tasks
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
