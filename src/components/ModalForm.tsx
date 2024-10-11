import React, { useState } from 'react';
import '../css/ModalForm.css'; // Ensure you have this CSS file for styling

// Define the types for the component props
interface ModalFormProps {
  isOpen: boolean;
  onClose: () => void;
}

// Define the types for the form data
interface FormData {
  name: string;
  email: string;
  phone: string;
  age: string;
  regarding: string;
  profession: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    age: '',
    regarding: '',
    profession: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
              <div className="top-div" style={{ display: 'flex', backgroundColor: 'white' }}><h2><span style={{ color:'rgb(114 17 190)', backgroundColor: 'white' }}>Contact</span> <span style={{color:'rgb(221 9 169)',backgroundColor: 'white' }}>Us</span></h2>   <button onClick={onClose}>Close</button> </div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
          <input type="tel" name="phone" placeholder="Phone" onChange={handleChange} required />
          <input type="number" name="age" placeholder="Age" onChange={handleChange} required />
          <textarea name="regarding" placeholder="Regarding" onChange={handleChange} required />
          <input type="text" name="profession" placeholder="Profession" onChange={handleChange} required />
          <button className='submitButton' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
