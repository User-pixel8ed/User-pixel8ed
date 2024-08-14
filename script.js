const newTextBox =
  document.getElementById('newTextBox');
const saveBtn =
  document.getElementById('saveBtn'); let boxCount = 0; 
// Initialize box count

// Function to generate a unique ID for each textbox 

function generateUniqueId() {
  return Date.now().toString(36) + Math.random().toString(36).substring(2, 15);
} 

saveBtn.addEventListener('click', () => {
  const content = newTextBox.value;
  if (content) { 
    const uniqueId = 
      generateUniqueId();
    localStorage.setItem(uniqueId, content);
    boxCount++;
    newTextBox.value = ''; 
                                                                                                                                                                                               // Clear the input field 
                                                                                          window.location.href = 'journal-entries.html'; } }); // Store the box count in localStorage localStorage.setItem('boxCount', boxCount);


