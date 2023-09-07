import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { useMediaQuery } from 'react-responsive';
import pageData from "../data/imageList.json";

export default function QuiltedImageList() {
  const isSmallScreen = useMediaQuery({ maxWidth: 768 });

  const cols = isSmallScreen ? 2 : 3;

  return (
    <div className="flex max-w-[1442px] mx-auto">
      <div className="w-[100%] p-[8px] md:p-0 bg-transparent">
        <ImageList variant="masonry" cols={cols} gap={8}>
          {pageData.map((item) => (
              <ImageListItem key={item.img}>
                <img
                    src={`${item.img}?w=248&fit=crop&auto=format`}
                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={item.title}
                    loading="lazy"
                />
              </ImageListItem>
          ))}
        </ImageList>
      </div>
    </div>
  );
}
