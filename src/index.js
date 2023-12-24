import React, { useState } from "react";
import ReactDOM from "react-dom";
import BooksPresenter from "./Books/BooksPresenter.js";

function App() {
  // const booksPresenter = new BooksPresenter();
  // const [vm, copyVmToComponentState] = useState([]);

  React.useEffect(() => {
    async function load() {
      // await booksPresenter.load(generatedViewModel => {
      //   copyVmToComponentState(generatedViewModel);
      // });
    }
    load();
  }, []);

  return (
    <div>
      {/* {vm.map((bookVm, i) => {
        return <div key={i}>{bookVm.name}</div>;
      })}*/}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
