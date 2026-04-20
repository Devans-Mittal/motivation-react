# Daily Motivation App

A simple React application that displays random inspirational quotes and allows users to save their favorite quotes for later reference.

## Features

- **Random Quotes**: Fetches inspirational quotes from a public API
- **Like System**: Save quotes you love to your personal collection
- **Search Functionality**: Search through your liked quotes by quote text or author
- **Local Storage**: Your liked quotes persist between sessions
- **Responsive Design**: Clean, modern UI that works on all devices

## Tech Stack

- **React 19** - UI library
- **Vite** - Build tool and development server
- **DummyJSON API** - Free REST API for quotes
- **Local Storage** - Client-side data persistence

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd viteReact
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Usage

### Getting Started
- The app loads with a random inspirational quote
- Click the "Like" button (❤️) to save quotes you enjoy
- Click "New Quote" to fetch another random quote

### Managing Liked Quotes
- View all your liked quotes in the "Liked Quotes" section
- Use the search bar to find specific quotes by text or author
- Quotes are automatically saved to your browser's local storage

## Project Structure

```
src/
├── components/
│   └── LikedQuotes.jsx    # Component for displaying and searching liked quotes
├── App.jsx                # Main app component with quote fetching and like functionality
├── App.css                # Main styles
├── index.css              # Global styles
└── main.jsx               # App entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## API

This app uses the [DummyJSON Quotes API](https://dummyjson.com/docs/quotes) to fetch random quotes. No API key required.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test your changes
5. Submit a pull request

## License

This project is for educational purposes.
