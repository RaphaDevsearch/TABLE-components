import Pagination from "./Pagination.js";
class TableHeader {
  // label of the header
  label = "";
  // pagination of the header
  pagination = null;

  constructor(label = "", pagination = null) {
    this.label = label;
    this.pagination = pagination;
  }

   html(){
    const header = document.createElement("div");
    const labelOfHeader = document.createElement("h1");
    labelOfHeader.textContent = this.label;
    header.appendChild(labelOfHeader);

    // paginatino :
    this.pagination = new Pagination()
    header.appendChild(this.pagination.html())
    return header;
   }
  
}
export default TableHeader;

/**
 * table-prototype{
 *    wraper{
  *    table-header{
  *      label-left: "SET LABEL";
  *      pagination-right: "PAGINATION";
  *    }
  *    Table{}
 *  }
 * }
 */