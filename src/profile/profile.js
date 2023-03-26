/*
Instructions
Use PropsType to check props.  
*/
import logo from './logo.svg';
import './App.css';
// Component that receives parameters(props)
const FullName = (props) => {
  return <h1>The fullname is : {props.name}</h1>;
  }
const Bio = (props) => {
  return <h1>The bio consists of : {props.bio}</h1>;
}
const Profession = (props) => {
  return <h1>The profession is : {props.profession}</h1>;
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
      <div style={{color:"blue", backgroundColor:"black", textAlign:"center"}}>
      <FullName name="world" />
      </div>
      <div style={{position:"center"}}>
      <img src="#" alt="profile pic" width="600" height="400"/>
      </div>
      <Bio bio="world" />
      <Profession profession="world" />  
      <div>
      <HandleName name="Oumayma" alertMyInput={alertMyInput} />
      </div>      
      </header>
    </div>
  );
}

export default Profile;
