# Document Summarizer

A modern React application for uploading documents and generating instant summaries with a beautiful split-screen interface.

## Features

- 📄 Document upload with drag-and-drop support
- 📖 Split-screen layout for original content and summary
- 🤖 Automatic document summarization
- 📊 Document statistics (word count, sentences, paragraphs)
- 📱 Responsive design for all devices
- ⚡ Real-time processing with loading states
- 🎨 Modern UI with glass-morphism effects
- 🔄 Clear and reset functionality

## Getting Started

### Prerequisites

Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. Navigate to the frontend-app directory:
   ```bash
   cd frontend-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The application will open in your browser at `http://localhost:3000`.

## Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## Project Structure

```
frontend-app/
├── public/
│   ├── index.html          # Main HTML file
│   └── manifest.json       # PWA manifest
├── src/
│   ├── App.js             # Main App component with document processing
│   ├── App.css            # Split-screen layout and styling
│   ├── App.test.js        # Component tests
│   ├── index.js           # Application entry point
│   ├── index.css          # Global styles
│   ├── reportWebVitals.js # Performance monitoring
│   └── setupTests.js      # Test configuration
├── package.json           # Dependencies and scripts
└── README.md             # This file
```

## How It Works

### Document Upload
- Click the upload area or drag and drop a document
- Supports TXT, DOC, DOCX, and PDF files
- File content is read and displayed in the left panel

### Document Processing
- Automatic text extraction from uploaded files
- Real-time document analysis
- Generation of comprehensive summaries

### Summary Generation
- Word count and document statistics
- Key points extraction
- Intelligent content summarization
- Formatted output with emojis and structure

## Features Included

### UI Components
- **File Upload Area**: Drag-and-drop interface with visual feedback
- **Split-Screen Layout**: Side-by-side view of original and summary
- **Loading States**: Animated spinner during processing
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile

### Document Processing
- **Text Extraction**: Reads and displays document content
- **Statistics Analysis**: Counts words, sentences, and paragraphs
- **Summary Generation**: Creates structured summaries with key points
- **File Management**: Clear and reset functionality

### Styling
- Modern gradient background
- Glass-morphism effects with backdrop blur
- Smooth animations and transitions
- Professional color scheme
- Mobile-first responsive design

## Customization

### Adding New File Types
1. Update the `accept` attribute in the file input
2. Add file processing logic in `handleFileUpload`
3. Implement appropriate file readers for new formats

### Enhancing Summarization
1. Replace the simple summarization logic with AI/ML APIs
2. Add more sophisticated text analysis
3. Implement keyword extraction and sentiment analysis

### Styling Modifications
- Modify `App.css` for layout and component styles
- Update `index.css` for global styles
- Customize colors and effects in the CSS variables

### Adding Dependencies
```bash
npm install package-name
```

## Future Enhancements

- 🔗 Integration with AI summarization APIs (OpenAI, Hugging Face)
- 📁 Support for more document formats
- 💾 Save and export summaries
- 🔍 Advanced search and filtering
- 👥 User authentication and document history
- 🌐 Multi-language support

## Deployment

To build the app for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files ready for deployment.

## Learn More

- [React Documentation](https://reactjs.org/)
- [File API Documentation](https://developer.mozilla.org/en-US/docs/Web/API/File_API)
- [Create React App Documentation](https://facebook.github.io/create-react-app/)

## Contributing

Feel free to enhance this document summarizer with additional features and improvements! 