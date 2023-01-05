import Header_input from "./components/Header_input";
import Todo from "./components/all_todo/Todo";

function App() {
  return (
    <div className="bg-main_c w-full h-full flex flex-col item-center">
      {/* nav area*/}
      <div className="w-3/4 h-12 bg-red-500 m-auto">
        <h2 className="font-bold text-slate-300 text-center py-3">A Simple TODO_ App</h2>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* //TODO: working flex */}
      <div className="flex justify-center">
        <Header_input />

        </div>
    </div>
  );
}

export default App;
