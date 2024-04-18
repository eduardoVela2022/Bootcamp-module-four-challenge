// Post list
const postList = document.querySelector("#post-list");
// Back button
const backButton = document.querySelector("#back-button");

// Array that stores all the posts that are stored in the user's local storage
let posts = [];

// Loads the posts stored in the user's local storage
function loadPosts() {
  // Gets the posts stored in the user's local storage
  const loadedPosts = localStorage.getItem("posts");

  // If no posts were gotten return an empty array
  if (loadedPosts === null) return [];

  // If posts were gotten return them
  return JSON.parse(loadedPosts);
}

// Creates a new post item for each post saved on the user's local storage
function createPosts() {
  for (const post of posts) {
    // New post list item element is created
    const newPost = document.createElement("li");
    // Style is added to the post list item
    newPost.setAttribute("class", "post-list-item");

    // New post header is created
    const postTitle = document.createElement("h5");
    postTitle.textContent = post.title;

    // New post div is created
    const postDiv = document.createElement("div");
    // Post content
    const postContent = document.createElement("p");
    postContent.textContent = post.content;
    // Post author
    const postAuthor = document.createElement("p");
    postAuthor.textContent = `Posted by: ${post.username}`;

    // The post content and author are appended to the post div
    postDiv.appendChild(postContent);
    postDiv.appendChild(postAuthor);

    // The post title and div are appended to the post list item
    newPost.appendChild(postTitle);
    newPost.appendChild(postDiv);

    // The post list item is appended to the post list
    postList.appendChild(newPost);
  }
}

// Redirects the user to the index.html page
function handleGoBack() {
  window.location.href =
    "https://eduardovela2022.github.io/Bootcamp-module-four-challenge/";
}

// Adding an event listener to the back button of the header
backButton.addEventListener("click", handleGoBack);

// Init function
function init() {
  // Loads saved posts
  posts = loadPosts();
  createPosts();
}

// Executes init function
init();
