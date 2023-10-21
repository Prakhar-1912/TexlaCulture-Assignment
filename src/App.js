import Body from "./components/Body";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="flex">
        <div className="w-[18%] h-100vh border border-red-400">
          <Sidebar />
        </div>
        <div className="w-[82%]">
          <Header />
          <Body />
        </div>
      </div>
    </>
  );
}

export default App;
