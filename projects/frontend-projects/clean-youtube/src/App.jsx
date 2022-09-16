import { Grid, Stack, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import { Container } from "@mui/system";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import NavBar from "./components/navbar";
import PlaylistCard from "./components/playlist-card-item";
import usePlaylist from "./hooks/usePlaylists";

const HomePage = ({ playlistArray }) => {
  return (
    <Stack>
      <Container maxWidth={"lg"} sx={{ my: 16 }}>
        <Grid container spacing={4}>
          {playlistArray.map((item) => (
            <Grid item key={item.playlistId} xs={12} sm={6} lg={3} md={4}>
              <PlaylistCard
                playlistThumbnail={item.playlistThumbnail}
                playlistId={item.playlistId}
                playlistTitle={item.playlistTitle}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Stack>
  );
};

const NotFound = () => {
  return (
    <Stack>
      <Container maxWidth={"lg"} sx={{ my: 16 }}>
        <Typography variant="h2" align="center">
          404 Not Found
        </Typography>
      </Container>
    </Stack>
  );
};

const PlayerPage = ({ playlists }) => {
  const { playlistId } = useParams();

  const current = playlists[playlistId];

  if (!current) return;

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        {current.playlistTitle}
      </Typography>
      <Typography variant="body1">{current.playlistDescription}</Typography>
    </Container>
  );
};

const App = () => {
  const { getPlaylistById, playlists } = usePlaylist();

  const playlistArray = Object.values(playlists);

  return (
    <BrowserRouter>
      <CssBaseline />
      <NavBar getId={getPlaylistById} />
      <Routes>
        <Route path="/" element={<HomePage playlistArray={playlistArray} />} />
        <Route
          path="/player/:playlistId"
          element={<PlayerPage playlists={playlists} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
