import Cards from "../components/Cards";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";


function App() {
  return (
    <>
      <Sidebar />
      <Header />
      <main className="bg-[#1f2b3e] lg:pl-80 p-8 pt-28 lg:h-screen">
        <h1 className="text-4xl text-gray-300 my-10">Plan & Prigcing</h1>
        {/* cards */}
        <div >
        <Cards/>

        </div>

      </main>
    </>
  );
}

export default App;
