
import { Link } from "react-router-dom";

const Pagination = ({ currentPage, postsPerPage, getPost, paginate }) => {

    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil((getPost.length) / 10); i++) {
        pageNumbers.push(i)
    }
    //console.log('currentPage', currentPage)
    return (
        <nav>
            <ul className="pagination justify-content-center">
                <li className="page-item">
                    <a className={`page-link ${currentPage == 1 ? 'disabled' : ''}`} href={currentPage - 1} onClick={() => paginate(currentPage - 1)}>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {pageNumbers.map((number) => (
                    <li key={number} className={`page-item ${(number) == currentPage ? 'active' : ''}`}>
                        <a onClick={() => paginate(number)} to={number} className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
                <li className="page-item">
                    <a className={`page-link ${currentPage == (pageNumbers.length) ? 'disabled' : ''}`} to={currentPage + 1} onClick={() => paginate(currentPage + 1)}>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Pagination;