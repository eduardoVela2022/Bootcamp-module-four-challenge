// Form input fields
const usernameInput = document.querySelector("#form-username");
const titleInput = document.querySelector("#form-title");
const contentInput = document.querySelector("#form-content");
// Form submit button
const submitButton = document.querySelector("#submitButton");

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

//Submit form
submitButton.addEventListener("click", (event) => {
  event.preventDefault();

  // Get form input fields' values
  const username = usernameInput.value;
  const title = titleInput.value;
  const content = contentInput.value;

  // [ No errors happened ]

  // Create new post object
  const newPost = {
    username,
    title,
    content,
  };

  // Add new post to posts array
  posts.push(newPost);

  // Upload posts array to the local storage
  localStorage.setItem("posts", JSON.stringify(posts));

  // Clear all of the form input fields
  usernameInput.value = "";
  titleInput.value = "";
  contentInput.value = "";

  // Redirects the user to the blog.html page
  window.location.href =
    "file:///Users/eduardovela/CodeBootcamp/Bootcamp-module-four-challenge/blog.html";
});

init();
// Init function
function init() {
  // Loads saved posts
  posts = loadPosts();
  console.log(posts);
}
