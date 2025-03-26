# Productivity Tracker Chrome Extension

## Internship Details
- **Company:** CodTech IT Solutions
- **Intern:** Giresh Immidisetty
- **Intern ID:** CT04WD22
- **Domain:** MERN Stack Web Development
- **Duration:** 4 Weeks
- **Mentor:** Neela Santosh

## Project Overview
The Productivity Tracker is a Chrome extension designed to help users monitor their online activity, track time spent on different websites, block distracting sites, and generate daily productivity reports. The extension syncs data across devices using a backend built with the MERN stack.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend:** Node.js, Express.js, MongoDB
- **Chrome API:** Manifest v3, Storage API, Alarms API
- **Other Tools:** WebSockets for real-time updates

## Features
- Tracks time spent on various websites
- Blocks distracting websites based on user preferences
- Generates daily, weekly, and monthly productivity reports
- Syncs user preferences and data across devices
- Provides real-time updates and insights

## Installation and Setup
### Prerequisites
- Google Chrome Browser
- Node.js and MongoDB (for backend functionalities)

### Steps to Install
1. **Clone the repository:**
   ```sh
   git clone https://github.com/Giresh0902/PRODUCTIVITY-TRACKER.git
   cd productivity-tracker-extension
   ```
2. **Load the extension into Chrome:**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in the top right corner)
   - Click "Load unpacked" and select the `extension` folder

3. **Start the backend server:**
   ```sh
   cd backend
   npm install
   node server.js
   ```
4. **Use the extension:**
   - Click on the extension icon in the Chrome toolbar
   - Set up your preferences and start tracking productivity

## Usage
- The extension runs in the background and records the time spent on each website.
- Users can block specific websites to avoid distractions.
- Reports are generated based on browsing activity and can be accessed from the extension dashboard.

## Deployment
- The backend can be deployed on platforms like AWS, Heroku, or Vercel.
- The extension can be published to the Chrome Web Store for public use.

## Contribution Guidelines
Contributions are welcome! Fork the repository and submit a pull request.

## License
This project is licensed under the MIT License.

