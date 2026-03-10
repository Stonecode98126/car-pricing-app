import { useState } from "react";

const VEHICLES = [
  {
    id: "A",
    name: "吊卡及7噸吊車",
    firstHour: 3000,
    extraHour: 1200,
    icon: "🚛",
  },
  {
    id: "B",
    name: "13噸吊車",
    firstHour: 3500,
    extraHour: 1500,
    icon: "🏗️",
  },
  {
    id: "C",
    name: "高空作業車",
    firstHour: 3500,
    extraHour: 1500,
    icon: "🚚",
  },
];

const HOURS = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8];

function calcPrice(vehicle: typeof VEHICLES[0], hours: number) {
  if (hours <= 1) return vehicle.firstHour;
  return vehicle.firstHour + (hours - 1) * vehicle.extraHour;
}

export default function Home() {
  const [selectedVehicle, setSelectedVehicle] = useState(VEHICLES[0]);
  const [selectedHours, setSelectedHours] = useState(1);

  const price = calcPrice(selectedVehicle, selectedHours);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#0f172a",
        display: "flex",
        flexDirection: "column",
        fontFamily: "'Noto Sans TC', 'Helvetica Neue', sans-serif",
        color: "#f1f5f9",
      }}
    >
      {/* Header */}
      <header
        style={{
          padding: "24px 32px",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.18em",
              color: "#3b82f6",
              textTransform: "uppercase",
              marginBottom: "4px",
              fontWeight: 600,
            }}
          >
            起重服務
          </div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#f1f5f9",
              letterSpacing: "-0.02em",
            }}
          >
            鴻德起重
          </div>
        </div>
        <div
          style={{
            fontSize: "12px",
            color: "#64748b",
            letterSpacing: "0.05em",
          }}
        >
          即時計價系統
        </div>
      </header>

      {/* Main */}
      <main
        style={{
          flex: 1,
          padding: "40px 32px",
          maxWidth: "720px",
          width: "100%",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        {/* Vehicle Selection */}
        <section style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 600,
            }}
          >
            選擇車型
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "12px",
            }}
          >
            {VEHICLES.map((v) => {
              const active = selectedVehicle.id === v.id;
              return (
                <button
                  key={v.id}
                  onClick={() => setSelectedVehicle(v)}
                  style={{
                    background: active
                      ? "rgba(59,130,246,0.15)"
                      : "rgba(255,255,255,0.03)",
                    border: active
                      ? "1.5px solid #3b82f6"
                      : "1.5px solid rgba(255,255,255,0.08)",
                    borderRadius: "14px",
                    padding: "20px 14px",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "all 0.2s cubic-bezier(0.4,0,0.2,1)",
                    color: active ? "#f1f5f9" : "#94a3b8",
                    boxShadow: active
                      ? "0 0 0 1px rgba(59,130,246,0.3), 0 4px 20px rgba(59,130,246,0.1)"
                      : "none",
                  }}
                >
                  <div style={{ fontSize: "24px", marginBottom: "10px" }}>
                    {v.icon}
                  </div>
                  <div
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      marginBottom: "8px",
                      color: active ? "#f1f5f9" : "#cbd5e1",
                      lineHeight: 1.4,
                    }}
                  >
                    {v.name}
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>
                    首小時 {v.firstHour.toLocaleString()}
                  </div>
                  <div style={{ fontSize: "11px", color: "#64748b" }}>
                    續計 {v.extraHour.toLocaleString()} / 時
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* Hours Selection */}
        <section style={{ marginBottom: "48px" }}>
          <div
            style={{
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#64748b",
              textTransform: "uppercase",
              marginBottom: "16px",
              fontWeight: 600,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>租用時數</span>
            <span style={{ color: "#3b82f6", fontSize: "13px", letterSpacing: "normal", textTransform: "none" }}>
              {selectedHours} 小時
            </span>
          </div>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: "8px",
            }}
          >
            {HOURS.map((h) => {
              const active = selectedHours === h;
              return (
                <button
                  key={h}
                  onClick={() => setSelectedHours(h)}
                  style={{
                    background: active ? "#3b82f6" : "rgba(255,255,255,0.04)",
                    border: active
                      ? "1.5px solid #3b82f6"
                      : "1.5px solid rgba(255,255,255,0.08)",
                    borderRadius: "8px",
                    padding: "8px 14px",
                    cursor: "pointer",
                    fontSize: "13px",
                    fontWeight: active ? 700 : 400,
                    color: active ? "#fff" : "#94a3b8",
                    transition: "all 0.15s ease",
                    minWidth: "52px",
                  }}
                >
                  {h % 1 === 0 ? `${h}h` : `${h}h`}
                </button>
              );
            })}
          </div>
        </section>

        {/* Price Display */}
        <section
          style={{
            background: "rgba(59,130,246,0.06)",
            border: "1px solid rgba(59,130,246,0.2)",
            borderRadius: "20px",
            padding: "36px 32px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontSize: "12px",
              color: "#64748b",
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              marginBottom: "8px",
            }}
          >
            {selectedVehicle.name}・{selectedHours} 小時
          </div>
          <div
            style={{
              fontSize: "clamp(56px, 12vw, 96px)",
              fontWeight: 800,
              color: "#f1f5f9",
              letterSpacing: "-0.04em",
              lineHeight: 1,
              marginBottom: "8px",
              transition: "all 0.2s ease",
            }}
          >
            <span style={{ fontSize: "0.4em", color: "#3b82f6", verticalAlign: "middle", marginRight: "4px" }}>
              NT$
            </span>
            {price.toLocaleString()}
          </div>
          <div style={{ fontSize: "13px", color: "#64748b", marginTop: "12px" }}>
            {selectedHours <= 1
              ? "首小時計費"
              : `首小時 NT$${selectedVehicle.firstHour.toLocaleString()} + 續 ${selectedHours - 1} 小時 × NT$${selectedVehicle.extraHour.toLocaleString()}`}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          padding: "20px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          textAlign: "center",
          fontSize: "12px",
          color: "#334155",
        }}
      >
        © 2025 鴻德起重・All Rights Reserved
      </footer>
    </div>
  );
}
