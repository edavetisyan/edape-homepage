import { ComponentStyleConfig } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyle: ComponentStyleConfig = {
  // style object for base or default style
  baseStyle: {},
  // styles for different sizes ("sm", "md", "lg")
  sizes: {},
  // styles for different visual variants ("outline", "solid")
  variants: {
    primary: (props) => ({
      bg: mode('nord7', 'nord10')(props),
      color: mode('nord0', 'nord6')(props),
      width: '130px',
      height: '40px',
      fontSize: '18px',
      textTransform: 'capitalize',
      _hover: {
        bg: mode('nord4', 'nord0')(props),
        width: '140px',
        height: '50px',
        transition: 'all 500ms ease-in-out',
      }
    })
  },
  // default values for 'size', 'variant' and 'colorScheme'
  defaultProps: {
    size: '',
    variant: '',
    colorScheme: '',
  },
}

