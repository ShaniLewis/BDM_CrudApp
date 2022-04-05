function Page1() {
    import React, {useState, useEffect} from 'react';
import "./index.js";
import Axios from 'axios';

function App() {
  const [Name, setName] = useState('');
  const [Phone, setPhone] = useState('');
  const [City, setCity] = useState('');
  const [State, setState] = useState('');
  const [BloodType, setBloodType] = useState('');
  const [DonationType, setDonationType] = useState('');
  const [LastDonationType, setLastDonationType] = useState('');
  const [LastDonationDate, setLastDonationDate] = useState('');

  const [DonorList, setDonorList] = useState([]);

  useEffect(() =>{
    Axios.get('http://localhost:3001/api/get').then((response)=>{
    setDonorList(response.data)
    });
  }, []);

  const Submit = () =>{
      Axios.post('http://localhost:3001/api/insert', {
        Name: Name, 
        Phone: Phone, 
        City: City, 
        State: State,
        BloodType: BloodType,
        DonationType: DonationType,
        LastDonationDate: LastDonationDate,
        LastDonationType: LastDonationType,
      });

        setDonorList([
        ...DonorList, {Name: Name, Phone: Phone, City: City, State_Abbr: State, Blood_Type: BloodType, Donation_Type_ID: DonationType, Last_Donation_Date: LastDonationDate, Last_Donation_Type: LastDonationType}, 
      ]);
      };
  
    return(
    <div className="App">
      <h1>BLOOD DONATION MANAGEMENT</h1>
      <div className = "form">
        
        <label className = "label"> Donor Full Name </label>
        <input type = "text" name = "Name" onChange={(e) => {
          setName(e.target.value)}}/>
        
        <label className = "label" for="floatingNumber">Phone Number</label>
        <input name = "Phone" class="form-control" id="floatingNumber" placeholder="(123)-456-789" onChange={(e) => {
          setPhone(e.target.value)}}/>
        
        <label className = "label">City</label>
        <input type = "text" name = "City" onChange={(e) => {
          setCity(e.target.value)}}/>
        
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
          
        <label className = "label"> Donation Type </label>
        <select class="form-select" id="DonationSelect" name = "DonationType" onChange={(e) => {
          setDonationType(Number(e.target.value))}}>
          <option value="Null" selected="selected">Select a donation type</option>
          <option value="1">Whole Blood</option>
          <option value="2">Double Red Cells</option>
          <option value="3">Plasma</option>
          <option value="4">Platelets</option>
        </select>
        
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

        <label className = "label"> Last Donation Date </label>
      <input type="Donation Date" type = "date" name = "LastDonationDate" class="form-control" id="floatingNumber" placeholder="MM-DD-YYYY" min="1997-01-01" max="2030-12-31" onChange={(e) => {
          setLastDonationDate(e.target.value)}}/>

      <button  className = "button" onClick={Submit}>Submit</button>
      
      <div className = "Table">
        <table>
              <tr>
              <th>Name </th>
              <th>Phone</th>
              <th>City</th>
              <th>State</th>
              <th>Blood Type</th> 
              <th>Donation Type</th>
              <th>Last Donation Date</th>
              <th>Last Donation Type</th> 
              <th>Update / Delete</th> 

              </tr>
     
      {DonorList.map((val)=> {
          return(
              <tr>
              <td>{val.Name}</td>
              <td>{val.Phone}</td>
              <td>{val.City}</td>
              <td>{val.State_Abbr}</td>
              <td>{val.Blood_Type} </td> 
              <td>{val.Donation_Type_ID}</td>
              <td>{val.Last_Donation_Date}</td>
              <td>{val.Last_Donation_Type}</td>
              <td><button>Update</button><button>Delete</button></td>
              </tr>
          );
        })};
        </table>
      </div>
      </div>
    </div>
  );
}

export default Page1;