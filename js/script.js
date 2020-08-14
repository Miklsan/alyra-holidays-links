"use strict"
const container = document.getElementById("container")
const form = document.getElementById("form")
const tri = document.getElementById("buttonTri")
const listLinks = new ListLinks(container, defaultList)
listLinks.init()

//Créer button tri par catégories
const filtreCategories = document.createElement("div")
filtreCategories.id = "filtreCategories"
filtreCategories.classList.add("col", "mb-3")
filtreCategories.innerHTML = `<div class ="input-group">
<label for = "filtreCategory" class = "input-group-text bg-warning text-white">Catégories</label>
<select id = "filtreCategory" name ="filtreCategory" class =" form-select text-dark">
<option value = "toutes les catégories" class = "bg-warning text-dark" selected> Toutes les catégories</option>
<option value="js">JavaScript</option>
            <option value="portfolio">Portfolio</option>
            <option value="inspiration">Inspiration</option>
            <option value="misc">Misc</option>
</select>
</div>`

container.prepend(filtreCategories)

//tri par catégories
this.list = JSON.parse(localStorage.getItem("listLinks")) || defaultList
const categorys = this.list.map((el) => el.category)
console.log(categorys)
const selectCategory = document.getElementById("filtreCategory")
const option = document.querySelector("option")





//tri alphabétique
const listFilterLinks = listLinks.list;
console.log("list", listFilterLinks);



// quand l'événement "submit" pour le formulaire est déclenché
form.addEventListener("submit", (event) => {
  /* le code dans la ligne ci-dessous previent le formulaire d'envoyer des données, 
  on remplace le comportement par détaut par notre js */

  event.preventDefault()
  // regardons comment nous pouvons lire les valeurs soumises via le formulaire
  console.log("title", form.elements.title.value)
  console.log("url", form.elements.url.value)
  console.log("description", form.elements.description.value)
  console.log("category", form.elements.category.value)
  // méthode pushEl
  listLinks.pushEl({
    title: form.elements.title.value.trim(),
    url: form.elements.url.value.trim(), // @todo : de la même façon on peut récupérer la valeur d'url depuis le formulaire
    description: form.elements.description.value.trim(), // @todo : et la valeur de description depuis le formulaire,
    category: form.elements.category.value, // @todo : et la valeur de category depuis le formulaire,
  })

  // la ligne ci-dessous fait un reset du formulaire (les champs redeviennent vides)
  form.reset()
})
