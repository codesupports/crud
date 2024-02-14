import { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';
import Header from './components/header';
import Pagination from './components/Pagination';

function App() {

  const [getPost, setGetPost] = useState([]);
  const [perPage, setPerPage] = useState(10);
  const [startPage, setStartPage] = useState(0);
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
    setPerPage(pageNumber * 10)
    setStartPage(pageNumber * 10 - 10)
  };
  //console.log('currentPage',currentPage)
  return (
    <div className="App">
      <div className='container-fluid'>
        <Header />
        <div className='container py-4 pt-5 mt-3'>
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
                  getPost.slice(startPage, perPage).map((data, index) => {
                    return <tr key={index}>
                      <td>{data.id}</td>
                      <td>{data.title}</td>
                      <td>{data.body}</td>
                      <td className='text-nowrap'>
                        <button className="btn btn-primary mx-2">Edit</button>
                        <button className="btn btn-danger">Delete</button>
                      </td>

                    </tr>
                  })
                }
              </tbody>
            </table>
            <div className='text-center pb-2'>
            <Pagination
              getPost={getPost}
              postsPerPage={perPage}
              paginate={paginate}
              currentPage={currentPage}
            />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
