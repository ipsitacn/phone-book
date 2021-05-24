import "./Form.css";

const FormComp: React.FC = () => {
  return (
    <div className="cotainer">
      <button className="add-contact">New Contact</button>
      <h4>Add new contact</h4>
      <form>
        <div className="form-group">
          <input
            type="text"
            name="firstname"
            className="form-control"
            placeholder="Firstname"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="lastname"
            className="form-control"
            placeholder="Lastname˜"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="number"
            className="form-control"
            placeholder="Contact Number"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="form-control"
          />
        </div>
        <button className="add-contact">Add Contact</button>
      </form>
    </div>
  );
};

export default FormComp;
