import { SelectableGrid } from "./components/selectable-grid";

function App() {
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Selectable grid</h1>
      <SelectableGrid rows={5} cols={3} />
    </div>
  );
}

export default App;
