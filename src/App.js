import Card from "./components/Card";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>React CI/CD Demo</h1>

      <Card 
        title="Continuous Integration"
        description="Every time you push code to GitHub, it gets built automatically."
      />

      <Card 
        title="Continuous Deployment"
        description="The deployed site updates automatically on AWS EC2."
      />

      <Card 
        title="Docker & Nginx"
        description="This React app is dockerized and served using Nginx inside a container."
      />
    </div>
  );
}

export default App;
