import React, {useEffect} from 'react'
import styled from 'styled-components'
import Sidebar from '../sidebar/Sidebar'
import TopNav from '../topnav/TopNav'
import Routes from '../Routes'

import { BrowserRouter, Route } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import ThemeAction from '../../redux/actions/ThemeAction'

const Container = styled.div`
    color: var(--txt-color);
`;
const Content = styled.div`
    padding-left: var(--sidebar-width);
    background-color: var(--second-bg);
    min-height: 100vh;
`;
const Main = styled.div`
    padding: 30px;
`;

const Layout = () => {

    const themeReducer = useSelector(state => state.ThemeReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        const themeClass = localStorage.getItem('themeMode', 'theme-mode-light')

        const colorClass = localStorage.getItem('colorMode', 'theme-mode-light')

        dispatch(ThemeAction.setMode(themeClass))

        dispatch(ThemeAction.setColor(colorClass))
    }, [dispatch])

    return (
        <BrowserRouter>
            <Route render={(props) => (
                // <Container className={`layout ${themeReducer.mode} ${themeReducer.color}`}>
                //     <Sidebar {...props}/>
                //     <div className="layout__content">
                //         <TopNav/>
                //         <div className="layout__content-main">
                //             <Routes/>
                //         </div>
                //     </div>
                // </Container>
                <Container >
                    <Sidebar {...props}/>
                    <Content className=" ">
                       <TopNav/>
                        <Main className=" ">
                            <Routes/>
                        </Main>
                    </Content>
                </Container>
            )}/>
        </BrowserRouter>
    )
}

export default Layout
