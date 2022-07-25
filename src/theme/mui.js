import { createTheme } from "@mui/material/styles";

import colors from "./colors";
import breakpoints from "./breakpoints";

const mui = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.textLight,
      secondary: colors.textDark,
    },
  },
  typography: {
    fontFamily: "ProximaNova, Helvetica, Arial, serif",
    h1: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "2.8rem",
      color: colors.textLight,
      lineHeight: 1,
      letterSpacing: "-1px",
      fontWeight: 500,
    },
    h2: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.8rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-0.75px",
    },
    h3: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.6rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h4: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "1.4rem",
      color: colors.textLight,
      lineHeight: 1.2,
      letterSpacing: "-1px",
    },
    h6: {
      fontFamily: "Helvetica Neue, Helvetica, Arial, serif",
      fontSize: "0.75rem",
      color: colors.textLight,
      lineHeight: 1.57,
      letterSpacing: "2.5px",
      textTransform: "uppercase"
    },
    body1: {
      color: colors.textLight,
      lineHeight: 1.4,
    },
    body2: {
      fontSize: "1rem",
      color: colors.textLight,
    },
    caption: {
      fontWeight: 500,
      letterSpacing: "1px",
      fontSize: "0.6rem",
      lineHeight: 1,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          paddingTop: "80px",
          background: colors.secondaryVariant2,
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
          borderBottom: `1px solid ${colors.secondaryVariant1}`,
        },
      },
    },
    MuiToolbar: {
      styleOverrides: {
        root: {
          height: 80,
        },
      },
    },
    MuiSelect: {
      styleOverrides: {
        select: {
          backgroundColor: 'rgb(36, 51, 65)',
          padding: "8px",
          color: colors.textLight,
          fontSize: '14px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          fontSize: "0.6rem",
          fontWeight: "bold",
          borderRadius: "30px",
          letterSpacing: "1px",
          padding: "12px 28px",
        },
        outlinedPrimary: {
          borderWidth: "2px",
          color: colors.primary,

          "&:hover": {
            borderWidth: "2px",
          },
        },
      },
    },
    MuiFormControl: {
      styleOverrides: {
        root: {
          display: 'inline-flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '0px',
          border: '0px',
          verticalAlign: 'top',
          marginBottom: '20px',
          width: '100%',
          [breakpoints.breakpoints.up('desktop')]: {
            marginLeft: '20px',
            width: 'auto',
            minWidth: '150px',
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          border: '1px solid',
          borderColor: colors.textDark,
        },
      },
    },
    MuiList: {
      styleOverrides: {
        root: {
          background: 'rgb(36, 51, 65)',
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          background: 'rgb(36, 51, 65)',
        },
      },
    },
  },
});

export default mui;
