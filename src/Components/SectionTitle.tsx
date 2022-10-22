import { Typography, Stack, Box, useTheme } from "@mui/material";
import React from "react";

/**
 * Renders sticky section header with main text, secondary text
 * and "active" box on the left
 * @param title string
 * @param secondaryText string
 * @returns
 */
export const SectionTitle = ({ title, secondaryText }: { title: string; secondaryText: string }) => {
  const theme = useTheme();
  return (
    <Stack
      direction="row"
      alignItems="center"
      sx={{
        position: "sticky",
        top: 0,
        zIndex: 1100,
        bgcolor: theme.palette.background.default,
        py: theme.spacing(1),
      }}>
      <Box
        sx={{
          height: "60px",
          width: "5px",
          backgroundColor: theme.palette.primary.main,
          borderRadius: "99px",
          mr: theme.spacing(1),
        }}
      />
      <Stack>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="caption" gutterBottom>
          {secondaryText}
        </Typography>
      </Stack>
    </Stack>
  );
};
