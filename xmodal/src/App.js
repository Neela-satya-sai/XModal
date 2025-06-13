import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {Button} from "@mui/material"
import Modal from './Modal';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="App">
       <h1>User Details Modal</h1>
       
         <Button variant="contained"  onClick={()=> setModalOpen(true)}  sx={{ textTransform: 'none' }}>Open Form</Button>
         <Modal modalOpen={modalOpen}  setModalOpen={setModalOpen}> </Modal>
    </div>
  );
}

export default App;
