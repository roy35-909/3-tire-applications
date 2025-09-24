import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const backendUrl = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8080/api';

    fetch(`${backendUrl}/`)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        background: "linear-gradient(135deg, #89f7fe, #66a6ff)",
        color: "#333",
      }}
    >
      <h1 style={{ fontSize: "3rem", marginBottom: "20px", color: "#fff", textShadow: "2px 2px 4px rgba(0,0,0,0.3)" }}>
        React Frontend
      </h1>

      {data ? (
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.85)",
            padding: "40px 60px",
            borderRadius: "20px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            textAlign: "center",
            animation: "fadeIn 1s ease-in-out",
          }}
        >
          <p style={{ fontSize: "1.5rem", marginBottom: "15px" }}>{data.message}</p>
          <p
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              margin: 0,
              color: "#007BFF",
              animation: "pulse 1s infinite",
            }}
          >
            {data.visits}
          </p>
        </div>
      ) : (
        <p style={{ fontSize: "1.5rem", color: "#fff" }}>Loading...</p>
      )}

      {/* Animation keyframes */}
      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); color: #007BFF; }
            50% { transform: scale(1.2); color: #00D1FF; }
            100% { transform: scale(1); color: #007BFF; }
          }

          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(-20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
}

export default App;