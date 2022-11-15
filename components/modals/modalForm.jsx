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
        <form className={style.form} action="/send-data-here" method="post">
          <div className={style.row}>
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" placeholder='input your name' required minlength="3" maxlength="30"/>
          </div>
          <div className={style.row}>
            <label for="email">Email:</label>
            <input type="text" id="email" name="email" placeholder='input your email' required />
          </div>
          <div className={style.row}>
            <label for="roll">Phone number:</label>
            <input type="text" id="phone" name="phone" placeholder='input your phone number' required minlength="10" maxlength="13" />
          </div>
          <div className={style.row}>
            <label for="address">Address:</label>
            <input type="text" id="address" name="address" placeholder='input your address' required />
          </div>
          <button className={style.button} type="submit">Save</button>
        </form>
      </Modal>
    </div>
  )
}