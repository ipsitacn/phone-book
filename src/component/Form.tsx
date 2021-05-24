import "./Form.css";

const FormComp: React.FC = () => {
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

export default FormComp;
