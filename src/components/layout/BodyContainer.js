import React from "react";

const styles = {
  flex: "1 0 auto"
};

const BodyContainer = ({ children }) => {
  return <div style={styles}>{children}</div>;
};

export default BodyContainer;
