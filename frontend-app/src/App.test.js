import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders document summarizer title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Document Summarizer/i);
  expect(titleElement).toBeInTheDocument();
});

test('renders navigation bar', () => {
  render(<App />);
  const navElement = screen.getByText(/DocSum/i);
  expect(navElement).toBeInTheDocument();
});

test('renders navigation links', () => {
  render(<App />);
  const homeLink = screen.getByText(/🏠 Home/i);
  const aboutLink = screen.getByText(/ℹ️ About/i);
  const loginLink = screen.getByText(/🔐 Login/i);
  
  expect(homeLink).toBeInTheDocument();
  expect(aboutLink).toBeInTheDocument();
  expect(loginLink).toBeInTheDocument();
});

test('renders file upload section on home page', () => {
  render(<App />);
  const uploadElement = screen.getByText(/Choose a document to upload/i);
  expect(uploadElement).toBeInTheDocument();
});

test('renders original document panel', () => {
  render(<App />);
  const documentPanel = screen.getByText(/Original Document/i);
  expect(documentPanel).toBeInTheDocument();
});

test('renders summary panel', () => {
  render(<App />);
  const summaryPanel = screen.getByText(/Summary/i);
  expect(summaryPanel).toBeInTheDocument();
});

test('renders file input', () => {
  render(<App />);
  const fileInput = screen.getByLabelText(/Choose a document to upload/i);
  expect(fileInput).toBeInTheDocument();
});

test('navigates to about page', () => {
  render(<App />);
  const aboutLink = screen.getByText(/ℹ️ About/i);
  fireEvent.click(aboutLink);
  
  const aboutTitle = screen.getByText(/About Document Summarizer/i);
  expect(aboutTitle).toBeInTheDocument();
});

test('navigates to login page', () => {
  render(<App />);
  const loginLink = screen.getByText(/🔐 Login/i);
  fireEvent.click(loginLink);
  
  const loginTitle = screen.getByText(/🔐 Login/i);
  expect(loginTitle).toBeInTheDocument();
});

test('navigates back to home page', () => {
  render(<App />);
  const aboutLink = screen.getByText(/ℹ️ About/i);
  fireEvent.click(aboutLink);
  
  const homeLink = screen.getByText(/🏠 Home/i);
  fireEvent.click(homeLink);
  
  const uploadElement = screen.getByText(/Choose a document to upload/i);
  expect(uploadElement).toBeInTheDocument();
});

test('shows profile picture when logged in', () => {
  render(<App />);
  
  // Navigate to login page and login
  const loginLink = screen.getByText(/🔐 Login/i);
  fireEvent.click(loginLink);
  
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  
  // Check if profile picture appears in nav
  const profileEmoji = screen.getByText(/👤/);
  expect(profileEmoji).toBeInTheDocument();
});

test('shows username when logged in', () => {
  render(<App />);
  
  // Navigate to login page and login
  const loginLink = screen.getByText(/🔐 Login/i);
  fireEvent.click(loginLink);
  
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  
  // Check if username appears
  const username = screen.getByText(/User/i);
  expect(username).toBeInTheDocument();
});

test('shows logout button in nav when logged in', () => {
  render(<App />);
  
  // Navigate to login page and login
  const loginLink = screen.getByText(/🔐 Login/i);
  fireEvent.click(loginLink);
  
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  
  // Check if logout button appears in nav
  const logoutButton = screen.getByText(/Logout/i);
  expect(logoutButton).toBeInTheDocument();
});

test('logs out when clicking logout in nav', () => {
  render(<App />);
  
  // Navigate to login page and login
  const loginLink = screen.getByText(/🔐 Login/i);
  fireEvent.click(loginLink);
  
  const loginButton = screen.getByText(/Login/i);
  fireEvent.click(loginButton);
  
  // Click logout in nav
  const logoutButton = screen.getByText(/Logout/i);
  fireEvent.click(logoutButton);
  
  // Check if profile picture is gone
  const profileEmojis = screen.getAllByText(/👤/);
  expect(profileEmojis.length).toBe(1); // Only the one in the profile page
}); 