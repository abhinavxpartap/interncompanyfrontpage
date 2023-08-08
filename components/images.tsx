import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}
const itemData = [
  {
    img: '/imagelist1.svg',
    title: 'Breakfast',
    rows: 1,
    cols: 2,
  },
  {
    img: '/imagelist2.svg',
    title: 'Burger',
    rows: 2,
    cols: 3,
  },
  {
    img: '/imagelist3.svg',
    title: 'Camera',
    rows: 3,
    cols: 4,
  },
  {
    img: '/imagelist4.svg',

    title: 'Coffee',
    cols: 4,
    rows: 1,
  },
  {
    img: '/imagelist5.svg',

    title: 'Coffee',
    cols: 1,
    rows: 1,
  },
  {
    img: '/imagelist6.svg',
    title: 'Honey',
    rows: 1,
    cols: 2,
  },
  {
    img: '/imagelist7.svg',
    title: 'Basketball',
    rows: 2,
    cols: 3,
  },
  {
    img: '/imagelist8.svg',
    title: 'Basketball',
    rows: 1,
    cols: 2,
  },
  {
    img: '/imagelist9.svg',
    title: 'Basketball',
    rows: 1,
    cols: 5,
  },
  {
    img: '/imagelist10.svg',
    title: 'Basketball',
    rows: 1,
    cols: 2,
  },
];

export default function QuiltedImageList() {
  return (
    <div className="flex max-w-[1442px] mx-auto">
      <ImageList variant="quilted" cols={14} rowHeight={181}>
        {itemData.map((item) => (
          <ImageListItem
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
          >
            <img
              {...srcset(item.img, 121, item.rows, item.cols)}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}
