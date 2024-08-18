// Get the form element
const form = document.querySelector('form');

// Add event listener to the form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get the search term entered by the user
    const searchInput = document.querySelector('.search_field');
    const searchTerm = searchInput.value;

    // Perform any necessary validation on the search term

    // Redirect to the fetch_articles URL with the search term as a query parameter
    window.location.href = '/fetch_article/?search_term=' + searchTerm;
});