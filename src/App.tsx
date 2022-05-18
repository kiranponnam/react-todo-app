import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./components/reduxToolkit/store";
import { TodoContainer } from "./components/TodoContainer";
import { MobileTodoList } from "./components/MobileVersion/MobileTodoContainer/MobileTodoList";

function App() {
  const userScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
   //userScreenWidth is used for detection of mobile or desktop
  return (
    <div className="app">
      <Provider store={store}>
        {userScreenWidth < 650 ? <MobileTodoList /> : <TodoContainer />}
      </Provider>
    </div>
  );
}

export default App;
