let toggle = button => {
    let element = document.getElementById("tablegithub");
    let hidden = element.getAttribute("hidden");

    if (hidden) {
       element.removeAttribute("hidden");
       button.innerText = "Cacher le tableau";
    } else {
       element.setAttribute("hidden", "hidden");
       button.innerText = "Afficher la table";
    }
  }

  const formEl = document.querySelector("form");
  const tbodyEl = document.querySelector("tbody");
  const tableEl = document.querySelector("table");

  function onAddWebsite(e) {
    e.preventDefault();
    const whycountryvisited = document.getElementById("whycountryvisited").value;
    const visitedcountry = document.getElementById("visited_country").value;
    tbodyEl.innerHTML +=`
    <tr>
        <td>${whycountryvisited}</td>
        <td>${visitedcountry}</td>
        <td><button class="deleteBtn">Delete</button></td>
    </tr>
    `;
  }

  function onDeleteRow(e) {
    if (!e.target.classList.contains("deleteBtn")) {
        return;
    }
    const btn = e.target;
    btn.closest("tr").remove();
  }

  formEl.addEventListener("submit",onAddWebsite);
  tableEl.addEventListener("click",onDeleteRow);