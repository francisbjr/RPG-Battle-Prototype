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

map.onload = () => {
    c.drawImage(map, -832, -600)
    c.drawImage(playerImage, canvas.width / 2 - playerImage.width / 2, canvas.height / 2)
}