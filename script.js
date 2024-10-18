// Handle Search Form submission
const searchButton = document.querySelector('button.bg-blue-500');

// Add a smooth transition to the button
searchButton.style.transition = "all 0.3s ease";

searchButton.addEventListener('click', function () {
  const locationInput = document.querySelector('input[placeholder="New Delhi"]');
  const budgetInput = document.querySelector('input[placeholder="Flat | Budget"]');

  const location = locationInput.value.trim();
  const budget = budgetInput.value.trim();

  // Clear any previous error indicators
  locationInput.classList.remove('border-red-500', 'animate-shake');
  budgetInput.classList.remove('border-red-500', 'animate-shake');

  // Validate location input
  if (!location) {
    locationInput.classList.add('border-red-500', 'animate-shake');
    alert('Please enter a valid location');
    return;
  }

  // Validate budget input (could be further improved for numeric budget validation)
  if (!budget) {
    budgetInput.classList.add('border-red-500', 'animate-shake');
    alert('Please enter a valid budget');
    return;
  }

  // Add smooth animation for button and input interaction
  searchButton.style.transform = "scale(0.95)";
  searchButton.textContent = 'Searching...';
  searchButton.disabled = true;

  // Simulate an API call or processing time (for demo purposes)
  setTimeout(function () {
    alert(`Searching for properties in ${location} within a budget of ${budget}`);

    // Reset button state after search with smoothness
    searchButton.textContent = 'Search';
    searchButton.style.transform = "scale(1)";
    searchButton.disabled = false;

    // Add actual search logic here (e.g., making an API call)
    // Example:
    // searchProperties(location, budget)
    //   .then(response => handleSearchResults(response))
    //   .catch(error => console.error('Search failed:', error));

  }, 2000);
});

// Optional: You can add a helper function for actual API interaction
function searchProperties(location, budget) {
  // Placeholder for an API call
  // Example: return fetch(`/api/search?location=${location}&budget=${budget}`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ results: 'mocked results' });
    }, 1000);
  });
}

function handleSearchResults(results) {
  // Handle the display of search results
  console.log('Search results:', results);
}

// Shake animation for invalid input (Optional for user feedback)
const style = document.createElement('style');
style.innerHTML = `
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25%, 75% { transform: translateX(-10px); }
    50% { transform: translateX(10px); }
  }
  .animate-shake {
    animation: shake 0.3s;
  }
`;
document.head.appendChild(style);
