import "./styles.css";
import Header from "./app/header";
import Section from "./app/section";

const seccion = (e) => <h1>hola</h1>;
export default function App() {
  return (
    <div className="App">
      <Header />
      <Section />
    </div>
  );
}
