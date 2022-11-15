import React, { useState } from 'react';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import style from '../modals/Modal.module.css'

export default function ModalCart() {  
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  return(
    <div>
      <button className={style.longButton} onClick={onOpenModal}>Review</button>
      <Modal open={open} onClose={onCloseModal} center>
        <div className={style.header}>Purchasing List</div>
        <div className={style.header}>
            <div>Name</div>
            <div>Qty</div>
        </div>
        <div className={style.row}>
            <div>name</div>
            <div>qty</div>
        </div>
        <button className={style.longButton} type="submit">Order</button>
      </Modal>
    </div>
  )
}