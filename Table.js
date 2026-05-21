import TableHeader from "./TableHeader.js";
class Table {
  data = {
    header : [],
    bodydata : []
  }

  constructor(header, bodydata) {
    this.data.header = header;
    this.data.bodydata = bodydata;
    this.countCols = header.length;
    this.countRows = bodydata.length;
  }

  getNRow() {
    return this.countRows;
  }

  getNCol() {
    return this.countCols;
  }

  #templetTable(){
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tbody = document.createElement("tbody");

    //  Create header row
    function createHeaderRow(){
      const tr = document.createElement("tr");
      this.data.header.map(column => {
        const th = document.createElement("th");
        th.textContent = column;
        tr.appendChild(th);
      });
      return tr;
    }

    thead.appendChild(createHeaderRow.call(this));


    this.data.bodydata.map(row => {
      const tr = document.createElement("tr");
      row.map(cell => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });

    table.appendChild(thead);
    table.appendChild(tbody);

    return table;
  }


  displayIn(contenaireId){
    const container = document.getElementById(contenaireId);
    const tableHeader = new TableHeader("Student List");
    container.appendChild(tableHeader.html());
    container.appendChild(this.#templetTable());
  }
}

export default Table;