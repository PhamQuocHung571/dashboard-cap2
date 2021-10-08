import React from 'react'

import './topnav.css'

import { Link } from 'react-router-dom'

import Dropdown from '../dropdown/Dropdown'

import ThemeMenu from '../thememenu/ThemeMenu'

import notifications from '../../assets/JsonData/notification.json'

import user_image from '../../assets/images/hungvo.jpg'

import user_menu from '../../assets/JsonData/user_menus.json'

import styled from 'styled-components'

const Container = styled.div`
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: var(--topnav-height);
`;
const Search = styled.div`
    position: relative;
    height: 50px;
    background-color: var(--main-bg);
    display: flex;
    align-items: center;
    box-shadow: var(--box-shadow);
    border-radius: var(--border-radius);
    overflow: hidden;
`;
const Input = styled.input`
    height: 100%;
    width: 100%;
    padding: 10px 60px 10px 20px;
    font-size: 1rem;
    border-radius: var(--border-radius);
    color: var(--txt-color);
    background-color: var(--main-bg);   
`;
const I = styled.i`
    font-size: 1.5rem;
    position: absolute;
    right: 20px;
`;
const Right = styled.div`
    display: flex;
    align-items: center;
`;
const Right_item = styled.div`
    margin-left: 30px;
`;
const Notification = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;
    &:hover{
        background-color: var(--second-bg);
    }
`;
const Ii = styled.i`
    margin-right: 20px;
    font-size: 1.5rem;
`;
const User = styled.div`
    display: flex;
    align-items: center;
`;
const Image = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 10px;
`;
const Img = styled.img`
    width: 100%;
`;
const Name = styled.div`
    font-size: 1rem;
    font-weight: 600;
`;

const curr_user = {
    display_name: 'Hung Vo',
    image: user_image
}

const renderNotificationItem = (item, index) => (
    // <div className="notification-item" key={index}>
    //     <i className={item.icon}></i>
    //     <span>{item.content}</span>
    // </div>
    <Notification>
    <Ii className={item.icon}></Ii>
    <span>{item.content}</span>
</Notification>
)

const renderUserToggle = (user) => (
    // <div className="topnav__right-user">
    //     <div className="topnav__right-user__image">
    //         <img src={user.image} alt="" />
    //     </div>
    //     <div className="topnav__right-user__name">
    //         {user.display_name}
    //     </div>
    // </div>
    <User>
        <Image>
            <Img src={user.image} alt="" />
        </Image>
        <Name>
            {user.display_name}
        </Name>
    </User>
)

const renderUserMenu =(item, index) => (
    <Link to='/' key={index}>
        {/* <div className="notification-item">
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div> */}
        <Notification>
            <Ii className={item.icon}></Ii>
            <span>{item.content}</span>
        </Notification>

    </Link>
)

const Topnav = () => {
    return (
        // <div className='topnav'>
        //     <div className="topnav__search">
        //         <input type="text" placeholder='Search here...' />
        //         <i className='bx bx-search'></i>
        //     </div>
        //     <div className="topnav__right">
        //         <div className="topnav__right-item">
        //             {/* dropdown here */}
        //             <Dropdown
        //                 customToggle={() => renderUserToggle(curr_user)}
        //                 contentData={user_menu}
        //                 renderItems={(item, index) => renderUserMenu(item, index)}
        //             />
        //         </div>
        //         <div className="topnav__right-item">
        //             <Dropdown
        //                 icon='bx bx-bell'
        //                 badge='12'
        //                 contentData={notifications}
        //                 renderItems={(item, index) => renderNotificationItem(item, index)}
        //                 renderFooter={() => <Link to='/'>View All</Link>}
        //             />
        //             {/* dropdown here */}
        //         </div>
        //         <div className="topnav__right-item">
        //             <ThemeMenu/>
        //         </div>
        //     </div>
        // </div>
        <Container>
            <Search >
                <Input type="text" placeholder='Search here...' />
                <I className='bx bx-search'></I>
            </Search>
            <Right>
                <Right_item>
                    {/* dropdown here */}
                    <Dropdown
                        customToggle={() => renderUserToggle(curr_user)}
                        contentData={user_menu}
                        renderItems={(item, index) => renderUserMenu(item, index)}
                    />
                </Right_item>
                <Right_item>
                    <Dropdown
                        icon='bx bx-bell'
                        badge='12'
                        contentData={notifications}
                        renderItems={(item, index) => renderNotificationItem(item, index)}
                        renderFooter={() => <Link to='/'>View All</Link>}
                    />
                    {/* dropdown here */}
                </Right_item>
                <Right_item>
                    <ThemeMenu/>
                </Right_item>
            </Right>
        </Container>
    )
}

export default Topnav
