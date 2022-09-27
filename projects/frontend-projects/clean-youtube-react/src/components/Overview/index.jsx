import { Button } from "@mui/material";
import { useState } from "react";
import {
  MdOutlineFavoriteBorder,
  MdOutlineWatchLater,
  MdPlaylistPlay,
} from "react-icons/md";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link as RouterLink } from "react-router-dom";
import PlaylistCard from "../PlaylistCard";
import PlaylistForm from "../PlaylistFrom";
import { CustomLeftArrow, CustomRightArrow } from "./CarouselBtn";
import styles from "./Overview.module.scss";
useState;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1025 },
    items: 4,
  },
  laptop: {
    breakpoint: { max: 1024, min: 769 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 481 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 480, min: 0 },
    items: 1,
  },
};

const Overview = ({ type, playlists }) => {
  let header = "";
  let link = "";
  if (type === "playlist") {
    link = "/playlists";
    header = (
      <div className={styles.header}>
        <i>
          <MdPlaylistPlay />
        </i>
        <span> Playlists</span>
      </div>
    );
  } else if (type === "favorite") {
    link = "/favorites";
    header = (
      <div className={styles.header}>
        <i>
          <MdOutlineFavoriteBorder />
        </i>
        <span> Favorites</span>
      </div>
    );
  } else {
    link = "/recents";
    header = (
      <div className={styles.header}>
        <i>
          <MdOutlineWatchLater />
        </i>
        <span> Recents</span>
      </div>
    );
  }

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className={styles.overview}>
      <div className={styles.section_header}>
        {header}
        <div className={styles.see_more}>
          <Button to={link} component={RouterLink}>
            See All
          </Button>
        </div>
      </div>
      <div className={styles.overview_slider}>
        <Carousel
          responsive={responsive}
          customLeftArrow={<CustomLeftArrow />}
          customRightArrow={<CustomRightArrow />}
          itemClass={styles.carousel_item_padding}
        >
          {playlists.length > 0 ? (
            playlists.map((playlist) => (
              <PlaylistCard playlist={playlist} key={playlist.id} type={type} />
            ))
          ) : (
            <div>
              <h3>No Playlists</h3>
              {type === "playlist" && (
                <Button
                  variant="outlined"
                  sx={{ marginTop: "10px" }}
                  onClick={handleClickOpen}
                >
                  Add Playlist
                </Button>
              )}
            </div>
          )}
        </Carousel>
      </div>
      <PlaylistForm open={open} handleClose={handleClose} />
    </div>
  );
};

export default Overview;
