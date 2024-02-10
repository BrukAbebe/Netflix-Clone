import React from 'react'
import "./home.css";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Banner from '../../components/Banner/Banner';
import RowList from '../../components/Rows/Row List/RowList';

function Home() {
  return (
    <>
    <Header />
    <Banner />
    <RowList />
    <Footer />
    </>
  )
}

export default Home