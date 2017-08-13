document.addEventListener("DOMContentLoaded", function(){
    function dropMenu() {
        document.getElementById('dropdown-button').classList.toglle("show");
    }

    window.click = function(event) {
        if (!event.target.matches("#dropdown-button")) {
            var dropdown = document.querySelectorAll(".dropdown-content");
            for (var i = 0; i < dropdown.length; i++) {
                var openDropdown = dropdown[i];
                if (openDropdown.classList.contains("show")) {
                    openDropdown.classList.remove("show");
                }
            }
        }
    }

});
