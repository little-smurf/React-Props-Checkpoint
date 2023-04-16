/*
Instructions
Use PropsType to check props.  
*/
import '../App.css';
import Image from '../ouma.jpg'
// Component that receives parameters(props)
const FullName = (props) => {
  return <h3>My name is {props.name}</h3>;
  }
const Bio = (props) => {
  return <h4>My bio : {props.bio}</h4>;
}
const Profession = (props) => {
  return <h4>The profession is : {props.profession}</h4>;
}
Profile.defaultProps={
  name:"Foulen Fouleni",
  bio:"i have nothing to say",
  profession:"i am unemployed"
}
const HandleName = (props) => {
  console.log("props:", props.name);
  return (
    <button onClick={() => props.alertMyInput("My name is Oumayma Selmi ")}>
      ClickMe
    </button>
  );
}; 

function Profile() {
  const alertMyInput = name => alert(name);
return (
    <div className="Profile">
    <header className="App-header">
      <div style={{backgroundColor:"#91BAD6", paddingRight: 2, paddingLeft: 2}}>
      <div style={{color:"#1E3F66", textAlign:"center"}}>
      <FullName name="Oumayma Selmi" />
      </div>
      <div style={{position:"center"}}>
      <img src={Image} alt="profile pic" width="400" height="400"/>
      </div>
      <div style={{color:"#2E5984"}}>
      <Bio bio="Hello world! I'm learning props!" />
      <Profession profession="Student" />  
      </div>
      </div> 
      <div>
      <HandleName name="Oumayma" alertMyInput={alertMyInput} />
      </div>     
      </header>
    </div>
  );
}
export default Profile;