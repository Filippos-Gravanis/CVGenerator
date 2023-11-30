export default function showButtonHandler(type){
    const showMenuButton = document.querySelector("#" + type +'ShowMenuButton')
    const dropDownMenu = document.querySelector("#" + type + 'DropDownMenu')
    const container = document.querySelector("#"+type+'Container')
    if (showMenuButton.classList.contains('clicked')){
    showMenuButton.classList.remove('clicked')
    dropDownMenu.classList.remove('active')
    container.classList.remove('nobottomborder')
    }
    else{
        showMenuButton.classList.add('clicked')
        dropDownMenu.classList.add('active')
        container.classList.add('nobottomborder')
    }
} 