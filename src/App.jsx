import { createRoot } from "react-dom/client";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Pet!</h1>
      <Pet name="Bailey" animal="Dog" breed="Yorkshire" />
      <Pet name="Milú" animal="Dog" breed="Schnauzer" />
      <Pet name="Minina" animal="Cat" breed="Mixed" />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
