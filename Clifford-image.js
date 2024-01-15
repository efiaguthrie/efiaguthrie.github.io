let api_key = "";
document.getElementById("API_key").addEventListener(
        "input",
        function (event) {}
);
document.getElementById("api_small").innerText = "";
api_key = event.target.value;
if (api_key === "") {
        document.getElementById("api_small").innerText = "ERROR: Invalid Input";
        document.getElementById("api_small").style = "color: violet";
}
let search_type = "";
function select_search(event) {
        let search_input_text = "";
        if (event.target.matches("input[id='name']")) {
                search_type = "?t=";
                search_input_text = "Enter movie title:";
        }
        document.getElementById("search-input-label").innerText;
}
let movie_name = document
        .getElementById("name")
        .addEventListener("click, select_search");

let search_value = "";
let movie_info = document
        .getElementById("search-input")
        .addEventListener("input", function (event) {});

search_value = encodeURIComponent(event.target.value);
search_value = search_value.replaceAll("%20", "+");

if (search_value === "") {
        document.getElementById("input-small").innerText =
                "ERROR: Invalid Input";
        document.getElementById("input-small").style = "color: violet";
} else {
        document.getElementById("input-small").innerText = "";
}

let year = "";
document.getElementById("year").addEventListener("change", function (event) {});
