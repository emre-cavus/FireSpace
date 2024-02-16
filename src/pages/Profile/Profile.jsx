import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar';
import { SideMenu } from '../../components/SideMenu/SideMenu';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Profile = () => {
  return (
    <div>
      <Navbar />
      <SideMenu />
    </div>
  )
}
