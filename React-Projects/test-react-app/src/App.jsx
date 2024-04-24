import "./App.css";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
import Student from "./Student.jsx";
import UserGreeting from "./UserGreeting.jsx";
import List from "./List.jsx";
import Button from "./Button/Button.jsx";
import MyComponent from "./MyComponent.jsx";
import ColorPicker from "./ColorPicker.jsx";
import UpdaterFunction from "./UpdaterFunction.jsx";
import UseEffectExample from "./UseEffectExample.jsx";

function App() {
  return (
    <>
      <Header />
      {/* <Card />
      <Button />
      <Student name="Kevin" age={30} isStudent={false} />
      <Student name="Sambhav" age={42} isStudent={true} />
      <Student />
      <UserGreeting isLoggedIn={true} username="Kevin" />
      <List />
      <MyComponent /> 
      <ColorPicker></ColorPicker>
      <UpdaterFunction></UpdaterFunction>*/}
      <UseEffectExample></UseEffectExample>
      <Footer />
    </>
  );
}

export default App;
