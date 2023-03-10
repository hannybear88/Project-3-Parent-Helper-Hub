
import React, { useState } from "react";

function ChildRegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission logic here
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Child Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="age">Child Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="gender">Child Gender:</label>
        <select id="gender" name="gender" onChange={handleInputChange}>
          <option value="">Select Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Prefer not to respond</option>
        </select>
      </div>
      {/* <div>
        <label htmlFor="parentName">Parent Name:</label>
        <input
          type="text"
          id="parentName"
          name="parentName"
          value={formData.parentName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="parentEmail">Parent Email:</label>
        <input
          type="email"
          id="parentEmail"
          name="parentEmail"
          value={formData.parentEmail}
          onChange={handleInputChange}
        />
      </div> */}
      <button type="submit">Submit</button>
      <button type="submit">Add Child</button>
    </form>
  );
}

export default ChildRegistrationForm;
=======
// import React, { useState } from "react";

// function ChildRegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: "",
//     age: "",
//     gender: "",
//   });

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // handle form submission logic here
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <div>
//         <label htmlFor="name">Child Name:</label>
//         <input
//           type="text"
//           id="name"
//           name="name"
//           value={formData.name}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="age">Child Age:</label>
//         <input
//           type="number"
//           id="age"
//           name="age"
//           value={formData.age}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="gender">Child Gender:</label>
//         <select id="gender" name="gender" onChange={handleInputChange}>
//           <option value="">Select Gender</option>
//           <option value="male">Male</option>
//           <option value="female">Female</option>
//           <option value="other">Other</option>
//         </select>
//       </div>
//       {/* <div>
//         <label htmlFor="parentName">Parent Name:</label>
//         <input
//           type="text"
//           id="parentName"
//           name="parentName"
//           value={formData.parentName}
//           onChange={handleInputChange}
//         />
//       </div>
//       <div>
//         <label htmlFor="parentEmail">Parent Email:</label>
//         <input
//           type="email"
//           id="parentEmail"
//           name="parentEmail"
//           value={formData.parentEmail}
//           onChange={handleInputChange}
//         />
//       </div> */}
//       <button type="submit">Submit</button>
//       <button type="submit">Add Child</button>
//     </form>
//   );
// }

// export default ChildRegistrationForm;

