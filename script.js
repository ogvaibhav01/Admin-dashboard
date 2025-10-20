function openOverlayWithPage(url) {
  fetch(url)
    .then(response => response.text())
    .then(html => {
      document.getElementById('overlay-body').innerHTML = html;
      document.getElementById('overlay').style.right = '0';
    })
    .catch(err => {
      document.getElementById('overlay-body').innerHTML = "<p>Error loading page.</p>";
      document.getElementById('overlay').style.right = '0';
    });
}

function closeOverlay() {
  document.getElementById('overlay').style.right = '-100%';
}
