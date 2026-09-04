import "../styles/Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader-content">
        <h1 className="loader-logo">SO</h1>
        <h2>Sowmya Oleti</h2>
        <p>Frontend Developer</p>

        <div className="spinner"></div>
      </div>
    </div>
  );
}

export default Loader;