import "./App.css";
import CardPage from "./CardPage";
import TasksProvider from "./context/TasksProvider";
import Header from "./Header";
import Sidebar from "./Sidebar";

const App = () => {
  return (
    <TasksProvider>
      <div className="flex h-screen bg-gray-900 text-white">
        <Sidebar />
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
          <Header />
          <CardPage />
        </main>
      </div>
    </TasksProvider>
  );
};

export default App;
