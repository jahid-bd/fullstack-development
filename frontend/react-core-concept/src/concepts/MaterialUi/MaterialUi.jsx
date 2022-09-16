import React from "react";
import {
  Button,
  IconButton,
  Checkbox,
  Typography,
  Rating,
  Switch,
  TextField,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

const MaterialUi = () => {
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  const [rating, setRating] = useState(1.5);
  const [display, setDisplay] = useState(false);
  return (
    <div>
      <h1>Hello I am Material Ui</h1>
      <div>
        <h3>Buttons</h3>
        <Button variant="text">Text</Button>
        <Button variant="contained" color="success" size="small">
          Text
        </Button>
        <Button variant="outlined" color="error" size="medium">
          Text
        </Button>
        <Button variant="contained" color="warning" size="large">
          Button
        </Button>
        <Button variant="outlined" endIcon={<SendIcon />}>
          Send
        </Button>
        <IconButton aria-label="delete" size="large">
          <DeleteIcon fontSize="inherit" />
        </IconButton>
      </div>
      <div>
        <h3>Checkbox</h3>
        <Checkbox {...label} defaultChecked />
        <Checkbox {...label} color="secondary" disableRipple />
      </div>
      <div>
        <Typography variant="h4">Rating</Typography>
        <Rating
          name={"simple controled"}
          value={rating}
          precision={0.5}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
        <Stack>
          <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} />
        </Stack>
      </div>
      <div>
        <Switch
          onChange={(event) => {
            if (display === true) {
              setDisplay(false);
            } else {
              setDisplay(true);
            }
          }}
        />
        {display ? <Typography>Hello world!</Typography> : ""}
      </div>
      <div>
        <h3>TextField</h3>
        <Stack spacing={2} direction={"row"}>
          <TextField label={"Outlined"} variant={"outlined"} />
          <TextField label={"Filled"} variant={"filled"} />
        </Stack>
        <Stack spacing={2} direction={"column"}>
          <TextField label={"Name"} variant={"standard"} type={"text"} />
          <TextField
            label={"Password"}
            variant={"standard"}
            type={"password"}
            color={"success"}
          />
          <TextField label={"Email"} type={"email"} />
        </Stack>
      </div>
    </div>
  );
};

export default MaterialUi;
