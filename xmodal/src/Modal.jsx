import React from "react";
import styles from "./Modal.module.css";
import { useState } from "react";

import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Backdrop, Button } from "@mui/material";

const customStyles = {
  content: {
    width : '50%',
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "rgba(234, 240, 243, 0.85)",
     borderRadius : '15px',
     padding:'2rem',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function ReactModal({ modalOpen, setModalOpen }) {
  const [formData, setFormData] = useState({
        username: '',
        email: '',
        phonenumber: '',
        date: '',
    })

  function openModal() {
    setModalOpen(true);
  }

  function closeModal() {
    setModalOpen(false);
  }

   const handleChange = (e) => {
        const name = e.target.name
        setFormData(prev => ({ ...prev, [name]: e.target.value }))
    }


  function handleForm(e) {
     e.preventDefault();
    // console.log(e.target.email.value);
     console.log(formData);
    if(formData.phonenumber.length<10){
      alert("Invalid phone number. Please enter a 10-digit phone number.");
      return
    }

    let year = new Date().getFullYear();
    let month = new Date().getMonth()+1;
     console.log(month);

    if(month<=9){
      month= `0${month}`;
    }
    
    console.log(month);
    let dd = new Date().getDate();
    if(dd <=9){
      dd = `0${dd}`
    }
    let presentDate = `${year}-${month}-${dd}`;
    console.log(presentDate);

    let  userdate = formData.date;
    let modfieduserdate  = userdate.split("-").join("-");

    console.log(modfieduserdate)
    if(modfieduserdate > presentDate ){
       alert("Invalid date of birth. Date cannot be in the future.");
       return
    }
    else{
      setFormData({
        username: '',
        email: '',
        phonenumber: '',
        date: '',
    });

    closeModal();
    }
    
    // if(formData.date > new Date().getFullYear)
    
  }

  return (
    <div className={styles.modal}>
         <Modal
      isOpen={modalOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
       
    >
      {/* <button onClick={closeModal}>close</button> */}
     <div className={styles["modal-content"]}>
        <form onSubmit={handleForm}>
          <h2>Fill Details</h2>
          <label>Username:</label>
          <input type="text" id="username"  name ="username" required onChange={handleChange}/>
          <label>Email Address:</label>
          <input type="email"  id="email" name="email" required onChange={handleChange}/>
           <label>Phone Number:</label>
          <input type="number" id="phone" name="phonenumber" required onChange={handleChange}/>
           <label>Date of Birth:</label>
          <input type="date" id="dob" name="date" required onChange={handleChange} />
        
          <Button className={styles["submit-button"]}  variant="contained" type="submit"  sx={{ textTransform: 'none', marginTop: "15px" }}>Submit</Button>
        </form>
      </div>
    </Modal>

      </div>
   
  );
}

export default ReactModal;

// function App() {
//   let subtitle;

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2>
//         <button onClick={closeModal}>close</button>
//         <div>I am a modal</div>
//         <form>
//           <input />
//           <button>tab navigation</button>
//           <button>stays</button>
//           <button>inside</button>
//           <button>the modal</button>
//         </form>
//       </Modal>
//     </div>
//   );
// }
