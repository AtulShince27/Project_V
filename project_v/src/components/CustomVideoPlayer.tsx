import React, { useRef, useState } from "react";
import { Box, IconButton, Slider } from "@mui/material";
import { PlayArrow, Pause, Fullscreen, VolumeUp, VolumeOff, Replay } from "@mui/icons-material";

export default function CustomVideoPlayer({ src }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(0.6);
  const [loop, setLoop] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current?.pause();
    } else {
      videoRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setProgress((videoRef.current.currentTime / videoRef.current.duration) * 100);
    }
  };

  const handleSeek = (e, newValue) => {
    if (videoRef.current) {
      const newTime = (newValue / 100) * videoRef.current.duration;
      videoRef.current.currentTime = newTime;
    }
    setProgress(newValue);
  };

  const toggleFullscreen = () => {
    if (videoRef.current && videoRef.current.requestFullscreen) {
      videoRef.current.requestFullscreen();
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", maxWidth: 600, mx: "auto" }}>
      <video
        ref={videoRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        className="w-full rounded-lg"
        loop={loop}
      />
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          bgcolor: "rgba(0, 0, 0, 0.6)",
          p: 1,
          display: "flex",
          alignItems: "center",
          gap: 1,
          borderRadius: "0px 0px 16px 16px"
        }}
      >
        {/* Play/Pause Button */}
        <IconButton onClick={togglePlay} color="primary">
          {isPlaying ? <Pause /> : <PlayArrow />}
        </IconButton>

        {/* Progress Bar */}
        <Slider
          value={progress}
          max={100}
          onChange={handleSeek}
          sx={{ flex: 1, color: "white" }}
        />

        {/* Volume Control */}
        <IconButton onClick={() => setVolume(volume === 0 ? 0.6 : 0)} color="primary">
          {volume > 0 ? <VolumeUp /> : <VolumeOff />}
        </IconButton>

        {/* Loop Button */}
        <IconButton onClick={() => setLoop(!loop)} color={loop ? "secondary" : "primary"}>
          <Replay />
        </IconButton>

        {/* Fullscreen Toggle */}
        <IconButton onClick={toggleFullscreen} color="primary">
          <Fullscreen />
        </IconButton>
      </Box>
    </Box>
  );
}
