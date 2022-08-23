(function () {
    const server = "https://jsonplaceholder.typicode.com/posts",
        root = document.getElementById("root");

    fetch(server)
        .then(function (value) {
            if (value.status !== 200) {
                return Promise.reject(new Error(value.status));
            }
            return value.json();
        })
        .then(function (output) {
            const table = createTable(output);
            root.appendChild(table);

            const tableTable = document.querySelector(".table");
            const headers = tableTable.querySelectorAll("th");
            const directions = Array.from(headers).map(function (header) {
                return "";
            });

            headers.forEach((header, index) => {
                header.addEventListener("click", () => {
                    const direction = directions[index] || "asc";
                    const multiplier = direction === "asc" ? 1 : -1;
                    let sortedRows = Array.from(table.rows)
                        .slice(1)
                        .sort(function (rowA, rowB) {
                            let tda = rowA.cells[index].innerHTML;
                            let tdb = rowB.cells[index].innerHTML;
                            if (+tda && +tdb) {
                                return (tda - tdb) * multiplier;
                            } else {
                                return tda > tdb
                                    ? 1 * multiplier
                                    : tda < tdb
                                    ? -1 * multiplier
                                    : 0;
                            }
                        });
                    directions[index] = direction === "asc" ? "desc" : "asc";
                    table.tBodies[0].append(...sortedRows);
                });
            });
        });
})();

function createTable(data) {
    const table = document.createElement("table");
    table.classList.add("table");
    const thead = document.createElement("thead");
    let tr = document.createElement("tr");
    for (let key in data[0]) {
        let th = document.createElement("th");
        let newText = document.createTextNode(key);
        th.appendChild(newText);
        tr.appendChild(th);
    }
    thead.appendChild(tr);
    table.appendChild(thead);

    let tbody = document.createElement("tbody");
    for (let i = 0; i < data.length; i++) {
        let tr = document.createElement("tr");
        for (let key in data[i]) {
            let td = document.createElement("td");
            let newText = document.createTextNode(data[i][key]);
            td.appendChild(newText);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }

    table.appendChild(tbody);
    return table;
}
