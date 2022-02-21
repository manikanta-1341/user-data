function createcountry({name, Avatar, id}){
    const container=document.createElement("div");
    container.setAttribute("class", "details");
    container.innerHTML = `
    <img src=${Avatar}>
    <div class="info">
        <h2>Name:${name}</h2>
        <h3>Id:${id}</h3>
        
    </div>
    `;
    document.body.append(container)
}


fetch("https://62136dcaf43692c9c6044e88.mockapi.io/users")
.then((user)=>user.json())
.then((data)=>{
  console.log(data)
  data.forEach((e)=>{
  userInfo={name:e.name, Avatar:e.avatar, id:e.id}
  createcountry(userInfo)
  })
})