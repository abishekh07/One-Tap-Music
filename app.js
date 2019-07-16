window.addEventListener('load', () => {
  const visual = document.querySelector('.visual')
  const sounds = document.querySelectorAll('.pads audio')
  const pads = document.querySelectorAll('.pads div')

  const colors = [
    '#ea526f',
    '#f9dc5c',
    '#011936',
    '#c73e1d',
    '#45cb85',
    '#550c18'
  ]

  pads.forEach((pad, index) => {
    pad.addEventListener('click', () => {
      sounds[index].currentTime = 0
      sounds[index].play()

      createBubbles(index)
    })
  })

  const createBubbles = (index) => {
    const bubble = document.createElement('div')
    visual.appendChild(bubble)
    bubble.style.backgroundColor = colors[index]
    bubble.style.animation = 'jump 1s ease'

    bubble.addEventListener('animationend', function() {
      visual.removeChild(this)
    })
  }
})
