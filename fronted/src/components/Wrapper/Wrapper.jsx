import styles from "./Wrapper.module.css";
import classNames from "classnames";
import * as FaIcons from "react-icons/fa";
import { Outlet } from "react-router-dom";

const Wrapper = ({
    menuIconClick,
    menuCollapse
}) => {
    return (
        <div id="page-wrapper" className={classNames(styles["gray-bg"], `${menuCollapse ? styles["dashbard"] : styles["dashbard-min"]}`)}>
            <div className={classNames(styles["row"], styles["border-bottom"])}>

                <nav className={classNames(styles["navbar"], styles["navbar-static-top"])}
                    role="navigation" >
                    <div className={styles["navbar-header"]}>
                        <div className={styles["navIcon"]} onClick={menuIconClick}>
                            <FaIcons.FaBars />
                        </div>
                    </div>

                    <ul className={classNames(styles["nav"], styles["navbar-top-links"], styles["navbar-right"])}>
                        <li className={styles["dropdown"]}>
                            <a className="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                <i className="fa fa-envelope"></i><span className="label label-warning"></span>
                            </a>
                            <ul className="dropdown-menu dropdown-messages">
                                <li>
                                    <div className="dropdown-messages-box">
                                        <a href="profile.html" className="pull-left">
                                        </a>
                                        <div className="media-body">
                                            <small className="pull-right">46h ago</small>
                                            <strong>Mike Loreipsum</strong> started following <strong>Monica Smith</strong>
                                            <small className="text-muted">3 days ago at 7:58 pm - 10.06.2014</small>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <a href="#" style={{ color: "white" }}>
                                <FaIcons.FaOutdent />
                                <i style={{ marginLeft: "10px" }}>
                                    Cerrar Sesion
                                </i>
                            </a>
                        </li>

                    </ul>
                </nav>
            </div>

            <div className={classNames(styles["wrapper"], `${menuCollapse ? styles["wrapper-content"] : styles["wrapper-content-min"]}`)} >
                <Outlet />
            </div>
        </div>
    )
}

export default Wrapper;