"use client"
import { Menu, UlLeft, UlRight } from "./Menu";

const MenuDesk = () => {
  return (
    <Menu>
      <h1>sneakers</h1>
      <UlLeft>
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </UlLeft>
      <UlRight>
        <li><img src="/images/icon-cart.svg" alt="cart"/><span>{}</span></li>
        <li><img src="/images/image-avatar.png" alt="perfil" /></li>
      </UlRight>
    </Menu>
  )
}

export default MenuDesk;