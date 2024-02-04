import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import Pagination from './components/Pagination';

function App() {

  const [getPost, setGetPost] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
      setGetPost(response.data);
    }).catch((err) => {
      console.log(err);
    })
  }, [])

  const postRows = () => {
    getPost.map((data, index) => {
      return <tr key={index}>
        <td>{data.id}</td>
        <td>{data.title}</td>
        <td>{data.body}</td>
        <td>
          <button className="btn btn-primary mx-2">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </td>

      </tr>
    })
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
 };

  return (
    <div className="App">
      <div className='container-fluid'>
        <Header />
        <div className='container py-4'>
          <div className='table-wrapper'>
            <table className="table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Title</th>
                  <th>Body</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  getPost.map((data, index) => {
                    return <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.body}</td>
                      <td>
                        <button className="btn btn-primary mx-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>

                    </tr>
                  })
                }
              </tbody>
            </table>
            <Pagination 
            getPost={getPost}
            postsPerPage={perPage}
            paginate={paginate}
            />
            {/* <nav aria-label="Page navigation example">
              <ul className="pagination">
                <li className="page-item"><a className="page-link" href="#">Previous</a></li>
                {
                  pageNumbers.map((data, index) => {
                    return (
                      <li key={index} className={`page-item`}>
                        <a className="page-link" href="#">{data}</a>
                      </li>
                    )
                  })
                }
                <li className="page-item"><a className="page-link" href="#">Next</a></li>
              </ul>
            </nav> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
