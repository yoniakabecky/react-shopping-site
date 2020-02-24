import orange from "@material-ui/core/colors/orange";

const primaryColor = "#4caf50";
const secondaryColor = "#ef6c00";
const secondaryLight = orange[50];
const errorColor = "#FB2845";

export default {
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#eee"
    },
    secondary: {
      main: secondaryColor,
      light: secondaryLight,
      contrastText: "#eee"
    },
    error: {
      main: errorColor
    }
  },
  fonts: {
    title: {
      fontFamily: "Niconne, cursive"
    }
  },
  global: {
    hr: {
      width: "5rem",
      height: 2,
      border: "none",
      background: secondaryColor
    },
    container: {
      width: "95vw",
      maxWidth: "80rem",
      margin: "0 auto"
    },
    title: {
      fontFamily: "Niconne, cursive",
      textTransform: "capitalize",
      fontSize: "3.5rem",
      margin: "2rem auto"
    },
    sectionBody: {
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "space-evenly",
      margin: "2rem auto 5rem auto"
    }
  }
};
