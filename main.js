document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggleMode');

    // Check localStorage for saved mode preference
    const currentMode = localStorage.getItem('theme') || 'light';
    document.body.classList.toggle('dark-mode', currentMode === 'dark');

    // Toggle mode on button click
    toggleButton.addEventListener('click', () => {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});

const entryText = document.getElementById('entryText');
const imageUpload = document.getElementById('imageUpload');
const uploadButton = document.getElementById('uploadButton');

uploadButton.addEventListener('click', () => {
  imageUpload.click(); // Trigger the file input click
});

imageUpload.addEventListener('change', async (event) => {
  const file = event.target.files[0];

  if (file) {
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('https://gratitude-journal-backend.gracelui150.repl.co/upload', { // Replace with your backend Repl's URL
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        const imageUrl = await response.json(); // Assuming your server returns the URL
        entryText.value += `\n![Uploaded Image](${imageUrl})`; // Add image to textbox
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
});

// ... (Your existing code for saving entries, reflection, challenges, etc.) ...


// ... (Your existing code for saving entries, reflection, challenges, etc.) ...

document.addEventListener('DOMContentLoaded', () => {
    const Promtlist = document.getElementById('prompt List');
  const imageUpload = document.getElementById('imageUpload');
  const insertImageButton = document.getElementById('insertImageButton');
    const entryForm = document.getElementById('entryForm');
  const entryText =  
document.getElementById('entryText');
    const reflectionList = document.getElementById('reflectionList');
    const challengeList = document.getElementById('challengeList');
    const entriesList = document.getElementById('entriesList');
    const achievementList = document.getElementById('AchievementList');


  insertImageButton.addEventListener('click', () => {
          if (imageUpload.files.length === 0) {
              alert('Please select an image to upload.');
              return;
          } 

          const file = imageUpload.files[0];
          const formData = new FormData();
          formData.append('image', file);

          // Upload the image to the backend
          fetch('/upload', {
              method: 'POST',
              body: formData
          })
          .then(response => response.json())
          .then(data => {
            if (data.url) {
              selectedImage.src = data.url; // Update the image source
              selectedImage.style.display = 'block'; // Ensure the image is visible
               // Reset the file input
                              imageUpload.value = '';
                          } else {
                              alert('Image upload failed.');
                          }
                      })
                      .catch(error => {
                          console.error('Error uploading image:', error);
                          alert('Image upload failed.');
                      });
                  });
              });

            /*  if (data.url) {
                  const imgElement = `<img src="${data.url}" style="max-width: 100%; height: auto;"/>`; */
               
                  // Insert the image at the current cursor position
                 /* const cursorPos = entryText.selectionStart;
                  const textBefore = entryText.value.substring(0, cursorPos);
                  const textAfter = entryText.value.substring(cursorPos); 
               

                  // Reset the file input and focus on the text area
                imageUpload.value = '';
                  entryText.focus();
              } else {
                  alert('Image upload failed.');
              }
          })
          .catch(error => {
              console.error('Error uploading image:', error);
              alert('Image upload failed.');
          });
      });
  });  */
    // Handle form submission
    entryForm.addEventListener('submit', (event) => {
        event.preventDefault();
        saveEntry(entryText.value);
        entryText.value = '';
    });

    // Save entry to local storage and update reflection section
    function saveEntry(text) {
        if (text.trim() === '') return;

        // Save entry to localStorage
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        entries.push(text);
        localStorage.setItem('entries', JSON.stringify(entries));

  /*      // Update reflection section
        updateReflection();
    }

    // Update reflection section with saved entries
    function updateReflection() {
        let entries = JSON.parse(localStorage.getItem('entries')) || [];
        reflectionList.innerHTML = entries.map(entry => `<p>${entry}</p>`).join('');
    } */

    // Initial load
    updateReflection();
    document.addEventListener('DOMContentLoaded', () => {
        const colorPicker = document.getElementById('colorPicker');
        const header = document.getElementById('header');
        const submitButton = document.getElementById('submitButton');

        // Load and apply the saved color from local storage
      

        // Event listener for color picker changes
      
            // Save the selected color in local storage
        
        });
    });
});
/*const entryText = document.getElementById('entryText');
const imageUpload = document.getElementById('imageUpload');
const uploadButton = document.getElementById('uploadButton');
uploadButton.addEventListener('click', () => {
  imageUpload.click(); // Trigger the file input click
});
imageUpload.addEventListener('change', async (event) => {
  const file = event.target.files[0];
  if (file) {
    const formData = new FormData();
    formData.append('image', file);
    try {
      const response = await fetch('/upload', {
        method: 'POST',
        body: formData
      });
      if (response.ok) {
        const imageUrl = await response.json(); // Assuming your server returns the URL
        entryText.value += `\n![Uploaded Image](${imageUrl})`; // Add image to textbox
      } else {
        console.error('Image upload failed');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  }
}); */

    // Check localStorage for saved mode preference
   

    // Toggle mode on button click


   
        }
    });
});
