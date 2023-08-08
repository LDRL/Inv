import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Productos",
        path: "",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Productos",
                path: "/productos",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "nuevo producto",
                path: "/productos/crear-producto",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Proveedores",
        path: "",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Proveedores",
                path: "/proveedores",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "nuevo proveedor",
                path: "/proveedores/nuevo-proveedor",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            }
        ],
    },
    // {
    //     title: "Clientes",
    //     path: "",
    //     icon: <FaIcons.FaPhone />,
    // },
    {
        title: "Clientes",
        path: "",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Clientes",
                path: "/clientes",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "nuevo cliente",
                path: "/clientes/nuevo-cliente",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Support",
        path: "/support",
        icon: <IoIcons.IoMdHelpCircle />,
    },
];