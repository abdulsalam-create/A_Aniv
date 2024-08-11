onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.addEventListener("DOMContentLoaded", function() {
  // Display the heading
  setTimeout(function() {
    document.getElementById('heading').style.opacity = '0';
  }, 2000); // 2 seconds for the heading to fade out
  
  // Display the paragraph after the heading fades out
  setTimeout(function() {
    document.getElementById('heading').style.display = 'none';
    document.getElementById('paragraph').style.display = 'block';
    setTimeout(function() {
      document.getElementById('paragraph').style.opacity = '0';
    }, 8000); // 2 seconds for the paragraph to fade out
  }, 4000); // 2 seconds delay before paragraph shows up after heading fades
  
  // Display the flowers after the paragraph fades out
  setTimeout(function() {
    document.getElementById('paragraph').style.display = 'none';
    document.querySelector('.content').style.display = 'block';
  }, 12000); // 2 seconds delay after paragraph fades out
});
