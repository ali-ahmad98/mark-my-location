import MapComponent from "./components/MapComponent";

function App() {
  return (
    <>
      <div className="container">
        <h1 className="text-center">Google Map</h1>
        <div style={{ height: "50vh", width: "100%" }}>
          <MapComponent/>
        </div>
      </div>
    </>
  );
}

export default App;
