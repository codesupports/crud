import './App.css';
import Header from './components/header';

function App() {
  return (
    <div className="App">
      <div className='container-fluid'>
        <Header />
        <div className='container py-4'>
          <div className='table-wrapper'>
            <table class="table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>John</td>
                  <td>Doe</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                  <td>john@example.com</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
