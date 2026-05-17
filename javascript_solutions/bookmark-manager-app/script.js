const mainSection = document.getElementById("main-section")
const formSection = document.getElementById("form-section")
const addBookmarkBtn = document.getElementById("add-bookmark-button")
const categoryName = document.querySelectorAll(".category-name")
const categoryDropdown = document.getElementById("category-dropdown")
const closeFormBtn = document.getElementById("close-form-button")


function getBookmarks(){
  const bookmarks = JSON.parse(localStorage.getItem("bookmarks")) || []
  return bookmarks
}
function displayOrCloseForm(){
mainSection.classList.toggle("hidden") 
formSection.classList.toggle("hidden")
}

addBookmarkBtn.addEventListener("click", ()=>
{ categoryName.forEach(div => div.textContent = categoryDropdown.options[categoryDropdown.selectedIndex].text
)
  displayOrCloseForm()
})

closeFormBtn.addEventListener("click", displayOrCloseForm)