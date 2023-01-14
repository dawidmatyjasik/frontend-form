import { Box, MenuItem, MenuList, Popover, Typography } from "@mui/material";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/config";

interface IPopover {
  anchorEl: any;
  onClose: (props: any) => void;
  open: boolean;
}

export const AccountPopover = (props: IPopover) => {
  const { anchorEl, onClose, open, ...other } = props;
  const navigate = useNavigate();
  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "300px" },
      }}
      {...other}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">Account</Typography>
        <Typography color="text.secondary" variant="body2">
          John Doe
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem onClick={handleLogout}>Sign out</MenuItem>
      </MenuList>
    </Popover>
  );
};
