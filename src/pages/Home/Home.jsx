import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import { Content } from '../../components/Content/Content';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div>
      <Navbar />
      <SideMenu />
      <Content />
    </div>
  )
}
