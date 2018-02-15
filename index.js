document.addEventListener('DOMContentLoaded', function(){

  getUsers()

  function getUsers(){
    return fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(usersArr => {
      usersArr.forEach(user => {
        renderUserList(user)
      })
    })
  }

  function renderUserList(user){
    let userUl = document.querySelector('#user-list')
        let userLi = document.createElement('li')
            userLi.innerText = user.name
            userLi.id = user.id
            userLi.addEventListener("click", (event) => {
              event.preventDefault()
              renderUser(user)
            })
            userUl.append(userLi)
  }

  function renderUser(user){
    console.log(user) // works

    let userDiv = document.querySelector("#user-show")
        userDiv.innerHTML = ""
        let userName = document.createElement("h2")
            userName.innerText = user.name
            userDiv.append(userName)
            console.log(userName);
        let deleteBtn = document.createElement("button")
            deleteBtn.innerText = "Delete"
            deleteBtn.addEventListener("click", (event) => {
              event.preventDefault()
              deleteUser(user)
            })
            userDiv.append(deleteBtn)
            console.log(deleteBtn);
  }

  function deleteUser(user) {
    let userLi = document.getElementById(`${user.id}`)
        console.log(userLi);
        userLi.remove()

    return fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
      method: "DELETE"
    })
    .then(res => res.json())
    .then(message => console.log(message))
  }

})
