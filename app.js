let btn = document.getElementById("btn")

btn.addEventListener("click", ()=>{
    Notification.requestPermission().then(perm =>{
        if(perm === "granted"){
            new Notification("Hello world!", {
              body: "lorem ipsum dolor sit amet.",
              icon: "https://upload.wikimedia.org/wikipedia/commons/c/c6/Sign-check-icon.png",
              tag:"hello",
              vibrate
            });
        }
    })
})