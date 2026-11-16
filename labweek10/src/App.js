import { useState } from 'react';

function App() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    address: '',
    address2: '',
    city: '',
    province: '',
    postalCode: '',
    agree: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="container" style={{ border: '3px solid green', padding: '20px', marginTop: '20px' }}>
      <h1 className="text-center">Data Entry Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group col-md-6 text-center">
            <label>Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="Enter email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-6 text-center">
            <label>Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group text-center">
          <label>Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            placeholder="1234 Main St"
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="form-group text-center">
          <label>Address 2</label>
          <input
            type="text"
            className="form-control"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={formData.address2}
            onChange={handleChange}
          />
        </div>

        <div className="form-row">
          <div className="form-group col-md-4 text-center">
            <label>City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="form-group col-md-4 text-center">
            <label>Province</label>
            <select
              className="form-control"
              name="province"
              value={formData.province}
              onChange={handleChange}
            >
              <option value="">Choose...</option>
              <option value="Alberta">Alberta</option>
              <option value="British Columbia">British Columbia</option>
              <option value="Manitoba">Manitoba</option>
              <option value="New Brunswick">New Brunswick</option>
              <option value="Newfoundland and Labrador">Newfoundland and Labrador</option>
              <option value="Nova Scotia">Nova Scotia</option>
              <option value="Ontario">Ontario</option>
              <option value="Prince Edward Island">Prince Edward Island</option>
              <option value="Quebec">Quebec</option>
              <option value="Saskatchewan">Saskatchewan</option>
            </select>
          </div>
          <div className="form-group col-md-4 text-center">
            <label>Postal Code</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group text-center">
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          <label style={{ marginLeft: '8px' }}>Agree Terms & Condition?</label>
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-success">Submit</button>
        </div>
      </form>

      {submitted && (
        <div style={{ marginTop: '30px' }}>
          <table className="table table-bordered">
            <tbody>
              <tr>
                <td><b>Email:</b></td>
                <td>{formData.email}</td>
              </tr>
              <tr>
                <td><b>Full Name:</b></td>
                <td>{formData.name}</td>
              </tr>
              <tr>
                <td><b>Address:</b></td>
                <td>{formData.address}</td>
              </tr>
              <tr>
                <td><b>City:</b></td>
                <td>{formData.city}</td>
              </tr>
              <tr>
                <td><b>Province:</b></td>
                <td>{formData.province}</td>
              </tr>
              <tr>
                <td><b>Postal Code:</b></td>
                <td>{formData.postalCode}</td>
              </tr>
            </tbody>
          </table>
          <h5>Submission Details</h5>
        </div>
      )}
    </div>
  );
}

export default App;