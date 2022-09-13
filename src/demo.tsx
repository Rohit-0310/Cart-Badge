import * as React from "react";
import Badge from "@mui/joy/Badge";
import Typography from "@mui/joy/Typography";
import { Box } from "@mui/joy";

export default function SimpleBadge() {
  return (
    <Box>
      <Badge badgeContent={4} color="danger" variant="outlined">
        <Typography fontSize="xl">🛒</Typography>
      </Badge>
    </Box>
  );
}
