import { extendTheme } from '@chakra-ui/react';

const customColors = {
  customBlue: {
    50: '#e6f2f8',  // Lightest shade
    100: '#c2daea',
    200: '#9cc2dc',
    300: '#76abce',
    400: '#5294c0',
    500: '#6b9ebd',  // Base color
    600: '#487c95',
    700: '#365b6d',
    800: '#233b46'
  },
  // You can define more color palettes here
};
export const theme = extendTheme({
  fonts: {
    heading: 'Sen, sans-serif', // Use Sen for headings
    body: 'Sen, sans-serif', // Use Sen for body text
  },
  colors: customColors,
  components: {
    Button: {
      baseStyle: {
        borderRadius: 'sm', // Apply small border radius to all buttons
      },
      variants: {
        outlineCustom: {
          border: '2px solid',
          borderRadius: 'sm',
          borderColor: 'customBlue.500', // Use the base color for the border
          color: 'white',
          _hover: {
            borderColor: 'customBlue.700',
            bg: 'customBlue.700', // Optional: change background on hover
            color: 'white',
          },
        },
      },
    },
  }
});

