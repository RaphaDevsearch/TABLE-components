/**
 * WRAPPER{
 *  HEADER{
 *    LABEL
 *    PAGINATION  
 *  }
 *  TABLE
 * }
 */


const HEADER = document.createElement('h1')
HEADER.textContent = "HEADER"


const TABLE = document.createElement('h2')
TABLE.textContent = "TABLE"

class pagination{
  constructor(){

  }
  html(){
    const ul = document.createElement('ul')
    for(let i =1; i<6; i++){
      let li = document.createElement('li')
      li.textContent = i;
      ul.appendChild(li)
    }
    return ul;
  }
}

class Header{
  constructor(){
    this.label = document.createElement('h1')
    this.label.textContent = "Set this label"
  }
  create(){
    const div = document.createElement('div')
    div.appendChild(this.label)
    div.appendChild(new pagination().html())
    return div
  }
}


class Wraper{
  prototype = document.getElementById('prototype')
  constructor(){
    this.header =  new Header().create()
    this.table = TABLE
  }

  rendrer(){
    prototype.appendChild(this.header)
    prototype.appendChild(this.table)
  }

}

const w = new Wraper()
w.rendrer()
