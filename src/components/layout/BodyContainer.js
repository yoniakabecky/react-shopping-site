import React from "react";

const styles = {
  flex: "1 0 auto"
};

const BodyContainer = ({ children }) => {
  return <main style={styles}>{children}</main>;
};

export default BodyContainer;
