DOC to PDF Converter
A full-stack web application that allows users to upload .doc files and convert them into .pdf files.

Features
✅ Upload .doc files
✅ Convert .doc to .pdf
✅ Download the converted file
✅ User authentication (if implemented)
✅ Error handling and validation

Tech Stack
Frontend: HTML, CSS, JavaScript (React if applicable)
Backend: Node.js, Express.js
File Handling: Multer for file uploads
Conversion: pdf-lib or mammoth for DOC to PDF conversion
Database: MongoDB (if user authentication is required)
Setup & Installation
Clone the repository:
bash
Copy
Edit
git clone https://github.com/your-username/doc-to-pdf-converter.git
cd doc-to-pdf-converter
Install dependencies:
bash
Copy
Edit
npm install
Set up environment variables in a .env file:
env
Copy
Edit
PORT=5000
JWT_SECRET=your_secret_key
MONGO_URI=your_mongo_connection_string
Start the server:
bash
Copy
Edit
npm start
Usage
Navigate to http://localhost:5000
Upload a .doc file
Click "Convert" to get the PDF
Download the converted file
Future Enhancements
🔹 Support for additional file formats (DOCX, TXT)
🔹 Email notifications with the converted PDF
🔹 Drag & Drop file upload
