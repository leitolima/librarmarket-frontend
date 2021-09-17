import React from 'react';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

import {
    Main,
    MainContainer,
    Section,
    Article,
} from './styles';

const Layout = ({ children }) => {
    return (
        <Main>
            <MainContainer>
                <Sidebar/>
                <Section>
                    <Navbar/>
                    <Article>
                        { children }
                    </Article>
                </Section>
            </MainContainer>
        </Main>
    )
}

export default Layout;
