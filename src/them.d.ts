
import React from 'react';

declare module '@mui/material/styles' {

    interface Theme {
        status: {
           error:  string,
           success: string,
        }
        background: {
            dark: string,
            light: string,
        }
    }
    interface ThemeOptions {
        status: {
            error: React.CSSProperties['color'],
            success: React.CSSProperties['color']
        }
        background: {
            dark: React.CSSProperties['color'],
            light: React.CSSProperties['color']
        }
    }
}