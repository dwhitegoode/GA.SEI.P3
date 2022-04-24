const tabs = document.querySelector('.tabs')
const panels = document.querySelectorAll('.panel')
//let special = `ts=1&apikey=dd67a01ab0e2c33f36e1c09676ae6412&hash=16ba07e5b43ee948f53d7bbae3ab5050`
tabs.addEventListener('click', e => {
  if (e.target.tagName == 'LI') {
    const getPanel = document.querySelector(e.target.dataset.target)
    panels.forEach(element => {
      if (element == getPanel) {
        element.classList.add('active')
      } else {
        element.classList.remove('active')
      }

    });
  }
})

const marvel = document.querySelector('#characters')
const container = document.createElement('div')
container.classList.add('container')
marvel.appendChild(container)

const thor = document.querySelector('#thor')
const thorContainer = document.createElement('div')
thorContainer.classList.add('thorContainer')
thor.appendChild(thorContainer)

const iron = document.querySelector('#iron')
const ironContainer = document.createElement('div')
ironContainer.classList.add('ironContainer')
iron.appendChild(ironContainer)

const captain = document.querySelector('#captain')
const captainContainer = document.createElement('div')
captainContainer.classList.add('captainContainer')
captain.appendChild(captainContainer)

const strange = document.querySelector('#strange')
const strangeContainer = document.createElement('div')
strangeContainer.classList.add('strangeContainer')
strange.appendChild(strangeContainer)

const panther = document.querySelector('#panther')
const pantherContainer = document.createElement('div')
pantherContainer.classList.add('pantherContainer')
panther.appendChild(pantherContainer)


fetch(`https://marvel-api01.herokuapp.com/api/${marvel}`)
  .then(response => {
    return response.json()
  })
  .then(data => {
    data.forEach(character => {
      const card = document.createElement('div')
      card.classList.add('card')
      const h1 = document.createElement('h1')
      h1.textContent = character.name
      const img = document.createElement('img')
      img.classList.add('profileImg')
      img.src = character.image
      const p = document.createElement("p");

      p.textContent = character.description

      container.appendChild(card);
      card.appendChild(h1);
      card.appendChild(img)
      card.appendChild(p);
    })
  });

fetch(`https://marvel-api01.herokuapp.com/api/marvel/Thor`)
  .then(response => {
    return response.json()
  })
  .then(data => {

    const card = document.createElement('div')
    card.classList.add('card')
    const h1 = document.createElement('h1')
    h1.textContent = data.name
    const img = document.createElement('img')
    img.classList.add('profileImg')
    img.src = data.image
    const p = document.createElement("p");

    p.textContent = data.description

    thorContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img)
    card.appendChild(p);
  });

fetch(`https://marvel-api01.herokuapp.com/api/marvel/Iron%20Man`)
  .then(response => {
    return response.json()
  })
  .then(data => {

    const card = document.createElement('div')
    card.classList.add('card')
    const h1 = document.createElement('h1')
    h1.textContent = data.name
    const img = document.createElement('img')
    img.classList.add('profileImg')
    img.src = data.image
    const p = document.createElement("p");

    p.textContent = data.description

    ironContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img)
    card.appendChild(p);
  });

fetch(`https://marvel-api01.herokuapp.com/api/marvel/Captain%20America`)
  .then(response => {
    return response.json()
  })
  .then(data => {

    const card = document.createElement('div')
    card.classList.add('card')
    const h1 = document.createElement('h1')
    h1.textContent = data.name
    const img = document.createElement('img')
    img.classList.add('profileImg')
    img.src = data.image
    const p = document.createElement("p");

    p.textContent = data.description

    captainContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img)
    card.appendChild(p);
  });

fetch(`https://marvel-api01.herokuapp.com/api/marvel/Dr.%20Strange`)
  .then(response => {
    return response.json()
  })
  .then(data => {

    const card = document.createElement('div')
    card.classList.add('card')
    const h1 = document.createElement('h1')
    h1.textContent = data.name
    const img = document.createElement('img')
    img.classList.add('profileImg')
    img.src = data.image
    const p = document.createElement("p");

    p.textContent = data.description

    strangeContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img)
    card.appendChild(p);
  });

fetch(`https://marvel-api01.herokuapp.com/api/marvel/Black%20Panther`)
  .then(response => {
    return response.json()
  })
  .then(data => {

    const card = document.createElement('div')
    card.classList.add('card')
    const h1 = document.createElement('h1')
    h1.textContent = data.name
    const img = document.createElement('img')
    img.classList.add('profileImg')
    img.src = data.image
    const p = document.createElement("p");

    p.textContent = data.description

    pantherContainer.appendChild(card);
    card.appendChild(h1);
    card.appendChild(img)
    card.appendChild(p);
  });

