const savedBoxes = document.getElementById("savedBoxes");

function displaySavedBoxes() {
  savedBoxes.innerHTML = "";

  const savedKeys = Object.keys(localStorage).filter(
    (key) => key !== "boxCount",
  );
  savedKeys.sort((a, b) => {
    const timestampA = parseInt(a.replace("textbox-", ""), 10);
    const timestampB = parseInt(b.replace("textbox-", ""), 10);
    return timestampA - timestampB;
  });
  savedKeys.forEach((key, index) => {
    const boxContent = localStorage.getItem(key);
    const boxElement = document.createElement("div");
    boxElement.innerHTML = ` <h3>Text Box ${index + 1}</h3> 
<p>${boxContent}</p> <button class="deleteBtn"
data- key="${key}">Delete</button> `;

    savedBoxes.appendChild(boxElement);
  });

  // Add event listeners to delete buttons after creating them
  const deleteButtons = document.querySelectorAll(".deleteBtn");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", deleteBox);
  });
}
function deleteBox(event) {
  const key = event.target.dataset.key;
  localStorage.removeItem(key);
  displaySavedBoxes(); // Re-render the saved boxes to reflect the change
} // Call the function to display boxes on page load
displaySavedBoxes();
