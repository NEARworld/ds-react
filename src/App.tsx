import { Header, Menu } from "./components/Header";
import { LinkedList } from "./components/LinkedList/LinkedList";
import { useState } from "react";

function App() {
  const [ds, setDs] = useState<Menu>("LinkedList");

  const renderDs = (ds: Menu) => {
    if (ds === "LinkedList") return <LinkedList />;
  };

  return (
    <>
      <Header setDs={setDs} />
      {renderDs(ds)}
    </>
  );
}

export default App;
