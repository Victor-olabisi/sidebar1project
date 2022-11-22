const getElement = (selection)=>{
    const element = document.querySelector(selection);
    if(element) {
        return element;
    } else {
        throw Error ("please check selection");
    }
}
const menu = getElement(".nav-menu");
const sidebar = getElement(".sidebar");
const close = getElement(".close")

menu.addEventListener("click", ()=>{
    sidebar.classList.add("show-sidebar");
});

close.addEventListener("click",()=>{
    sidebar.classList.remove("show-sidebar");
})