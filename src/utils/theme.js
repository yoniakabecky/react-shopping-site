const primaryColor = "#4caf50";
const secondaryColor = "#ef6c00";

export default {
  palette: {
    primary: {
      main: primaryColor,
      contrastText: "#eee"
    },
    secondary: {
      main: secondaryColor,
      light: "#fff3e0",
      contrastText: "#eee"
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
