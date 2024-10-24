import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import "./index.css"

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className="p-8">
          <StatsCards />
        </div>
      </div>
    </div>
  );
}

export default App;
