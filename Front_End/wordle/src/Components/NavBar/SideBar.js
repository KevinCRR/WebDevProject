import React from 'react'
import * as AiIcons from "react-icons/ai";
import * as BsIcons from "react-icons/bs";
import * as MdIcons from "react-icons/md"


export const SideBarData = [
    {
        title:"Home",
        path:'/',
        icon:<AiIcons.AiFillHome />,
        cName: 'nav-text'
    },
    {
        title:"Login",
        path:'/login',
        icon:<BsIcons.BsKeyFill />,
        cName: 'nav-text'
    }, 
    {
        title:"Register",
        path:'/register',
        icon:<BsIcons.BsClipboard />,
        cName: 'nav-text'
    },
    {
        title:"ScoreBoard",
        path:'/score',
        icon:<MdIcons.MdLeaderboard />,
        cName: 'nav-text'
    },
    {
        title:"View Board",
        path:'/board',
        icon:<BsIcons.BsFillGrid3X3GapFill />,
        cName: 'nav-text'
    }
]