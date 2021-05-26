import "./Form.css";
import { useActions } from "../hooks/user-action";

const FormComp: React.FC = () => {
  const { addContactAction, deleteContactAction } = useActions();

  return (
    <div className="container">
      <button className="new-contact btn btn-primary">New Contact</button>
      <h4>Add new contact</h4>
      <form>
        <div className="form-row">
          <div className="form-group col-md-6">
            <input
              type="text"
              name="firstname"
              className="form-control"
              placeholder="Firstname"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              name="lastname"
              className="form-control"
              placeholder="Lastname"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              name="number"
              className="form-control"
              placeholder="Contact Number"
            />
          </div>
          <div className="form-group col-md-6">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="form-control"
            />
          </div>
          <button className="add-contact btn btn-primary">Add Contact</button>
        </div>
        
      </form>
      
    </div>
  );
};

const randomId = () => {
  return Math.random().toString(36).substr(2, 5);
};

export default FormComp;
