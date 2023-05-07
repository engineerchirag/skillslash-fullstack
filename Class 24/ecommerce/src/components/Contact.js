import React, { useRef, useState } from 'react';

// function Contact() {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSubmit = () => {
//     console.log(name, email, message);
//   };

//   return (
//     <div className="contact-form">
//       <div className="contact-field">
//         <label>Name:</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           placeholder="Enter Name"
//         />
//       </div>
//       <div className="contact-field">
//         <label>Email:</label>
//         <input
//           type="email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           placeholder="Enter Email"
//         />
//       </div>
//       <div className="contact-field">
//         <label>Message:</label>
//         <textarea
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="Enter Message"
//         ></textarea>
//       </div>
//       <button onClick={handleSubmit}>Submit</button>
//     </div>
//   );
// }

// export default Contact;

// function Contact() {
//     const [formValues, setFormValues] = useState({
//         name: '',
//         email: '',
//         message: ''
//     });

//     const handleFormFieldChange = (key) => (e) => {
//         setFormValues((oldState) => {
//             const newState = {...oldState};
//             newState[key] = e.target.value;
//             return newState;
//         })
//     }
  
//     const handleSubmit = () => {
//       console.log(formValues);
//     };
  
//     return (
//       <div className="contact-form">
//         <div className="contact-field">
//           <label>Name:</label>
//           <input
//             type="text"
//             value={formValues.name}
//             onChange={handleFormFieldChange('name')}
//             placeholder="Enter Name"
//           />
//         </div>
//         <div className="contact-field">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={formValues.email}
//             onChange={handleFormFieldChange('email')}
//             placeholder="Enter Email"
//           />
//         </div>
//         <div className="contact-field">
//           <label>Message:</label>
//           <textarea
//             value={formValues.message}
//             onChange={handleFormFieldChange('message')}
//             placeholder="Enter Message"
//           ></textarea>
//         </div>
//         <button onClick={handleSubmit}>Submit</button>
//       </div>
//     );
//   }
  
//   export default Contact;


function Contact() {
    const nameRef = useRef('');
    const emailRef = useRef('');
    const messageRef = useRef('');
    const previewRef = useRef('');

    const [state, setState] = useState(false);
    console.log('Rerendered');

    const handleNameChange = (e) => {
        nameRef.current = e.target.value;
    }

    const handleEmailChange = (e) => {
        emailRef.current = e.target.value;
    }

    const handleMessageChange = (e) => {
        messageRef.current = e.target.value;
    }
  
    const handleSubmit = () => {
      console.log(nameRef.current, emailRef.current, messageRef.current);
        //   setState(true);
        previewRef.current.textContent = `Preview: ${nameRef.current}, ${emailRef.current}, ${messageRef.current}`;
    };
  
    return (
      <div className="contact-form">
        <div className="contact-field">
          <label>Name:</label>
          <input
            type="text"
            ref={nameRef}
            onChange={handleNameChange}
            placeholder="Enter Name"
          />
        </div>
        <div className="contact-field">
          <label>Email:</label>
          <input
            type="email"
            ref={emailRef}
            onChange={handleEmailChange}
            placeholder="Enter Email"
          />
        </div>
        <div className="contact-field">
          <label>Message:</label>
          <textarea
            ref={messageRef}
            onChange={handleMessageChange}
            placeholder="Enter Message"
          ></textarea>
        </div>
        {/* <div>Preview: {nameRef.current} {emailRef.current} {messageRef.current}</div> */}
        <div ref={previewRef}></div>
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  }
  
  export default Contact;
