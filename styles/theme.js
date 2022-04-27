import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    breakpoints: {
        sm: "320px",
        md: "768px",
        lg: "960px",
        xl: "1200px",
    },
    colors: {
        gray: {
            50: '#f7fafc',
            900: '#171923',
        },
        fonts: {
            body: "system-ui, sans-serif",
            heading: "Georgia, serif",
            mono: "Menlo, monospace",
        },
    }
})

export default theme;