import React, { useRef, useState, useEffect } from "react";
import { Box, IconButton, Slider, Typography, useMediaQuery, useTheme } from "@mui/material";
import { PlayArrow, Pause, VolumeUp, VolumeOff, Replay } from "@mui/icons-material";

export default function CustomAudioPlayer({ src, sx }) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.6);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [loop, setLoop] = useState(false);

  const theme = useTheme()
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));

  const [display, setDisplay] = useState("100%");

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
      setDisplay("none");
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setProgress((audioRef.current.currentTime / duration) * 100);
    }
  };

  const handleSeek = (e, newValue) => {
    const newTime = (newValue / 100) * duration;
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
    setProgress(newValue);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  return (
    <Box sx={{ 
        bgcolor: "black", 
        color: "white", 
        p: 2, 
        borderRadius: 2, 
        minWidth: 300,
        ml: isLargeScreen? "none": "auto",
        mr: isLargeScreen? "none": "auto",
        display: `${display}`,
        ...sx
    }}>
      <p style={{
        marginLeft: "auto",
        marginRight: "auto",
        textAlign: "center"
      }}>
        A Thousand Years - Christina Perri
      </p>
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={() => {
          if (audioRef.current) {
            setDuration(audioRef.current.duration);
          }
        }}
        loop={loop}
      />
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        {/* Play/Pause Button */}
        <IconButton onClick={togglePlay} color="primary">
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Progress Bar */}
        <Slider
          value={progress}
          max={100}
          onChange={handleSeek}
          sx={{ flexGrow: 1,  color: "white", width: "100%" }}
        />
        <Typography variant="body2">{formatTime(audioRef.current?.currentTime || 0)}</Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
        {/* Volume Control */}
        <IconButton onClick={() => setVolume(volume === 0 ? 0.6 : 0)} color="primary">
          {volume > 0 ? <VolumeUp /> : <VolumeOff />}
        </IconButton>
        <Slider
          value={volume * 100}
          max={100}
          onChange={(e, newValue: number | number[], activeThumb: number) => setVolume(Array.isArray(newValue) ? newValue[0] / 100 : newValue / 100)}
          sx={{ width: "80%", color: "white" }}
        />
        {/* Loop Button */}
        <IconButton onClick={() => setLoop(!loop)} color={loop ? "secondary" : "primary"}>
          <Replay />
        </IconButton>
      </Box>
    </Box>
  );
}
