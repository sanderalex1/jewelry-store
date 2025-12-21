import { useState } from "react";
import { Drawer, Box, IconButton, InputBase, Button } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

const EmailBarStyles = {
  display: "flex",
  justifySelf: "center",
  MaxWidth: "24rem",
  backgroundColor: "#E0E0E0",
  padding: "0.5625rem 0.75rem",
  fontSize: "0.875rem",
  color: "#555",
  "&::placeholder": {
    color: "#9a9a9a",
    opacity: 1,
  },
};

const ButtonStyles = {
  backgroundColor: "#000000ff",
  borderRadius: 0,
  color: "#ffff",
  padding: "1rem",
  "&.Mui-disabled": {
    backgroundColor: "#0000003f",
    cursor: "not-allowed",
    color: "#ffff",
  },
};

function NewsPaperPanel({ open, onClose }) {
  const [email, setEmail] = useState("");

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const content = () => (
    <Box className="h-1/3 p-4 bg-[var(--bgColor)]" role="presentation">
      <Box className="flex flex-col gap-4">
        <IconButton
          sx={{ display: "flex", justifyContent: "flex-end" }}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
        <h1 className="main-font font-bold text-xs uppercase">
          GET THE LATEST NEWS ABOUT CELINE SHOWS, EXCLUSIVE LAUNCHS, NEWS AND
          EVENTS
        </h1>
        <InputBase
          lable="Email"
          value={email}
          placeholder="EMAIL"
          sx={EmailBarStyles}
          onChange={(e) => setEmail(e.target.value)}
          error={email.length > 0 && !isValidEmail}
          helperText={
            email.length > 0 && !isValidEmail
              ? "Please enter a valid email"
              : ""
          }
        />
        <Button sx={ButtonStyles} variant="filled" disabled={!isValidEmail}>
          register
        </Button>
        <p className="main-font text-xs">
          TO FIND OUT MORE ABOUT THE PROCESSING OF YOUR DATA AND YOUR RIGHTS,
          CONSULT OUR POLICIES{" "}
          <a className="underline" href="" target="_blank">
            HERE
          </a>{" "}
          AND{" "}
          <a className="underline" href="" target="_blank">
            HERE
          </a>
          .
        </p>
      </Box>
    </Box>
  );

  return (
    <Drawer anchor="bottom" open={open} onClose={onClose}>
      {content()}
    </Drawer>
  );
}

export default NewsPaperPanel;
