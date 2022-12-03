let navList = document.getElementById("navbar-default");

function toggle() {
    if (navList.classList == "hidden w-full md:block md:w-auto")
    {
        navList.classList = "w-full md:block md:w-auto";
    }
    else 
    {
        navList.classList = "hidden w-full md:block md:w-auto";
    }
}