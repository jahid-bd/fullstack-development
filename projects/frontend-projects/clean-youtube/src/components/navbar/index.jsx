import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { Stack, Container, Button } from "@mui/material";
import PlaylistForm from "../playlist-form";
import { Link as RouterLink } from "react-router-dom";
import Link from "@mui/material/Link";

const NavBar = ({ getId }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const getPlayListId = (state) => {
    getId(state);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 1 }}>
        <Container maxWidth={"lg"}>
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to={"/"}
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <Typography variant="h4" component="div">
                  Clean YouTube
                </Typography>
              </Link>
              <Link
                href="http://stacklearner.com"
                target={"_blank"}
                sx={{ textDecoration: "none", color: "black" }}
              >
                {" "}
                <Typography variant="body1">By Stack Learner</Typography>
              </Link>
            </Stack>
            <Button variant="contained" onClick={handleClickOpen}>
              ADD PLAYLIST
            </Button>
            <PlaylistForm
              open={open}
              handleClose={handleClose}
              getPlaylistId={getPlayListId}
            />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default NavBar;
