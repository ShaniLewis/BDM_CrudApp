import React, {useState, useEffect} from 'react';
import "./App.css";
import Axios from 'axios';

function App() {
  const [log_ID] = useState('');
  const [SSN, setSSN] = useState('');
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [BloodType, setBloodType] = useState('');
  const [DonationType, setDonationType] = useState('');
  const [LastDonationType, setLastDonationType] = useState('');
  const [LastDonationDate, setLastDonationDate] = useState('');

  const [DonorList, setDonorList] = useState([]);

  const [newSSN, setNewSSN] = useState('');
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [newCity, setNewCity] = useState('');
  const [newState, setNewState] = useState('');
  const [newBT, setNewBT] = useState('');
  const [newDT, setNewDT] = useState('');
  const [newLDD, setNewLDD] = useState('');
  const [newLDT, setNewLDT] = useState('');

  useEffect(() =>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
      setDonorList(response.data);
    });
  }, []);

  const Submit = () =>{
      Axios.post('http://localhost:3001/api/insert', {
        ID: log_ID,
        SSN: SSN,
        Name: Name, 
        Phone: Phone, 
        City: City, 
        State: State,
        BloodType: BloodType,
        DonationType: DonationType,
        LastDonationDate: LastDonationDate,
        LastDonationType: LastDonationType,
      }).then(() => { 
        setDonorList([
        ...DonorList, {SSN: SSN, Name: Name, Phone: Phone, City: City, State_Abbr: State, Blood_Type: BloodType, Donation_Type_ID: DonationType, Last_Donation_Date: LastDonationDate, Last_Donation_Type: LastDonationType
        }, 
        ]);
      });
      window.location.reload();
    };


    const Delete = (log_ID) => {
      Axios.delete(`http://localhost:3001/api/delete/${log_ID}`)
      window.location.reload();
    };

    const Update = (log_ID, item) => {
      Axios.put(`http://localhost:3001/api/update/${log_ID}`,
      {
      ID: log_ID,
      SSN: newSSN,
      Name: newName,
      Phone: newPhone, 
      City: newCity, 
      State: newState,
      BloodType: newBT,
      DonationType: newDT,
      LastDonationDate: newLDD,
      LastDonationType: newLDT,
        });
        window.location.reload();
  }; 
      
    return(
    <div className="App">
      <h1>BLOOD DONATION MANAGEMENT</h1>
      <div className = "form">
        <div className = "forms">
        
        <forms>
        <form>
          <br></br>
        <label>Donor Full Name</label>
        <input type = "text" name = "Name" onChange={(e) => {
          setName(e.target.value)}}/>
        </form>

        <form>
        <label>SSN</label>
        <input type = "text" name = "SSN" onChange={(e) => {
          setSSN(e.target.value)}}/>
        </form>

          <form>
        <label className = "label" for="floatingNumber">Phone Number</label>
        <input name = "Phone" class="form-control" id="floatingNumber" placeholder="(123)-456-7890" onChange={(e) => {
          setPhone(e.target.value)}}/>
        </form>

        <form>
        <label className = "label">City</label>
        <input type = "text" name = "City" onChange={(e) => {
          setCity(e.target.value)}}/>
        </form>

        <form>
        <label className = "label">State</label>
        <select class="form-select" id="StateSelect" name = "State" onChange={(e) => {
          setState(e.target.value)}}>
          <option value="" selected="selected">Select a state</option>
          <option value="AL">Alabama</option>
          <option value="AK">Alaska</option>
          <option value="AZ">Arizona</option>
          <option value="AR">Arkansas</option>
          <option value="CA">California</option>
          <option value="CO">Colorado</option>
          <option value="CT">Connecticut</option>
          <option value="DE">Delaware</option>
          <option value="DC">District Of Columbia</option>
          <option value="FL">Florida</option>
          <option value="GA">Georgia</option>
          <option value="HI">Hawaii</option>
          <option value="ID">Idaho</option>
          <option value="IL">Illinois</option>
          <option value="IN">Indiana</option>
          <option value="IA">Iowa</option>
          <option value="KS">Kansas</option>
          <option value="KY">Kentucky</option>
          <option value="LA">Louisiana</option>
          <option value="ME">Maine</option>
          <option value="MD">Maryland</option>
          <option value="MA">Massachusetts</option>
          <option value="MI">Michigan</option>
          <option value="MN">Minnesota</option>
          <option value="MS">Mississippi</option>
          <option value="MO">Missouri</option>
          <option value="MT">Montana</option>
          <option value="NE">Nebraska</option>
          <option value="NV">Nevada</option>
          <option value="NH">New Hampshire</option>
          <option value="NJ">New Jersey</option>
          <option value="NM">New Mexico</option>
          <option value="NY">New York</option>
          <option value="NC">North Carolina</option>
          <option value="ND">North Dakota</option>
          <option value="OH">Ohio</option>
          <option value="OK">Oklahoma</option>
          <option value="OR">Oregon</option>
          <option value="PA">Pennsylvania</option>
          <option value="RI">Rhode Island</option>
          <option value="SC">South Carolina</option>
          <option value="SD">South Dakota</option>
          <option value="TN">Tennessee</option>
          <option value="TX">Texas</option>
          <option value="UT">Utah</option>
          <option value="VT">Vermont</option>
          <option value="VA">Virginia</option>
          <option value="WA">Washington</option>
          <option value="WV">West Virginia</option>
          <option value="WI">Wisconsin</option>
          <option value="WY">Wyoming</option>
        </select>
        </form>

          <form>
        <label className = "label"> Blood Type</label>
        <select class="form-select" id="BloodSelect" name ="BloodType" onChange={(e) => {
          setBloodType(e.target.value)}}>
          <option value="Null" selected="selected">Select a blood type</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>
        </form>
          
         <form> 
        <label className = "label"> Donation Type </label>
        <select class="form-select" id="DonationSelect" name = "DonationType" onChange={(e) => {
          setDonationType(Number(e.target.value))}}>
          <option value="Null" selected="selected">Select a donation type</option>
          <option value="1">Whole Blood</option>
          <option value="2">Double Red Cells</option>
          <option value="3">Plasma</option>
          <option value="4">Platelets</option>
        </select>
        </form>
         
         <form>
        <label className = "label"> Last Donation Type </label>
        <select class="form-select" id="DonationSelect" name = "LastDonationType" onChange={(e) => {
          setLastDonationType(Number(e.target.value))}}>
          <option value="Null" selected="selected">Select a donation type</option>
          <option value="Null">No previous donation</option>
          <option value="1">Whole Blood</option>
          <option value="2">Double Red Cells</option>
          <option value="3">Plasma</option>
          <option value="4">Platelets</option>
        </select>
        </form>

          <form>
        <label className = "label"> Last Donation Date </label>
      <input className = "other" type = "date" name = "LastDonationDate" class="form-control" id="floatingNumber" placeholder="MM-DD-YYYY" min="1997-01-01" max="2030-12-31" onChange={(e) => {
          setLastDonationDate(e.target.value)}}/>
    </form>
              <button type = "submit" className="button" onClick={Submit} > Submit</button>

    </forms>

     </div>
      <div className = "Table">

        <table>
              <tr>
              <th>Log</th>
              <th>SSN</th>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
              <th>Blood Type</th> 
              <th>Donation Type</th>
              <th>Last Donation Date</th>
              <th>Last Donation Type</th> 
              <th>Edit</th>
              </tr>

      {DonorList.map((val)=> {
          return(
            <tbody>
              <tr>
              <td>{val.log_ID}</td>
              <td> {val.SSN.slice(val.SSN.length-4)} <input type="text" maxLength = {9} minLength = {9} name="SSN" onChange={(e) => {
          setNewSSN(e.target.value)}}></input></td>
          
          <td>{val.Name} <input type="text" name="Name" onChange={(e) => {
          setNewName(e.target.value)}}></input></td>

          <td>{val.Phone} <input type="text" name="Phone" onChange={(e) => {
          setNewPhone(e.target.value)}}></input></td>

          <td>{val.City} <input type="text" name="City" onChange={(e) => {
          setNewCity(e.target.value)}}></input></td>

        <td>{val.State_Abbr} <input type="text"  maxLength = {2} minLength = {2} name="State" onChange={(e) => {
          setNewState(e.target.value)}}></input></td>

        <td>{val.Blood_Type} <input type="text" name="BloodType" onChange={(e) => {
          setNewBT(e.target.value)}}></input></td>

      <td>{val.Donation_Type_ID} <input type="text" name="DonationType" onChange={(e) => {
          setNewDT(e.target.value)}}></input></td>

      <td>{val.Last_Donation_Date} <input type="text" name="LastDonationDate" onChange={(e) => {
          setNewLDD(e.target.value)}}></input></td>

    <td>{val.Last_Donation_Type} <input type="text" name="LastDonationType" onChange={(e) => {
          setNewLDT(e.target.value)}}></input></td>
 
                <td>
                  <button className="button2" onClick={() => { Update(val.log_ID)}}>Update</button>
                  <button className="button2" onClick={() => { Delete(val.log_ID) }}>Delete</button>
                </td>
              </tr>
              </tbody>
          );
        })}
        </table>
      </div>
      </div>
    </div>

  );
}
export default App;

