import { Grid } from "@mui/material";
import { useStoreState } from "easy-peasy";
import PlaylistCard from "../../components/PlaylistCard";

const Playlists = () => {
  const { playlists } = useStoreState((state) => state.playlists);
  const playlistArray = Object.values(playlists);
  return (
    <div>
      <h1 style={{ margin: "30px 0" }}>All Playlists</h1>

      <div>
        <Grid container spacing={1}>
          {playlistArray.length > 0 ? (
            playlistArray.map((playlist) => (
              <Grid
                item
                xs={12}
                sm={6}
                lg={3}
                md={4}
                sx={{ marginBottom: "10px" }}
              >
                <PlaylistCard playlist={playlist} />
              </Grid>
            ))
          ) : (
            <h3>No Playlist</h3>
          )}
        </Grid>
      </div>
    </div>
  );
};

export default Playlists;
