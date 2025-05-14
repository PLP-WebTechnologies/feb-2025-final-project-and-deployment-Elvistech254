// JavaScript function for interactivity
function showAlert(postId) {
  const post = document.getElementById(postId);
  alert(`You clicked on: ${post.querySelector("h3").innerText}`);
}
