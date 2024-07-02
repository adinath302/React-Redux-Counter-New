import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header";
import Display_counter from "./Components/Display_counter";
import Container from "./Components/Container";
import Controls from "./Components/Controls";
import { useSelector } from "react-redux";
import Privacy_messages from "./Components/Privacy_messages";

function App() {
  const privacy = useSelector((store) => store.privacy);

  return (
    <center className="px-4 py-5 my-5 text-center">
      <Container>
        <Header></Header>
        <div className="col-lg-6 mx-auto">
          {privacy ? <Privacy_messages /> : <Display_counter />}
          <Controls></Controls>
        </div>
      </Container>
    </center>
  );
}

export default App;