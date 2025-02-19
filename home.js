// script.js
function search() {
    const category = document.getElementById('category').value;
    const city = document.getElementById('city').value;
    const type = document.getElementById('type').value;

    // Here you would typically make an API call or perform some logic
    // to fetch and display the search results.  For this example,
    // we'll just display some placeholder results.

    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = ""; // Clear previous results

    if (category && city && type) {
      let  category = document.getElementById("category").value;
       if (category) {
            window.location.href = category + ".html";  // Redirect to respective page
        }
      
    } else {
        resultsDiv.innerHTML = "<p>Please select a category, city, and type.</p>";
    }
}

//setting button 
function toggleSettings() {
    event.preventDefault();
    const settingsBox = document.getElementById("settingsBox");
    settingsBox.style.display = settingsBox.style.display === "block" ? "none" : "block";
}

function toggleSubMenu(menuId) {
    const submenu = document.getElementById(menuId);
    submenu.style.display = submenu.style.display === "block" ? "none" : "block";
}

document.getElementById("darkModeToggle").addEventListener("change", function () {
    document.body.classList.toggle("dark-mode", this.checked);
});