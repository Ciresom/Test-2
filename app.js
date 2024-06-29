const cardArray = [
  {
    name:'cheeseburger',
    img:'IMG_3489.png'
  },
    name:'fries',
    img:'IMG_3490.png'
  },
  {
    name:'hotdog',
    img:'IMG_3491.png'
  },
  {
    name:'ice-cream',
    img:'IMG_3492.png'
  },
  {
    name:'milk-shake',
    img:'IMG_3493.png'
  },
  {
    name:'pizza',
    img:'IMG_3494.png'
  },
  {
    name:'cheeseburger',
    img:'IMG_3489.png'
  },
    name:'fries',
    img:'IMG_3490.png'
  },
  {
    name:'hotdog',
    img:'IMG_3491.png'
  },
  {
    name:'ice-cream',
    img:'IMG_3492.png'
  },
  {
    name:'milk-shake',
    img:'IMG_3493.png'
  },
  {
    name:'pizza',
    img:'IMG_3494.png'
  }
]

cardArray.sort(() => 0.5 - Math.random())

const gridDisplay = document.querySelector('#grid')

function createBoard () {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement('img');
    card.setAttribute('src','IMG_3988.png');
    card.setAttribute(data-id', i);
    gridDisplay.appendChild(card);
  }
}
createBoard()
