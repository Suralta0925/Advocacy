const home = document.getElementById("home");
const blog = document.getElementById("blog");
const contact = document.getElementById("contact-us");
const radios = document.querySelectorAll('input[name="icons"]');
const header = document.querySelector("h1");

radios.forEach(radio => {
    radio.addEventListener('change', () => {
        if (home.checked) {
            header.textContent = "Home";
        } else if (blog.checked) {
            header.textContent = "Blog";
        } else if (contact.checked) {
            header.textContent = "Contact Us";
        }
    });
});
function loadPage(page) {
    document.querySelector('iframe[name="contentFrame"]').src = page;
}
function change(){
    blog.checked = true;
}