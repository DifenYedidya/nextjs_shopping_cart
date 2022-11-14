import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import style from '../modals/Modal.module.css'

export default function ModalForm({button}) {  
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <button className={style.longButton} onClick={onOpenModal}>Please fill out the form</button>
      <Modal open={open} onClose={onCloseModal} center>
        <h2>Centered modal</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          pulvinar risus non risus hendrerit venenatis. Pellentesque sit amet
          hendrerit risus, sed porttitor quam.
        </p>
        <button>{button}</button>
      </Modal>
    </div>
  )
}