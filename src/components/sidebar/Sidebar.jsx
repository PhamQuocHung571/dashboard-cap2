import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import './sidebar.css'
import logo from '../../assets/images/logo.svg'
import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const Container = styled.div`
    min-width: var(--sidebar-width);
    height: 100vh;
    position: fixed;
    left: 0;
    top: 0;
    background-color: var(--main-bg);
    box-shadow: var(--box-shadow);
`;

const Sidebar__logo  = styled.div`
    height: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Img = styled.img`
    height: 60px;
`;

const Sidebar_item = styled.div`
    padding: 0 20px;
`;

const Sidebar_item_inner = styled.div`
    padding: 15px 25px;
    display: flex;
    align-items: center;
    font-weight: 600;
    transition: color 0.3s ease 0s;  
    &:hover{
        color: var(--main-color);
    }
`;

const I = styled.i`
    margin-right: 10px;
    font-size: 1.5rem;
`;

const Span = styled.span`
    text-transform: capitalize;
`;

const SidebarItem = props => {
    const active = props.active ? 'active' : '';

    return (
        // <div className="sidebar__item">
        //     <div className={`sidebar__item-inner ${active}`}>
        //         <i className={props.icon}></i>
        //         <span>
        //             {props.title}
        //         </span>
        //     </div>
        // </div>
        <Sidebar_item>
            <Sidebar_item_inner >
                <I className={props.icon}></I>
                <Span>
                    {props.title}
                </Span>
            </Sidebar_item_inner>
        </Sidebar_item>
    )
}

const Sidebar = props => {
    const activeItem = sidebar_items.findIndex(item => item.route === props.location.pathname)

    return (
        // <div className='sidebar'>
        //     <div className="sidebar__logo">
        //         <img src={logo} alt="company logo" />
        //     </div>
        //     {
        //         sidebar_items.map((item, index) => (
        //             <Link to={item.route} key={index}>
        //                 <SidebarItem
        //                     title={item.display_name}
        //                     icon={item.icon}
        //                     active={index === activeItem}
        //                 />
        //             </Link>
        //         ))
        //     }
        // </div>
        <Container>
            <Sidebar__logo>
                <Img src={logo} alt="company logo"/>
            </Sidebar__logo>
            {
                sidebar_items.map((item, index) => (
                    <Link to={item.route} key={index}>
                        <SidebarItem
                            title={item.display_name}
                            icon={item.icon}
                            active={index === activeItem}
                        />
                    </Link>
                ))
            }
        </Container>
    )
}

export default Sidebar
