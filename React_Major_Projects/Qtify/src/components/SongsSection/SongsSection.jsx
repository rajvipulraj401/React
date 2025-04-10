import React, { useEffect, useState } from "react";
import styles from "./SongsSection.module.css";
import axios from "axios";
import Carousel from "../Carousel/Carousel";
import { Tabs, Tab } from "@mui/material";

const SongsSection = () => {
  const [songs, setSongs] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSongs();
    fetchGenres();
  }, []);

  // 🎵 Fetch Songs API
  const fetchSongs = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/songs"
      );
      setSongs(response.data);
    } catch (err) {
      console.error("Error fetching songs:", err);
    } finally {
      setLoading(false);
    }
  };

  // 🎶 Fetch Genres API
  const fetchGenres = async () => {
    try {
      const response = await axios.get(
        "https://qtify-backend-labs.crio.do/genres"
      );
      // 🛠️ FIX: Convert object keys properly
      const genreList = response.data.data.map((genre) => ({
        id: genre.key, // Unique key
        label: genre.label,
      }));
      setGenres([{ id: "all", label: "All" }, ...genreList]); // Ensure "All" is also an object
    } catch (err) {
      console.error("Error fetching genres:", err);
    }
  };

  // 🎼 Filter Songs Based on Genre
  const filteredSongs =
    selectedGenre === "All"
      ? songs
      : songs.filter((song) => song.genre.label === selectedGenre);

  return (
    <div className={styles.section}>
      {/* 🎵 Title */}
      <div className={styles.sectionHeader}>
        <p className={styles.title}>Songs</p>
      </div>

      {/* 🏷️ Genre Tabs */}
      <Tabs
        value={selectedGenre}
        onChange={(event, newValue) => setSelectedGenre(newValue)}
        textColor="inherit"
        indicatorColor="primary"
        className={styles.tabs}
      >
        {genres.map((genre) => (
          <Tab
            key={genre.id}
            label={genre.label}
            value={genre.label}
            className={styles.tabItem}
          />
        ))}
      </Tabs>

      {/* ✅ Ensure song count matches API response */}
      <div className={styles.cardDisplay}>
        {loading ? (
          <p className={styles.loading}>Loading Songs...</p>
        ) : filteredSongs.length > 0 ? (
          <Carousel albums={filteredSongs} />
        ) : (
          <p className={styles.noSongs}>No songs available for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default SongsSection;
