import "./App.css";
import { Appointment } from "./components/Appointment/Appointment";
import { Form } from "./components/Form/Form";
import { Header } from "./components/Header/Header";
import { LandingSection } from "./components/LandingSection/LandingSection";

function App() {
  return (
    <>
      <Header />
      <LandingSection />
      <Appointment />
      <Form />
    </>
  );
}

export default App;
