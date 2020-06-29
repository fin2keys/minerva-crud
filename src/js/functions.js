const addNewProductButton = document.querySelector('.add-new-product-container')
const addButton = document.querySelector('#add')
const getById = id => document.getElementById(`${id}`)

const openDisplay = () => {
  const addNewItemForm = document.querySelector('.form')
  if(window.getComputedStyle(addNewItemForm).getPropertyValue('display') == 'flex') {
    addNewItemForm.style.setProperty('display', 'none')
  } else {
    addNewItemForm.style.setProperty('display', 'flex')
  }
}
const addNewItem = () => {
  const newItem = {
    name: document.getElementById('pdc-name').value,
    price: document.getElementById('pdc-price').value,
    discount: document.getElementById('pdc-discount').value
  }
  console.log(newItem)
  getById('pdc-name').value = ''
  getById('pdc-price').value = ''
  getById('pdc-discount').value = ''

  getById('mainform').style.setProperty('display', 'none')
}

addNewProductButton.addEventListener('click', openDisplay)
addButton.addEventListener('click', addNewItem)