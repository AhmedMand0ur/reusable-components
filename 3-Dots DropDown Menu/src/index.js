import "./styles.css";

document.addEventListener("click", function toggleDropdown(event) {

  /* Check if the clicked element is a dropdown button */
  const button = event.target.closest(".dropdown-btn");
  if (button) {
    const dropdown = button.nextElementSibling;

    /* Close other open dropdowns */
    document.querySelectorAll(".dropdown-content.visible").forEach(content => {
      if (content !== dropdown) {
        content.classList.remove("visible");
      }
    });

    /* Toggle the clicked dropdown */
    dropdown.classList.toggle("visible")
  } else {
    /* Close all dropdowns when clicking outside */
    document.querySelectorAll(".dropdown-content.visible").forEach(content => {
      content.classList.remove("visible");
    });
  }
});
