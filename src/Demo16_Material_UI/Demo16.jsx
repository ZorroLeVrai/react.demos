import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function Demo16() {
  const [rating, setRating] = useState(null);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log({ rating, comment });
  };

  const isDisabled = rating === null || comment === "";

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      height="100vh"
    >
      <Typography variant="h4">Choose your rating</Typography>
      <Rating
        name="rating"
        defaultValue={0}
        onChange={(_, value) => setRating(value)}
      />
      <TextField
        id="comment"
        label="Enter your comment"
        variant="outlined"
        onChange={(e) => setComment(e.target.value)}
      />
      <Button
        disabled={isDisabled}
        variant="contained"
        color="primary"
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </Box>
  );
}

export default Demo16;
