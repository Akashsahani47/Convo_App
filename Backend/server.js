const express = require('express');
const multer = require('multer');
const docxtoPDF = require('docx-pdf');
const path = require('path');
const cors = require("cors")

const server = express(); // Use `app` instead of `server`
server.use(cors());
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads');
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, file.originalname); // Use `file.originalname`
  }
});

const upload = multer({ storage: storage });

server.post('/convertFile', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file has been uploaded" });
    }

    let outputPath = path.join(__dirname, "files", `${req.file.originalname}.pdf`);

    docxtoPDF(req.file.path, outputPath, (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Error converting docx to pdf" });
      }

      res.download(outputPath, () => {
        console.log("File Downloaded");
      });

      console.log('Conversion result:', result);
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
