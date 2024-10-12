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
  domain: string;
  regarding: string;
  profession: string;
}

const ModalForm: React.FC<ModalFormProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    domain: '',
    regarding: '',
    profession: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
   console.log(formData);

    const url = `https://script.google.com/macros/s/AKfycbwOze2ugy8b9-HYeaTBvSPSbEp2Tp5TsBfyRLwxUAZ3hoPa6FEE9InHSK-3G_LBMJnQqw/exec?action=insertDataNoDup&sheeturl=https://docs.google.com/spreadsheets/d/1opZ_Yo3kplM3yRA1OeqTH0czYTurpTfs8Q9_BFhWX30/edit&sheetname=Submit&number=${encodeURIComponent(formData.phone)}&var1=${encodeURIComponent(formData.phone)}&var2=${encodeURIComponent(formData.name)}&var4=${encodeURIComponent(formData.regarding)}&var5=${encodeURIComponent(formData.profession)}&var6=${encodeURIComponent(formData.domain)}&var7=${encodeURIComponent(formData.email)}&datecol=3`;

    try {
        // Use await for the fetch call
        const response = await fetch(url, {
          method: 'GET',
          mode: 'no-cors', // This may work but will not allow access to response data
        });
      
        console.log("Response " + JSON.stringify(response));
        // Clear form data
        setFormData({
            name: '',
            email: '',
            phone: '',
            domain: '',
            regarding: '',
            profession: '',
        });

        onClose(); // Close the modal after submission
    } catch (error) {
        console.error('Error submitting data:', error);
    }
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
          <input type="text" name="domain" placeholder="Domain" onChange={handleChange} required />
          <textarea name="regarding" placeholder="Regarding" onChange={handleChange} required />
          <input type="text" name="profession" placeholder="Profession" onChange={handleChange} required />
          <button className='submitButton' type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ModalForm;
