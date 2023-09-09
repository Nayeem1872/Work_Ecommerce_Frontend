const images = [
    {
      id: 1,
      title: 'Image 1',
      location: '/images.jpeg'
    },
    {
        id: 2,
        title: 'Image 2',
        location: '/1.webp'
      },
    {
        id: 2,
        title: 'Image 2',
        location: '/1.webp'
      },
    {
        id: 2,
        title: 'Image 2',
        location: '/1.webp'
      },
    {
        id: 2,
        title: 'Image 2',
        location: '/1.webp'
      },
    {
        id: 2,
        title: 'Image 2',
        location: '/1.webp'
      },
    // Add more image objects as needed
  ];
  
  export default function handler(req, res) {
    res.status(200).json(images);
  }