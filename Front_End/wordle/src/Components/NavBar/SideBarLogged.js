import React from "react";
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md";

export const SideBarDataLogged = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Logout",
    path: "/",
    icon: <BsIcons.BsBoxArrowRight />,
    cName: "nav-text",
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <BsIcons.BsFillPersonFill />,
    cName: "nav-text",
  },
  {
    title: "ScoreBoard",
    path: "/score",
    icon: <MdIcons.MdLeaderboard />,
    cName: "nav-text",
  },
  {
    title: "View Board",
    path: "/boardview",
    icon: <BsIcons.BsFillGrid3X3GapFill />,
    cName: "nav-text",
  },
];
