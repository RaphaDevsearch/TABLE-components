class Pagination {

  html() {

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");

    // PREV BUTTON

    const prevButton = document.createElement("button");
    prevButton.innerHTML = "&laquo;";
    pagination.appendChild(prevButton);

    // PAGE BUTTONS
    
    
    for (let i = 1; i <= 15; i+=5) {

      const pageButton = document.createElement("button");

      pageButton.textContent = i;

      if (i === 1) {
        pageButton.classList.add("active");
      }

      pagination.appendChild(pageButton);

    }

    // NEXT BUTTON

    const nextButton = document.createElement("button");
    nextButton.innerHTML = "&raquo;";

    pagination.appendChild(nextButton);

    return pagination;

  }

}

export default Pagination;