import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";

const PlaylistCard = ({
  playlistThumbnail,
  playlistTitle,
  chanelTitle,
  playlistId,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        margin: "1",
      }}
    >
      <CardActionArea component={Link} to={`/player/${playlistId}`}>
        <CardMedia
          component="img"
          height="140"
          image={playlistThumbnail.url}
          alt={playlistTitle}
        />
        <CardContent>
          <Typography variant="h6" color="text.primary">
            {`${
              playlistTitle.length > 50
                ? playlistTitle.substr(0, 50) + "..."
                : playlistTitle
            }`}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {chanelTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
      <Box sx={{ flexGrow: 1 }}></Box>

      <CardActions>
        <Button
          size="small"
          color="primary"
          component={Link}
          to={`/player/${playlistId}`}
        >
          <PlayCircleOutlineIcon />
          <Typography variant="p" sx={{ ml: "3px" }}>
            Play Tutorial
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaylistCard;
