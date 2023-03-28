const canvas = document.querySelector('canvas')
//Game Context
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

const collisionsMap = []
// Slices array into smaller arrays of 70
for (let i = 0; i < collisions.length; i += 70) {
    collisionsMap.push(collisions.slice(i, 70 + i)) 
}
// Creates boundary tile every time the class is called on 
class Boundary {
    static width = 48
    static height = 48
    constructor(position) {
        this.position = position
        // Map is zoomed in 400%, original size of tiles are 12x12
        // 12 * 4 = 48
        this.width = 48
        this.height = 48
    }

    draw() {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

const boundaries = []
// Locates the boundary tiles
collisionsMap.forEach((row, i) => {
    row.forEach((symbol, j) => {
        // IF the 'symbol' matches 1025
        if (symbol === 1025)
        boundaries.push(
            new Boundary({
                position: {
                   x: j * Boundary.width,
                   y: i * Boundary.height
                }
            })
        )
    })
})

console.log(boundaries)

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
    if (keys.w.pressed && lastKey === 'w') background.position.y += 3
    else if (keys.a.pressed && lastKey === 'a') background.position.x += 3
    else if (keys.s.pressed && lastKey === 's') background.position.y -= 3
    else if (keys.d.pressed && lastKey === 'd') background.position.x -= 3
}
animate()

let lastKey = ''
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            keys.w.pressed = true
            lastKey = 'w'
            break
        case 'a':
            keys.a.pressed = true
            lastKey = 'a'
            break
        case 's':
            keys.s.pressed = true
            lastKey = 's'
            break
        case 'd':
            keys.d.pressed = true
            lastKey = 'd'
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