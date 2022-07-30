import React from "react"
import { Box } from "@chakra-ui/react"
import MyMenuButton from "./MyMenuButton"
import MyThemeButton from "./MyThemeButton"

const Header: React.FC =  () => {
    return(
        <Box p={'20px 30px 0px 30px'} as='header' width={'100%'} display={'flex'} flexDir={'row'} justifyContent={'space-between'}>
            <MyThemeButton/>
            <MyMenuButton/>
        </Box>
    )
}

export default Header