import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FormComp from "./component/Form";
import { store } from "./store";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <FormComp />
      </Provider>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
