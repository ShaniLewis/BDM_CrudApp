const express = require('express');
// const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();
const mysql = require('mysql');

const db = mysql.createPool({
    host: 'localHost',
    user: 'root',
    password: 'Sufficient232',
    database: 'bbmd',
});
    app.use(cors());
    app.use(express.json());
    app.use(express.urlencoded({extended: true}));
    // app.use(bodyParser.urlencoded({extended: true}));

    app.get('/api/get', (req, res) => {
        const sqlSelect = "SELECT * FROM donor;";
        db.query(sqlSelect, (err, result) => {
            res.send(result);
        });
    });

    app.post('/api/insert', (req, res) =>{
        const SSN = req.body.SSN;
        const Name = req.body.Name;
        const Phone = req.body.Phone;
        const City = req.body.City;
        const State = req.body.State;
        const BloodType = req.body.BloodType;
        const DonationType = req.body.DonationType;
        const LastDonationDate = req.body.LastDonationDate;
        const LastDonationType = req.body.LastDonationType;

        const sqlInsert = "INSERT INTO donor (SSN, Name, Phone, City, State_Abbr, Blood_Type, Donation_Type_ID, Last_Donation_Date, Last_Donation_Type) VALUES (?,?,?,?,?,?,?,?,?);"
        db.query(sqlInsert, [SSN, Name, Phone, City, State, BloodType, DonationType, LastDonationDate, LastDonationType], (err, result) => {
            console.log(err);
        });
    });

    app.delete("/api/delete/:log_ID", (req, res) => {
        const ID = req.params.log_ID;
        const sqlDelete = "DELETE FROM donor WHERE log_ID = ?";
        db.query(sqlDelete, ID, (err, result) =>{
            if (err) console.log(err, result);
        });
    });

    app.put("/api/update/:log_ID", (req, res) => {
        const ID = req.params.log_ID;
        const SSN = req.body.SSN;
        const Name = req.body.Name;
        const Phone = req.body.Phone;
        const City = req.body.City;
        const State = req.body.State;
        const BloodType = req.body.BloodType;
        const DonationType = req.body.DonationType;
        const LastDonationDate = req.body.LastDonationDate;
        const LastDonationType = req.body.LastDonationType;

    const sqlUpdate = "UPDATE donor SET SSN = ?, Name = ?, Phone = ?, City = ?, State_Abbr = ?, Blood_Type = ?, Donation_Type_ID = ?, Last_Donation_Date = ?, Last_Donation_Type = ? WHERE log_ID = ?";
        db.query(sqlUpdate, [SSN, Name, Phone, City, State, BloodType, DonationType, LastDonationDate, LastDonationType, ID], (err, result) =>{
            if (err) console.log(err);
        })
    });

    app.listen(3001, () =>{
        console.log('running on port 3001');
    });

    


