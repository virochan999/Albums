# React + Vite

# Album Management Application
This is a simple React application that allows you to manage albums. It fetches data from a dummy API and provides basic functionality to add, update, and delete albums. Below are the features of this application:

## Features
**Fetch Albums:** The application fetches and displays a list of albums from the JSONPlaceholder API.

**Add Album:** You can add a new album by clicking the "Add New Album" button. This action simulates a POST request to the API to add an album. Note that this request is not sent to a real server, but it provides a valid response and updates the React state with the new album.

**Update Album:** To update an existing album, click the "Update" button next to the album you want to modify. This action simulates a PUT request to the API to update the album's information. Like the add feature, this request is also a dummy call, but it demonstrates the functionality of updating an album.

**Delete Album:** You can delete an album by clicking the "Delete" button next to the album you wish to remove. This action simulates a DELETE request to the API to delete the selected album. Again, this is a dummy call, but it showcases the ability to delete albums.

Please note that this application is for demonstration purposes only and does not interact with a real server. The API calls are simulated, and no data is permanently stored or modified on the server. The application uses React and React Router for routing. The Toastify library is used for displaying notifications.

## Usage
**To run the application locally, follow these steps:**

```
1. git clone https://github.com/virochan999/Albums.git
2. cd albums
3. npm install
4. npm run dev
```

