import { AddIcon, EditIcon, ExternalLinkIcon, HamburgerIcon, RepeatIcon } from "@chakra-ui/icons"
import { IconButton, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import React from "react"


class MyMenuButton extends React.Component {
  render() {
    return (
      <Menu isLazy>
        <MenuButton
          as={IconButton}
          aria-label='Options'
          icon={<HamburgerIcon />}
          variant='outline'
          width={'40px'}
          height={'40px'}
        />
        <MenuList>
          <MenuItem icon={<AddIcon />} command='⌘T'>
            New Tab
          </MenuItem>
          <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command='⌘O'>
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>

    )
  }
}

export default MyMenuButton
