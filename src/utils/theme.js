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
    }
  }
};
