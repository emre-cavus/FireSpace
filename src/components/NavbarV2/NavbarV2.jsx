import React from 'react'
import '../../../dist/NavbarV2.module.css'

export const NavbarV2 = () => {
  return (
    <div className='main'>
      <div class="form-group has-search">
        <span class="fa fa-search form-control-feedback"></span>
        <input type="text" class="form-control" placeholder="Search" />
      </div>
    </div>
  )
}
