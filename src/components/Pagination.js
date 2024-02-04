import React from "react";
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, postsPerPage, getPost, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil((getPost.length) / 10); i++) {
        pageNumbers.push(i)
    }
    console.log('paginate',paginate)
    return (
        <nav>
            <ul className="pagination">
                <li class="page-item">
                    <a class="page-link" href={currentPage - 1} onClick={() => paginate(currentPage - 1)}>
                        <span aria-hidden="true">&laquo;</span>
                        <span class="sr-only">Previous</span>
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} to={number} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li class="page-item">
                    <a class="page-link" to={currentPage + 1} onClick={() => paginate(currentPage + 1)}>
                        <span aria-hidden="true">&raquo;</span>
                        <span class="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;