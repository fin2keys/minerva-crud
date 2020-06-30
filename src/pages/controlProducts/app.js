const addNewProductButton = document.querySelector('.add-new-product-container')
const addButton = document.querySelector('#add')
const tableContainer = document.querySelector('.new-products-container')
const getById = id => document.getElementById(`${id}`)

const openDisplay = () => {
  const addNewItemForm = document.querySelector('.form')
  if(window.getComputedStyle(addNewItemForm).getPropertyValue('display') == 'flex') {
    addNewItemForm.style.setProperty('display', 'none')
  } else {
    addNewItemForm.style.setProperty('display', 'flex')
  }
}

const currentStore = []

const renderAllProducts = () => {
  const savedItens = JSON.parse(localStorage.savedProducts)
  console.log(savedItens)

  savedItens.forEach(car => loadSavedItens(car))
}

const loadSavedItens = itens => {
  const mainTable = document.querySelector('.new-products-container')
  const newRow = document.createElement('tr')

  newRow.innerHTML = `
    <th>${itens.name}</th>
    <th>${itens.price}</th>
    <th>${itens.discount}</th>
    <th class="delete-button" data-remove="${mainTable.childElementCount}">DELETE</th>
  `
  newRow.setAttribute('data-remove', `${mainTable.childElementCount}`)
  newRow.setAttribute('class', 'new-row')
  mainTable.appendChild(newRow)
}
const removeItemDisplay = ({target}) => {
  const allRows = document.querySelectorAll('.new-row')
  if(target.className === 'delete-button') {
    allRows.forEach((element, index) => {
      if(element.dataset.remove == target.dataset.remove) {
        const savedItens = JSON.parse(localStorage.savedProducts)
        removeItemStorage(savedItens, index)
        element.remove()
      }
    })
  }
}

const removeItemStorage = (item, index) => {
  item.splice(index, 1)
  localStorage.savedProducts = JSON.stringify(item)
}

const addNewItem = () => {
  const newItem = {
    name: document.getElementById('pdc-name').value,
    price: document.getElementById('pdc-price').value,
    discount: document.getElementById('pdc-discount').value
  }
  loadSavedItens(newItem)
  console.log(newItem)
  getById('pdc-name').value = ''
  getById('pdc-price').value = ''
  getById('pdc-discount').value = ''

  getById('mainform').style.setProperty('display', 'none')

  const savedProducts = localStorage.savedProducts ? JSON.parse(localStorage.savedProducts) : []
  savedProducts.push(newItem)
  localStorage.savedProducts = JSON.stringify(savedProducts)
}
addNewProductButton.addEventListener('click', openDisplay)
addButton.addEventListener('click', addNewItem)
tableContainer.addEventListener('click', removeItemDisplay)

document.onload = renderAllProducts()