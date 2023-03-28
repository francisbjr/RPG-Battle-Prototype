const canvas = document.querySelector('canvas')
//Game Context
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillStyle = 'white'
c.fillRect(0,0, canvas.width, canvas.height)

const playerImage = new Image()
playerImage.src = './images/playerDown.png'

const map = new Image()
map.src = './images/Demo Town.png'

// Infinite animation loop
function animate() {
    window.requestAnimationFrame(animate)
    //Center of map and player
    c.drawImage(map, -832, -620) 
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
}
animate()

window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'w':
            console.log('pressed w key')
            break
        case 'a':
            console.log('pressed a key')
            break
        case 's':
            console.log('pressed s key')
            break
        case 'd':
            console.log('pressed d key')
            break
    }
})