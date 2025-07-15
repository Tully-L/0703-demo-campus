import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();
const port = 3000;

// Enable CORS for frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:5175', 'http://localhost:5176'],
  methods: ['GET']
}));

// Serve static files from the gallery directory
app.use('/gallery', express.static(path.join(__dirname, '../../public/gallery')));

// Get gallery contents
app.get('/api/gallery', (req, res) => {
  try {
    const galleryPath = path.join(__dirname, '../../public/gallery');
    const files = fs.readdirSync(galleryPath);
    
    const mediaItems = files
      .filter(file => {
        const ext = path.extname(file).toLowerCase();
        return ['.jpg', '.jpeg', '.png', '.gif', '.mp4', '.webm'].includes(ext);
      })
      .map(file => {
        const ext = path.extname(file).toLowerCase();
        return {
          id: file,
          name: file,
          type: ['.mp4', '.webm'].includes(ext) ? 'video' : 'image',
          url: `/gallery/${file}`,
          previewUrl: `/gallery/${file}`
        };
      });

    res.json({ files: mediaItems });
  } catch (error) {
    console.error('Error reading gallery directory:', error);
    res.status(500).json({ error: 'Failed to read gallery contents' });
  }
});

app.listen(port, () => {
  console.log(`Backend server running at http://localhost:${port}`);
}); 