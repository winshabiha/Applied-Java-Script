const Value = document.getElementById("jalan")
Value.innerHTML = '<h2>Jalan Semangka Raya, Telaga <br> Murni,Cikarang Barat, Kab. Bekasi</h2>'
Value.style.color = 'red'
Value.style.border = '3px solid black'
Value.style.backgroundColor = 'aqua'
Value.style.padding = '0 20px'

const newValue = document.getElementById('company')
newValue.classList.add('unordered-list')
console.log(newValue)

const para = document.getElementById('para')
para.classList.add('new-para')
console.log(para)

const orderedList = document.getElementById('order')
orderedList.classList.add('order-list')
console.log(orderedList)

const olOne = document.getElementById('policy')
olOne.setAttribute('title',' Learn-more')

const headings = document.getElementById('order-heading')
// headings.innerHTML = '<h3>Lorem ipsum dolor sit amet</h3>'
headings.innerText = 'These are some opportunities of this company'

const section = document.getElementById('first-section')
section.appendChild(headings)

const newElement = document.createElement('section')
newElement.setAttribute('id','dynamic-section')
const h3 = document.createElement('h3')
h3.innerText = 'Name of countyies'
const ul = document.createElement('ul')
const li1 = document.createElement('li')
li1.innerText = 'Bangladesh'
const li2 = document.createElement('li')
li2.innerText = 'Canada'
const li3 = document.createElement('li')
li3.innerText = 'America'

ul.appendChild(li1)
ul.appendChild(li2)
ul.appendChild(li3)
newElement.appendChild(h3)
newElement.appendChild(ul)

const body = document.getElementById('body')
body.appendChild(newElement)

const design = document.getElementById('dynamic-section')
design.classList.add('dynamic-design')

design.firstChild.style.color = 'red'


