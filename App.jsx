import { BookOpen, Calculator, Stethoscope, Activity } from "lucide-react";

export default function App() {
  return (
    <div style={{ padding: "20px" }}>
      <header style={{ textAlign: "center", padding: "40px" }}>
        <h1>Surgical Guide Pro</h1>
        <p>Advanced Surgical Learning & Emergency Tools</p>
      </header>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "20px" }}>
        <div><BookOpen /> Surgical Notes</div>
        <div><Calculator /> Medical Calculators</div>
        <div><Stethoscope /> Emergency Guides</div>
        <div><Activity /> OSCE Prep</div>
      </div>

      <footer style={{ textAlign: "center", marginTop: "40px" }}>
        © 2026 Surgical Guide Pro
      </footer>
    </div>
  );
}