import Header_input_todoList from "./components/Header_input_todoList";

function App() {
  return (
    <div className="bg-main_c w-full h-[100vh] flex flex-col item-center">
      {/* nav area*/}
      <div className="w-2/4 h-12 bg-red-500 m-auto">
        <h2 className="font-bold text-slate-300 text-center py-3">
          A Simple TODO_ App
        </h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      <div className="flex justify-center">
        <Header_input_todoList />
      </div>
    </div>
  );
}

export default App;
