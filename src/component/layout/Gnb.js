import React from 'react'
import { Dropdown, Menu } from 'semantic-ui-react'

const MenuExampleDropdownItem = () => (
  <Menu vertical>
    <Dropdown item text='Categories'>
      <Dropdown.Menu>
        <Dropdown.Item>메뉴1</Dropdown.Item>
        <Dropdown.Item>메뉴2</Dropdown.Item>
        <Dropdown.Item>메뉴3</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  </Menu>
)

export default MenuExampleDropdownItem
