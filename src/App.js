import logo from './logo.svg';
import './App.css';
import Profile from './profile/Profile'
import myImg from './ch.jpg'

function App() {
  const styleObject ={color: "yellow", fontStyle: 'italic'}
  var fullName="Chiraz GOUISSEM"
  var bio ="Chiraz"
  var profession ="Process Engineer"
  const handleName =()=>{
    alert(fullName)
  }
  return (
    <div className="App" style={styleObject}>
    <Profile fullName={fullName} bio={bio} profession={profession} handleName={handleName}><img src={myImg}/></Profile>
    </div>
  )};
export default App;
