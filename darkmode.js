const darkModeToggle =
  document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('change', () => {
  
  document.body.classList.toggle('dark-mode');
 document.querySelector('.container').classList.toggle('dark-mode');
  document.querySelector('.switch label').classList.toggle('dark-mode');

  //targe all
  const allSections = document.querySelectorAll('section');
  allSections.forEach(section => {
    section.classList.toggle('dark-mode');
  });
});
