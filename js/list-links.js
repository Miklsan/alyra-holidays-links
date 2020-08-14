"use strict"
class ListLinks {
  constructor(container, defaultList) {
    this.container = container
    this.list = JSON.parse(localStorage.getItem("listLinks")) || defaultList
  }
  init() {
    this.render()
  }


  pushEl(el) {
    /* @todo : remplacer array vide [] dans const urls = [], par l'array qui contient tous les urls
    trouvés dans this.list */
    console.log(this.list)
    const urls = this.list.map((el) => el.url)
    console.log(urls)
    if (!urls.includes(el.url)) {
      // si el.url n'est pas dans la liste des urls
      // je l'ajoute
      this.list.push(el)
      // et j'appelle la méthode refresh
      this.refresh()
    } else {
      alert("Ce lien existe déjà")
    }
  }
  remove(el) {
    const i = this.list.findIndex((item) => item === el) // <- ce code trouve index de l'élément récherché
    this.list.splice(i, 1) // <- ce code enleve l'élément avec index i de list
    console.log(this.list)
    // @todo : appeller la méthode refresh
    this.refresh()
  }
  refresh() {
    this.render()
    this.addToLocalStorage()
    // @todo: appele la méthode addToLocalStorage
    // @todo: appele la méthode render
  }
  addToLocalStorage() {
    /*
     le code ci-dessous convertis l'array list (array qui contients des objet) en format JSON afin de la
     sauvegarder en localStorage dans la clé "listLinks"
    */
    localStorage.setItem("listLinks", JSON.stringify(this.list))
  }
  render() {
    const ulEl = this.addUl()
    this.container.innerHTML = ""
    // @todo : attache ulEl à la fin de container
    this.container.append(ulEl)
  }

  renderTri() {
    const selectEl = document.getElementById("triAZ");
    const option = document.querySelector("option");
    selectEl.addEventListener("change", () => {
      if (option.value == "A-Z") {
        this.list.sort(function (a, b) {
          if (a.title < b.title) {
            return -1;
          }
          if (a.title > b.title) {
            return 1;
          }
          return 0;
        });
        this.render();
      } else if (option.value == "Z-A") {
        this.list.sort(function (b, a) {
          if (b.title > a.title) {
            return -1;
          }
          if (b.title < a.title) {
            return 0;
          }
          return 0;
        });
        this.render();
      }
    })
  }


  addUl() {
    const ulEl = this.createUlElement()
    console.log(this.list)
    // @todo : ajouter des classes row list-unstyled mt-4
    for (let el of this.list) {
      const li = this.addLi(el)
      // @todo : append chaque li à élément ulEl
      ulEl.append(li)
    }
    // @todo : retourner ulEl
    return ulEl
  }

  addLi(el) {
    const liEl = this.createLiElement()
    // @todo : ajouter des classes à liEl border shadow-sm mb-3 p-2

    liEl.append(this.addTitle(el))
    liEl.append(this.addDescription(el))
    liEl.append(this.addLink(el))
    liEl.append(this.addButton(el))

    // @todo : mettre en place le reste de son contentu en utilisant les méthodes
    //addDescription(el)
    //liEl.innerHTML = this.addDescription(el)
    //addLink(el)
    //liEl.innerHTML = this.addLink(el)
    //addButton(el)
    //liEl.innerHTML = this.addButton(el)
    return liEl
  }
  createUlElement() {
    const ulEl = document.createElement("ul")
    ulEl.classList.add("row", "list-unstyled", "mt-4")
    return ulEl
  }

  createLiElement() {
    const liEl = document.createElement("li")
    liEl.classList.add("border", "shadow-sm", "mb-3", "p-2")
    return liEl
  }

  createTitleElement() {
    const el = document.createElement('h3')
    el.classList.add('h6', 'mb-0')
    return el
  }

  addTitle(el) {
    // @todo : retourner le markup pour le titre (h3.h6.mb-0), <h3 class="h6 mb-0">Le titre</h3>
    const title = this.createTitleElement()
    title.textContent = el.title
    return title
  }
  createDescriptionElement() {
    const el = document.createElement("p")
    return el
  }

  addDescription(el) {
    // @todo : retourner le markup pour la description, <p>Voici la description</p>
    const descritption = this.createDescriptionElement()
    descritption.textContent = el.description
    return descritption
  }
  createLinkElement() {
    const el = document.createElement("a")
    el.classList.add("btn", "btn-sm", "btn-outline-warning", "mr-2")
    return el
  }
  addLink(el) {
    /* @todo : retourner le markup pour le lien vers le ressource a.btn.btn-sm.btn-ouline-warning.mr-2 
    avec le texte visitez le lien */
    const a = this.createLinkElement()
    a.textContent = "visiter le lien"
    return a
  }
  createButtonElement() {
    const el = document.createElement("button")
    el.type = 'button'
    el.classList.add("btn", "btn-warning", "btn-sm")
    return el
  }
  addButton(el) {
    const buttonEl = this.createButtonElement()
    buttonEl.textContent = " supprimer le lien"
    buttonEl.addEventListener("click", () => {
      this.remove(el)
    })
    // @todo : ajouter des classes btn btn-warning btn-sm
    // @todo : mettre le texte "Supprimer le lien"
    // @todo : ajouter un eventListener qui écoute pour 'click' qui déclanchera la méthode remove
    // @todo : retourner buttonEl
    return buttonEl
  }
}
