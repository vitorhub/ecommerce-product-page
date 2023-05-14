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
        <li>{"estado no carrinho com menu suspenso"}</li>
        <li>foto do perfil</li>
      </UlRight>
    </Menu>
  )
}

export default MenuDesk;