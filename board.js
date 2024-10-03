const items = document.querySelectorAll('.item')
const boards = document.querySelectorAll('.board')

boards.forEach(board=>{
    board.addEventListener('dragover',()=>{
        const task = document.querySelector('.Dragging')
        board.appendChild(task)
    })
})

items.forEach(item=>{
    item.addEventListener('dragstart',e =>{
        item.classList.add('Dragging')
    })
    item.addEventListener('dragend',e =>{
        item.classList.remove('Dragging')
    })
})

