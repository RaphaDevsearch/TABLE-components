const tablePrototype = () => {
  const css = `
      *{
      margin:0;
      padding:0;
      box-sizing:border-box;
      font-family:Arial, Helvetica, sans-serif;
    }

    body{
      background:#f4f7fb;
      padding:40px;
      color:#333;
    }

    .table-wrapper{
      max-width:1100px;
      margin:auto;
      background:white;
      border-radius:16px;
      padding:24px;
      box-shadow:0 4px 20px rgba(0,0,0,0.08);
    }

    /* HEADER */

    .table-header{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-bottom:20px;
      flex-wrap:wrap;
      gap:15px;
    }

    .table-header h2{
      font-size:24px;
      color:#222;
    }

    /* PAGINATION */

    .pagination{
      display:flex;
      align-items:center;
      gap:8px;
    }

    .pagination button{
      border:none;
      padding:10px 14px;
      border-radius:10px;
      background:#eef2ff;
      cursor:pointer;
      transition:0.3s;
      font-weight:bold;
    }

    .pagination button:hover{
      background:#dbe4ff;
    }

    .pagination .active{
      background:#4f46e5;
      color:white;
    }

    /* TABLE */

    .table-container{
      overflow-x:auto;
    }

    table{
      width:100%;
      border-collapse:collapse;
    }

    thead{
      background:#f8fafc;
    }

    th{
      text-align:left;
      padding:16px;
      font-size:14px;
      color:#555;
      border-bottom:2px solid #e5e7eb;
    }

    td{
      padding:16px;
      border-bottom:1px solid #eee;
      font-size:15px;
    }

    tbody tr{
      transition:0.2s;
    }

    tbody tr:hover{
      background:#f9fbff;
    }

    .status{
      padding:6px 12px;
      border-radius:20px;
      font-size:13px;
      font-weight:bold;
      display:inline-block;
    }

    .completed{
      background:#dcfce7;
      color:#15803d;
    }

    .progress{
      background:#fef3c7;
      color:#b45309;
    }

    .pending{
      background:#fee2e2;
      color:#dc2626;
    }

    @media(max-width:700px){

      body{
        padding:20px;
      }

      .table-header{
        flex-direction:column;
        align-items:flex-start;
      }

    }
  `
  const style = '<style>' + css + `</style>`
  return style + `



  <div class="table-wrapper">

    <!-- HEADER -->

    <div class="table-header">

      <h2>Project Table</h2>

      <!-- PAGINATION -->

      <div class="pagination">
        <button>&laquo;</button>
        <button class="active">1</button>
        <button>2</button>
        <button>3</button>
        <button>&raquo;</button>
      </div>

    </div>

    <!-- TABLE -->

    <div class="table-container">

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Project Name</th>
            <th>Manager</th>
            <th>Status</th>
            <th>Deadline</th>
          </tr>
        </thead>

        <tbody>

          <tr>
            <td>1</td>
            <td>Student Dashboard</td>
            <td>Raphael</td>
            <td><span class="status completed">Completed</span></td>
            <td>12 Aug 2026</td>
          </tr>

          <tr>
            <td>2</td>
            <td>Todo App</td>
            <td>John</td>
            <td><span class="status progress">In Progress</span></td>
            <td>18 Aug 2026</td>
          </tr>

          <tr>
            <td>3</td>
            <td>Weather App</td>
            <td>Sarah</td>
            <td><span class="status pending">Pending</span></td>
            <td>20 Aug 2026</td>
          </tr>

          <tr>
            <td>4</td>
            <td>Finance Tracker</td>
            <td>Michael</td>
            <td><span class="status completed">Completed</span></td>
            <td>22 Aug 2026</td>
          </tr>

          <tr>
            <td>5</td>
            <td>Portfolio Website</td>
            <td>Emma</td>
            <td><span class="status progress">In Progress</span></td>
            <td>25 Aug 2026</td>
          </tr>

          <tr>
            <td>6</td>
            <td>Library System</td>
            <td>Daniel</td>
            <td><span class="status pending">Pending</span></td>
            <td>28 Aug 2026</td>
          </tr>

          <tr>
            <td>7</td>
            <td>Inventory App</td>
            <td>Olivia</td>
            <td><span class="status completed">Completed</span></td>
            <td>30 Aug 2026</td>
          </tr>

          <tr>
            <td>8</td>
            <td>School Portal</td>
            <td>James</td>
            <td><span class="status progress">In Progress</span></td>
            <td>02 Sep 2026</td>
          </tr>

          <tr>
            <td>9</td>
            <td>Hotel Booking</td>
            <td>Sophia</td>
            <td><span class="status pending">Pending</span></td>
            <td>05 Sep 2026</td>
          </tr>

          <tr>
            <td>10</td>
            <td>Admin Dashboard</td>
            <td>William</td>
            <td><span class="status completed">Completed</span></td>
            <td>10 Sep 2026</td>
          </tr>

        </tbody>

      </table>

    </div>

  </div>

  `
}

const idContainer = 'table-prototype'
document.getElementById(idContainer).innerHTML = tablePrototype()

