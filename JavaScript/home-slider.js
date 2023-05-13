const images = ['assets/images/Home/man-4.png', 'assets/images/Home/man-1.png', 'assets/images/Home/man-3.png', ]; // Array of image URLs
const heroImage = document.getElementById('hero-image'); // Get the img element

let index = 0; // Starting index of the images array
setInterval(() => {
  heroImage.classList.remove('loaded'); // Remove the "loaded" class to trigger the fade-out transition
  setTimeout(() => {
    heroImage.src = images[index]; // Set the src attribute of the img element to the current image URL
    heroImage.classList.add('loaded'); // Add the "loaded" class to trigger the fade-in transition
    index = (index + 1) % images.length; // Increment the index, wrapping around to the beginning of the array if necessary
  }, 500); // Wait for the fade-out transition to complete (500 milliseconds)
}, 4000); // Change the image every 3 seconds (3000 milliseconds)

