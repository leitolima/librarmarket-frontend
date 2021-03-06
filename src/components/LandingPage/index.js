import React from 'react';

import {
    Container,
} from './styles';
import Header from './Header';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Section from './Section';
import Footer from './Footer';

const LayoutPage = () => {
    return (
        <>
            <Header/>
            <Navbar/>
            <Container>
                <Sidebar/>
                <Section/>
            </Container>
            <Footer/>
        </>
    )
}

export default LayoutPage;
