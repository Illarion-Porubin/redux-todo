import React from "react";
import { Component } from "react";

import'./pagination.css'

class Pagination extends Component{

  checkPage = (e) => {
    e.currentTarget.classList.add("to-do__text-active")
  }
  onBlur = (e) => {e.currentTarget.classList.remove("to-do__text-active")}

  render(){
    const {taskPerPages, totalPages, paginate, prevPage, nextPage} = this.props
    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(totalPages / taskPerPages); i++){
        pageNumbers.push(i)
    }

    
    return(
      <div>
        <ul className="pagination">
        <button className="btn btn-prev" onClick={prevPage}>prev</button>
        <button className="btn btn-next" onClick={nextPage}>next</button>
          {
            pageNumbers.map(number => (
              <li className="pageItem" key={number} 
                onClick={this.checkPage}
                onBlur={this.onBlur}
                >
                <a className="pageLink" href="!#"
                  onClick={() => paginate(number)}
                  >
                  {number}
                </a>
              </li>
            ))
          }
        </ul>
      </div>
    )
  }
}

export default Pagination