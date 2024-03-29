import React, { Component } from "react";
import { BrowserRouter as NavLink, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faChartPie } from "@fortawesome/free-solid-svg-icons";
import { faTv } from "@fortawesome/free-solid-svg-icons";
import styles from "./Navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <section className={styles.navi}>
        <div className={styles.navWrapper}>
          <NavLink
            to="/login"
            className={(isActive) =>
              "nav-link" + (!isActive ? " unselected" : "")
            }
          >
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faUser}
                size="2x"
              />
            </span>
          </NavLink>{" "}
          <NavLink className={styles.navLink} to="/webinars">
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faTv}
                size="2x"
              />
            </span>
          </NavLink>{" "}
          <NavLink className={styles.navLink} to="/schedule">
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faCalendarAlt}
                size="2x"
              />
            </span>
          </NavLink>{" "}
          <NavLink className={styles.navLink} to="/create">
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faVideo}
                size="2x"
              />
            </span>
          </NavLink>{" "}
          <NavLink className={styles.navLink} to="/favorites">
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faHeart}
                size="2x"
              />
            </span>
          </NavLink>{" "}
          <NavLink className={styles.navLink} to="/stats">
            <span>
              <FontAwesomeIcon
                className={styles.navIcon}
                icon={faChartPie}
                size="2x"
              />
            </span>
          </NavLink>{" "}
        </div>
      </section>
    );
  }
}

export default Navbar;
