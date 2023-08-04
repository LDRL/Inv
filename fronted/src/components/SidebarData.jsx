import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";

export const SidebarData = [
    {
        title: "Productos",
        path: "/productos",
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Our Aim",
                path: "/productos",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Visionnn",
                path: "/proveedores",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our Me",
                path: "/clientes",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Our TEs",
                path: "/about-us/vision",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Proveedores",
        path: "/proveedores",
        icon: <IoIcons.IoIosPaper />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Clientes",
                path: "/clientes",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 2",
                path: "/services/services2",
                icon: <IoIcons.IoIosPaper />,
                cName: "sub-nav",
            },
            {
                title: "Service 3",
                path: "/services/services3",
                icon: <IoIcons.IoIosPaper />,
            },
        ],
    },
    {
        title: "Clientes",
        path: "/clientes",
        icon: <FaIcons.FaPhone />,
    },
    {
        title: "Events",
        path: "/events",
        icon: <FaIcons.FaEnvelopeOpenText />,

        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,

        subNav: [
            {
                title: "Event 1",
                path: "/events/events1",
                icon: <IoIcons.IoIosPaper />,
            },
            {
                title: "Event 2",
                path: "/events/events2",
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