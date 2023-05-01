import PhoneForm from "@/component/login/PhoneForm";
import useIsLargeView from "@/utils/useIsLarge";
import { Dialog } from "@mui/material";
import dynamic from "next/dynamic";
import { useCallback, useState } from "react";
import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

const NavbarComponent = dynamic(() => import("@/component/homepage/Navbar"));

/**
 * A functional component that renders a login page.
 * @returns {JSX.Element} - The JSX code that renders the login page.
 */
export default function Login() {
  const isLarge = useIsLargeView();
  const [loginPopUp, setLoginPopup] = useState(true);
  const handleModalClose = useCallback(() => {
    setLoginPopup(false);
  }, []);
  return (
    <>
      <NavbarComponent />
      <CustomizedDialogs />
    </>
  );
}

/**
 * A styled component that extends the Dialog component from Material-UI. It applies
 * custom styles to the Dialog's content and actions.
 * @param {Object} theme - The theme object from Material-UI.
 * @returns A styled Dialog component with custom styles applied to its content and actions.
 */
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

/**
 * Interface for the props of a DialogTitle component.
 * @interface
 * @property {string} id - The id of the DialogTitle component.
 * @property {React.ReactNode} [children] - The child elements of the DialogTitle component.
 * @property {() => void} onClose - The function to call when the DialogTitle is closed.
 */
export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}

/**
 * A component that renders a dialog title with an optional close button.
 * @param {DialogTitleProps} props - The props object containing the children and onClose function.
 * @returns A DialogTitle component with an optional close button.
 */
function BootstrapDialogTitle(props: DialogTitleProps) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        ></IconButton>
      ) : null}
    </DialogTitle>
  );
}

/**
 * A component that renders a customized dialog box.
 * @returns {JSX.Element} - A JSX element that represents the dialog box.
 */
function CustomizedDialogs() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open dialog
      </Button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
          Modal title
        </BootstrapDialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
            ac consectetur ac, vestibulum at eros.
          </Typography>
          <Typography gutterBottom>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
            auctor.
          </Typography>
          <Typography gutterBottom>
            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
            dui. Donec ullamcorper nulla non metus auctor fringilla.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}
