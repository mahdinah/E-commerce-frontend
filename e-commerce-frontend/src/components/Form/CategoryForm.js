import React from "react";
import "../../styles/Admin-User-panel.css"

const CategoryForm = ({ handleSubmit, value, setValue }) => {
  
  return (
    <>
      <form className="catcreate" onSubmit={handleSubmit}>
        <div className="catcreate-input">
          <input
        
            type="text"
            className="form-control"
            placeholder="Enter new category"
            value={value}
            onChange={(e) => setValue(e.target.value)}
           
            required
          />
        </div>

        <button type="submit" className="submit-cat" >
          Submit
        </button>
      </form>
    </>
  );
};

export default CategoryForm;
