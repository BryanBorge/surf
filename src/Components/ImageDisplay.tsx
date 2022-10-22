import React from "react";
import {
  ImageList,
  ImageListItem,
  ImageListItemBar,
  IconButton,
  Button,
  useTheme,
  Tooltip,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import { SurfImageList } from "../ImageData";
import { SectionTitle } from "./SectionTitle";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import { useScrollToTop } from "../hooks/useScrollToTop";

export const ImageDisplay = () => {
  const { showButton, scrollToTop } = useScrollToTop();

  return (
    <>
      {SurfImageList.map(data => {
        return (
          <>
            <SectionTitle title={data.sectionTitle} secondaryText={data.location} />
            <ImageList
              sx={{ width: "100%", height: "100%" }}
              variant="quilted"
              cols={4}
              rowHeight={121}
              key={data.key}>
              {data.images.map(item => (
                <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
                  <img src={item.img} alt={item.location} loading="lazy" />
                  <ImageListItemBar
                    subtitle={item.date}
                    actionIcon={
                      <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }} size="medium">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    }
                  />
                </ImageListItem>
              ))}
            </ImageList>
          </>
        );
      })}
      {!showButton && (
        <Tooltip title="Back to top" placement="top">
          <IconButton
            size="large"
            sx={{ position: "fixed", bottom: "20%", right: "5%" }}
            onClick={scrollToTop}>
            <ArrowCircleUpIcon fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      )}
    </>
  );
};
