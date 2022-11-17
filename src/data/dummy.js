import React from 'react';
import { BiHomeAlt } from 'react-icons/bi';
import { BsFillTagFill, BsFillBarChartFill, BsGearFill } from 'react-icons/bs';
import { GrUnorderedList, GrPowerShutdown } from 'react-icons/gr';
import { HiClipboardDocumentList } from 'react-icons/hi2';
import { RiShoppingBasket2Fill } from 'react-icons/ri';
import { FaUser } from 'react-icons/fa';
import{DiReact} from'react-icons/di';
import {HiThumbUp} from 'react-icons/hi';
import {MdDone} from 'react-icons/md'
import cloth from '../data/cloth.png';
import cap from '../data/cap.png';
import sneakers from '../data/sneakers.png';


export const links = [
    {
        title: 'links',

        links: [

            {
                name: 'Dashboard',
                icon: <BiHomeAlt />,
            },
            {
                name: 'Pos',
                icon: <BsFillTagFill  color='#ef385e' />,
            },
            {
                name: 'Orders',
                icon: <RiShoppingBasket2Fill color="#65cea0" />,
            },
            {
                name: 'Order Status Screen',
                icon: <GrUnorderedList color="#ffeba4" />,
            },
            {
                name: 'Expense',
                icon: <HiClipboardDocumentList
                    color="#c83157" />,
            },
            {
                name: 'Cutsomers',
                icon: <FaUser color="#c339a8" />,
            },
            {
                name: 'Services',
                icon: <BsFillTagFill color="#0280f5" />,
            },
            {
                name: 'Reports',
                icon: <BsFillBarChartFill color="#ffeba4" />,
            },
            {
                name: 'Tools',
                icon: <BsGearFill
                    color="#e49048" />,
            },
            {
                name: 'Logout',
                icon: <GrPowerShutdown />,
            },


        ],
    },
];
export const snipdata = [
    {
      
      title: 'PENDING ORDER',
      icon: <RiShoppingBasket2Fill />,
      value: '202',
      iconColor: '#FFFFFF',
      iconBg: '#8494ab',
    },
    {
        title: 'PROCESSING ORDER',
        icon: <DiReact/>,
        value: '99',
        iconColor: '#FFFFFF',
        iconBg: '#f5ae47',
    },
    {
        title: 'READY TO DELIVER',
        icon: <HiThumbUp />,
        value: '263',
        iconColor: '#FFFFFF',
        iconBg: '#2ccd89',
    },
    {
        title: 'DELIVERED ORDERS',
        icon: <MdDone/>,
        value: '346',
        iconColor: '#FFFFFF',
        iconBg: '#0084fd',
        
    },
  ];
export const pieChartData = [
    { x: 'Pending', y: 203, text: '203' },
    { x: 'Processing', y: 99, text: '99' },
    { x: 'Ready To Deliver', y: 263, text: '263' },
    { x: 'Delivered', y: 346, text: '346' },
    { x: 'Returned', y: 28, text: '28' },
  ];

export const order=[
    {
        title:'98655965',
        id:'ORD-0948',
        bg:'#faad3b',
        icon1:cloth,
        icon2:sneakers,
    },
    {
        title:'ARIF',
        id:'ORD-0949',
        bg:'#f93260',
        icon1:cloth,
        icon2:cloth,

    },
    {
        title:'shiyas',
        id:'ORD-0950',
        bg:'#7b8ea6',
        icon1:cap,
        icon2:cloth,

    },
    {
        title:'Walk In Customer',
        id:'ORD-0951',
        bg:'#7b8ea6',
        icon1:sneakers,
        icon2:cap,

    },

];