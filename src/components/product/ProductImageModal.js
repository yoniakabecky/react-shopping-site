import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import IconButton from "@material-ui/core/IconButton";

import CloseIcon from "@material-ui/icons/Close";
import LeftIcon from "@material-ui/icons/ChevronLeft";
import RightIcon from "@material-ui/icons/ChevronRight";

const ProductImageModal = ({
  modal: { open, leftClick, rightClick },
  image,
  handleClose,
  changeImage
}) => {
  const classes = useStyles();

  return (
    <Modal disableEnforceFocus open={open} onClose={handleClose}>
      <>
        <IconButton onClick={handleClose}>
          <CloseIcon color="primary" className={classes.modalCloseIcon} />
        </IconButton>
        {leftClick ? (
          <IconButton onClick={() => changeImage("left")}>
            <LeftIcon color="primary" className={classes.modalLeftIcon} />
          </IconButton>
        ) : null}
        {rightClick ? (
          <IconButton onClick={() => changeImage("right")}>
            <RightIcon color="primary" className={classes.modalRightIcon} />
          </IconButton>
        ) : null}
        <div className={classes.modalImageWrapper}>
          <img src={image} alt="detail" className={classes.modalImage} />
        </div>
      </>
    </Modal>
  );
};

const modalIconsStyle = {
  width: "10vw",
  height: "10vw",
  maxWidth: "3rem",
  maxHeight: "3rem",
  background: "rgba(0, 0, 0, 0.5)",
  position: "fixed",
  zIndex: 10
};

const useStyles = makeStyles(theme => ({
  ...theme.global,
  modalImageWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)"
  },
  modalImage: {
    maxWidth: "80vw",
    maxHeight: "90vh",
    objectFit: "cover"
  },
  modalCloseIcon: {
    ...modalIconsStyle,
    width: "2rem",
    height: "2rem",
    top: 0,
    right: 0
  },
  modalLeftIcon: {
    ...modalIconsStyle,
    top: "50%",
    left: 0
  },
  modalRightIcon: {
    ...modalIconsStyle,
    top: "50%",
    right: 0
  }
}));

export default ProductImageModal;
