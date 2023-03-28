const canvas = document.querySelector('canvas')
//Game Context
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0,0, canvas.width, canvas.height)

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

const image = new Image()
image.src = './images/Demo Town.png'

// Renders map image every time the class is called on
class Sprite {
    constructor({ position, velocity, image }) {
        this.position = position
        this.image = image
    }

    draw() {
        c.drawImage(this.image, this.position.x, this.position.y) 
    }
}

const background = new Sprite({
    position: {
        x: -832,
        y: -620
    },
    image: image
})

const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    },
}

// Infinite animation loop
function animate() {
    window.requestAnimationFrame(animate)
    //Center of map and player
    background.draw()
    c.drawImage(
        playerImage,
        // Cropping player image
        0,
        0,
        playerImage.width / 4,
        playerImage.height,
        // Actual Position of player
        canvas.width / 2 - (playerImage.width / 4) / 2, 
        canvas.height / 2 - playerImage.height / 2,
        playerImage.width / 4,
        playerImage.height,
    )
    // Player movement
    if (keys.w.pressed) background.position.y += 3
    else if (keys.a.pressed) background.position.x += 3
    else if (keys.s.pressed) background.position.y -= 3
    else if (keys.d.pressed) background.position.x -= 3
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            break
        case 'a':
            keys.a.pressed = true
            break
        case 's':
            keys.s.pressed = true
            break
        case 'd':
            keys.d.pressed = true
            break
    }
})

window.addEventListener('keyup', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = false
            break
        case 'a':
            keys.a.pressed = false
            break
        case 's':
            keys.s.pressed = false
            break
        case 'd':
            keys.d.pressed = false
            break
    }
})