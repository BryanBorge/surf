import { Box, Typography, Stack, Button, IconButton, Link, useTheme, Container } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmailIcon from "@mui/icons-material/Email";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import { useMediaQuery } from "@mui/material";

export const Footer = () => {
  const theme = useTheme();
  const smallMobileAndDown = useMediaQuery(theme.breakpoints.down("sm"));

  const SocialIcons = (
    <Stack direction="row" alignItems="center" spacing={1}>
      <Link href="https://www.linkedin.com/in/bryan-borgesano/" target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <LinkedInIcon fontSize="inherit" />
        </IconButton>
      </Link>
      <Link href="https://github.com/BryanBorge" target="_blank" rel="noreferrer">
        <IconButton color="primary">
          <GitHubIcon fontSize="inherit" />
        </IconButton>
      </Link>
    </Stack>
  );

  return (
    <Box sx={{ py: 2, borderTop: 1, borderTopColor: "rgba(0, 0, 0, .1)" }}>
      <Container maxWidth="lg">
        <Box
          display="flex"
          justifyContent={smallMobileAndDown ? "center" : "space-between"}
          alignItems="flexStart"
          flexWrap="wrap">
          <Stack>
            <Stack direction="row" alignItems="center" spacing={1}>
              <IconButton color="primary" disabled>
                <LocationOnIcon color="secondary" />
              </IconButton>
              <Link
                href="https://www.google.com/maps/place/Long+Island/"
                target="_blank"
                rel="noreferrer"
                underline="hover"
                variant="caption">
                Long Island, New York
              </Link>
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton color="primary" disabled>
                <EmailIcon color="secondary" />
              </IconButton>
              <Link href="mailto:BryanBorgesano97@gmail.com" underline="hover" variant="caption">
                BryanBorgesano97@gmail.com
              </Link>
            </Stack>
          </Stack>
          <Box display="flex" flexDirection="column" justifyContent="flex-end" pt={smallMobileAndDown && 2}>
            <Box display="flex" flexDirection="column" justifyContent="flex-end" style={{ width: "300px" }}>
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={1}>
                <Typography variant="caption" gutterBottom color="secondary">
                  Connect with me
                </Typography>
                {SocialIcons}
              </Stack>
              <Link
                href="https://github.com/BryanBorge/surf"
                underline="hover"
                sx={{ opacity: 0.5 }}
                target="_blank"
                rel="noreferrer">
                <Stack>
                  <Typography variant="caption">Designed and Developed By Bryan Borgesano</Typography>
                  <Typography variant="caption">Last Updated: 10/22/2022</Typography>
                </Stack>
              </Link>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
