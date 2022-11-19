const onButton = document.getElementById("on")
const offButton = document.getElementById("off")
const onMonitor = document.querySelector(".onMonitor")
const offMonitor = document.querySelector(".offMonitor")


onButton.addEventListener("click", () => {
    if(onButton.checked){
        offMonitor.classList.remove("lightOn")
        onMonitor.classList.add("lightOn")
    }
})

offButton.addEventListener("click", () => {
    if(offButton.checked){
        onMonitor.classList.remove("lightOn")
        offMonitor.classList.add("lightOn")
    }
})