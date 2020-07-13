import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const[firstName, setFirstName] = useState("shrek")
  const[lastName, setLastName] = useState("onions")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  return (
    <div className="container">
      <div className="card-header">
        <h1>create an acct</h1>
        <div className="card-body">
          <form>
            <div className="formgroup">


              <label>First Name:</label>
              <input type="text" name="firstName" className="form-control" onChange={e => setFirstName(e.target.value)} />


              <label>Last Name:</label>
              <input type="text" name="lastName" className="form-control" onChange={e => setLastName(e.target.value)}/>


              <label>Email:</label>
              <input type="text" name="email" className="form-control"onChange={e => setEmail(e.target.value)} />


              <label>Password:</label>
              <input type="text" name="password" className="form-control" onChange={e => setPassword(e.target.value)}/>


              <label>Confirm:</label>
              <input type="text" name="password" className="form-control"onChange={e => setPassword(e.target.value)} />


              <input type="submit" value="Submit" className="btn btn-outline-info" />
            </div>
          </form>
        </div>
        <div className="card-body">
          <ul className="whatever">
  <li className="whaatever">FIRST {firstName}</li>
  <li className="whaatever">LAST {lastName}</li>
  <li className="whaatever">EMAIL {email}</li>
  <li className="whaatever">NOT AT ALL SECURE {password}</li>
  <li className="whaatever">FURTHER NOT SECURE {password}</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
