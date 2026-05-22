import TableHeader from "./TableHeader.js";
import Pagination from "./Pagination.js";
class TableWrapper {
  idWrapper = ""; // id of the container where the table will be rendered
  header = null;
  bodydata = null;
  constructor() {
    
  }

  render(idWrapper, labelHeader="SET LABEL"){


    /**
     * append header to container
     */
    this.header = new TableHeader();
 


    document.getElementById(idWrapper).appendChild(this.header.html());

    const table = document.createElement("div");
    const tableLabel = document.createElement("h1");
    tableLabel.textContent = "Table Body";
    table.appendChild(tableLabel);
    document.getElementById(idWrapper).appendChild(table);
    

  }
}

export default TableWrapper;