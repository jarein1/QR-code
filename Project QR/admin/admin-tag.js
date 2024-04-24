// const optionMenu = document.querySelector(".select-menu"),
//        selectBtn = optionMenu.querySelector(".select-btn"),
//        options = optionMenu.querySelectorAll(".option"),
//        sBtn_text = optionMenu.querySelector(".sBtn-text");
// selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));       
// options.forEach(option =>{
//     option.addEventListener("click", ()=>{
//         let selectedOption = option.querySelector(".option-text").innerText;
//         sBtn_text.innerText = selectedOption;
//         optionMenu.classList.remove("active");
//     });
// });

// Select the elements
const optionMenus = document.querySelectorAll(".select-menu"); // Select all select-menu elements
optionMenus.forEach(optionMenu => {
    const selectBtn = optionMenu.querySelector(".select-btn");
    const options = optionMenu.querySelectorAll(".option");
    const sBtn_text = optionMenu.querySelector(".sBtn-text");

    // Add event listener to the select button
    selectBtn.addEventListener("click", () => {
        optionMenu.classList.toggle("active");
    });

    // Add event listener to each option
    options.forEach(option => {
        option.addEventListener("click", () => {
            let selectedOption = option.querySelector(".option-text").innerText;
            sBtn_text.innerText = selectedOption;
            optionMenu.classList.remove("active");
        });
    });
});
