const input = document.getElementById('todo-input')

const Addbutton = document.getElementById('create-todo-btn')

const TodoBoard = document.getElementById('todo-board')

Addbutton.addEventListener('click',(e)=>{

    const value = input.value

    const div = document.createElement('div')
    const p = document.createElement('p')

    const text = document.createTextNode(value);

    div.setAttribute('draggable','true')
    div.classList.add('item')

    p.appendChild(text)

    div.appendChild(p)

    div.addEventListener('dragstart',e =>{
        div.classList.add('Dragging')
    })
    div.addEventListener('dragend',e =>{
        div.classList.remove('Dragging')
    })

    TodoBoard.appendChild(div)

    input.value=' '

})

