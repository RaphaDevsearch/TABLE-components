class TableWrapper {
  idWrapper = ""; // id of the container where the table will be rendered
  header = null;
  bodydata = null;
  constructor() {
    
  }

  render(idWrapper){

    /**
     * HEADER = label + pagination
     * body = table
     */

    // label

    const header = document.createElement("div");
    const labelOfHeader = document.createElement("h1");
    labelOfHeader.textContent = "Table Header";
    header.appendChild(labelOfHeader);

    // paginatino :
    const pagination = document.createElement("div");
    const paginationLabel = document.createElement("p");
    paginationLabel.textContent = "Pagination";
    pagination.appendChild(paginationLabel);
    header.appendChild(pagination);

    /**
     * append header to container
     */
    document.getElementById(idWrapper).appendChild(header);

    const table = document.createElement("div");
    const tableLabel = document.createElement("h1");
    tableLabel.textContent = "Table Body";
    table.appendChild(tableLabel);
    document.getElementById(idWrapper).appendChild(table);
    

  }
}

export default TableWrapper;