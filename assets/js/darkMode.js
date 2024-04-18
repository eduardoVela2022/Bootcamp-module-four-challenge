// Dark mode button
const darkModeButton = document.querySelector("#dark-mode-button");

function loadDarkMode() {
  // Gets the dark mode configuration from local storage
  const loadedDarkMode = localStorage.getItem("darkmode");

  // If dark mode is selected, dark mode is applied
  if (loadedDarkMode === "darkmode") {
    // Changes the look of the dark mode button
    darkModeButton.textContent = "🌙";
    // Changes colors to dark mode
    changeColorsToDarkMode();
    // Saves configuration to local storage
    localStorage.setItem("darkmode", "darkmode");
  }
}

// Handles the change from darkmode to lightmode and vice versa
function handleDarkMode() {
  // To dark mode
  if (darkModeButton.textContent === "☀️") {
    // Changes the look of the dark mode button
    darkModeButton.textContent = "🌙";
    // Changes colors to dark mode
    changeColorsToDarkMode();
    // Saves configuration to local storage
    localStorage.setItem("darkmode", "darkmode");
  }
  // To light mode
  else {
    // Changes the look of the dark mode button
    darkModeButton.textContent = "☀️";
    // Changes colors to light mode
    changeColorsToLightMode();
    // Saves configuration to local storage
    localStorage.setItem("darkmode", "lightmode");
  }
}

// Changes all the colors of the CSS root element to dark mode
function changeColorsToDarkMode() {
  // Color list
  const darkModeColors = [
    {
      name: "--border-color",
      color: "#737373",
    },
    {
      name: "--website-title-color",
      color: "#22c55e",
    },
    {
      name: "--website-background-color",
      color: "#171717",
    },
    {
      name: "--website-text-color",
      color: "#fafafa",
    },
    {
      name: "--field-text-color",
      color: "#171717",
    },
    {
      name: "--button-hover-color",
      color: "#a855f7",
    },
    {
      name: "--inactive-color",
      color: "#a3a3a3",
    },
    {
      name: "--purple-color",
      color: "#7e22ce",
    },
    {
      name: "--button-text-color",
      color: "#f5f3ff",
    },
  ];

  // Applies colors to CSS root element
  for (const color of darkModeColors) {
    document.documentElement.style.setProperty(color.name, color.color);
  }
}

// Changes all the colors of the CSS root element to light mode
function changeColorsToLightMode() {
  // Color list
  const lightModeColors = [
    {
      name: "--border-color",
      color: "#262626",
    },
    {
      name: "--website-title-color",
      color: "#16a34a",
    },
    {
      name: "--website-background-color",
      color: "#fafafa",
    },
    {
      name: "--website-text-color",
      color: "#171717",
    },
    {
      name: "--field-text-color",
      color: "#171717",
    },
    {
      name: "--button-hover-color",
      color: "#a855f7",
    },
    {
      name: "--inactive-color",
      color: "#d4d4d4",
    },
    {
      name: "--purple-color",
      color: "#7e22ce",
    },
    {
      name: "--button-text-color",
      color: "#f5f3ff",
    },
  ];

  // Applies colors to CSS root element
  for (const color of lightModeColors) {
    document.documentElement.style.setProperty(color.name, color.color);
  }
}

// Adding an event listener to the dark mode button
darkModeButton.addEventListener("click", handleDarkMode);

// Init function
function init() {
  // Loads dark mode from user's local storage
  loadDarkMode();
}

// Executes init function
init();
