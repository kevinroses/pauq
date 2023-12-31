import React from "react";
import Countdown from "react-countdown";
import { styled } from "@mui/material/styles";
import { Box, Stack } from "@mui/system";
import { Typography } from "@mui/material";

const Container = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.whiteContainer.main,
  width: "42px",
  height: "42px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontWeight: "bold",
  borderRadius: "4px",
}));

// Random component
const Completionist = () => <span>this campaign is over</span>;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a complete state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="center"
        spacing={1}
      >
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Container>{days}</Container>
          <Typography color="text.secondary">DD</Typography>
        </Stack>
        <Typography>:</Typography>

        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Container>{hours}</Container>
          <Typography color="text.secondary">HH</Typography>
        </Stack>
        <Typography>:</Typography>
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Container>{minutes}</Container>
          <Typography color="text.secondary">MM</Typography>
        </Stack>
        <Typography>:</Typography>
        <Stack alignItems="center" justifyContent="center" spacing={1}>
          <Container>{seconds}</Container>
          <Typography color="text.secondary">SS</Typography>
        </Stack>
      </Stack>
    );
  }
};

const CustomCountdown = () => {
  return <Countdown date={Date.now() + 1500000000} renderer={renderer} />;
};

export default CustomCountdown;
