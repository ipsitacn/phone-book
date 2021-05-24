import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import FormComp from "./component/Form";

const App = () => {
  return (
    <div>
      <FormComp />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
