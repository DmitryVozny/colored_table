function boardWithRandomColors(squaresCount) {
    let board = document.getElementById('board');
    let colors = ['#2e2300', '#6e6702', '#c05805', '#d61800', '#c60000', '#db9501', '#fd974f', '#805a3b', '#e94f08']


    for (let i = 0; i < squaresCount; i++) {
        let square = document.createElement('div')
        square.classList.add('square')

        square.addEventListener('mouseover', () => {
            setColor(square)
        })

        square.addEventListener('mouseleave', () => {
            removeColor(square)
        })

        board.append(square)
    }

    function setColor(el) {
        let color = getRandomColor()
        el.style.background = color;
        el.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
    }

    function removeColor(el) {
        el.style.background = '#1d1d1d';
        el.style.boxShadow = `0 0 2px #000`;
    }

    function getRandomColor() {
        let index = Math.floor(Math.random() * colors.length)
        return colors[index]
    }
}

boardWithRandomColors(500);