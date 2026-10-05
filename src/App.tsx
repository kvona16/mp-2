import FbiListContent from "./components/FbiListContent.tsx";
import "./App.css";

export default function App() {
  return (
      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>FBI Most Wanted Index</h1>
        <FbiListContent />
      </div>
  );
}