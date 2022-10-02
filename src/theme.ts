import { createTheme, colors } from "@mui/material";

export const theme = createTheme({
    status: {
        error: '#e53e3e',
        success: '#fffde3',
    },
    background: {
        light: '#eee',
        dark: '#666'
    },
    palette: {
     primary: {
         main: colors.blue[500],
     },
     secondary: {
         main: colors.green[500],
     }   
 }
});

