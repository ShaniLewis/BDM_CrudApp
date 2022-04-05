import "./App.css"
function HomePage() {
    return(
        <div className={"homepage"}>
            <h1>Blood Donation Management</h1>
            <p> If you are a Donor, please press on the Donor button</p>
            <a href={"/Page1"} >DONOR</a>
            <p>If you are a Doctor, please press on the Doctor button</p>
            <a href={"/Page2"} >DOCTOR</a>
        </div>
    );
}
export default HomePage;