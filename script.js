const toDoInput = document.getElementById('to_do_input')
const submitToDO = document.getElementById('submit')
const container = document.querySelector('.container')
const buttons = document.querySelector('.buttons')


const ToDoList = ()=> {
    const newDiv = document.createElement('div')

    if (toDoInput.value===''){
        newDiv.style.display = 'none'
    }

    newDiv.classList.add('new_div_style')
    container.appendChild(newDiv)
    newDiv.innerHTML = toDoInput.value
    toDoInput.value = ''

    const deleteBtn = document.createElement('button')
    
    deleteBtn.style.backgroundColor = 'red'
    deleteBtn.style.borderRadius = '50%'
    deleteBtn.style.width = '20px'
    deleteBtn.style.height = '20px'
    deleteBtn.style.justifyContent = 'center'
    deleteBtn.style.alignItems = 'center'
    deleteBtn.style.display = 'flex'

    buttons.style.display = 'block'

    newDiv.append(deleteBtn)
    deleteBtn.classList.add('delete_btn_style')
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>'

    deleteBtn.addEventListener('click', (e)=> {
        newDiv.remove()
    })

    newDiv.addEventListener('dblclick', (e)=> {
        newDiv.classList.toggle('done_to_do')
    })
}

submitToDO.addEventListener('click', ToDoList)

// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

const intialOutput = document.querySelector('.initial_output')
const storedDataInput = localStorage.getItem('inputStorageValue')

if (toDoInput) {
    intialOutput.textContent = storedDataInput
}

toDoInput.addEventListener('input', (inputStorage)=> {
    intialOutput.textContent = inputStorage.target.value
    console.log(inputStorage.target.value)
})

const saveToLocalStorage = ()=> {
    localStorage.setItem('inputStorageValue', (intialOutput.textContent))
}

submitToDO.addEventListener('click', saveToLocalStorage)