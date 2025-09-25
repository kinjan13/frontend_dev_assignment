// App.tsx
import React, { useEffect, useState } from "react";

interface Worker {
  id: number;
  name: string;
  serviceType: string;
  price: number;
  image: string;
}

const App: React.FC = () => {
  const [workers, setWorkers] = useState<Worker[]>([]);

  useEffect(() => {
    fetch("/workers.json")
      .then((res) => res.json())
      .then((data: Worker[]) => setWorkers(data))
      .catch((err) => console.error("Error fetching JSON:", err));
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Workers List</h1>
      {workers.length === 0 ? (
        <p>Loading workers...</p>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "nowrap",
            overflowX: "auto",
            gap: "15px",
            paddingBottom: "10px",
          }}
        >
          {workers.map((worker) => (
            <div
              key={worker.id}
              style={{
                flex: "0 0 auto",
                display: "flex",
                alignItems: "center",
                border: "1px solid #ccc",
                borderRadius: "8px",
                padding: "10px",
                minWidth: "250px",
                background: "#f9f9f9",
              }}
            >
              <img
                src={worker.image}
                alt={worker.name}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "8px",
                  objectFit: "cover",
                  marginRight: "10px",
                }}
              />
              <div>
                <h3 style={{ margin: "0 0 5px 0" }}>{worker.name}</h3>
                <p style={{ margin: "0 0 5px 0" }}>Service: {worker.serviceType}</p>
                <p style={{ margin: 0 }}>Price: ${worker.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
