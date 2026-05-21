import Pagination from "./Pagination.js";
class TableHeader {
  #label_left = "SET LABEL";
  #pagination_right = "";

  constructor(label_left, pagination_right) {
    this.label_left = label_left;
    this.pagination_right = new Pagination().html();
  }

  html(){
    const header = document.createElement("div");
    header.classList.add("table-head");

    const label = document.createElement("h2");
    label.textContent = this.label_left;

    const pagination = document.createElement("div");
    pagination.classList.add("pagination");
    // pagination.textContent = this.pagination_right;
    pagination.appendChild(this.pagination_right);

    header.appendChild(label);
    header.appendChild(pagination);

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