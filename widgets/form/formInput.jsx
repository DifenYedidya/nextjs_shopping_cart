import styles from '../form/FormInput.module.css'

export default function FormInput() {
    <form className={styles.form} action="/send-data-here" method="post">
        <div>
          <label for="name">Name:</label>
          <input type="text" id="name" name="name" placeholder='input your name' required minlength="3" maxlength="30"/>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="text" id="email" name="email" placeholder='input your email' required />
        </div>
        <div>
          <label for="roll">Phone number:</label>
          <input type="text" id="phone" name="phone" placeholder='input your phone number' required minlength="10" maxlength="13" />
        </div>
        <div>
          <label for="address">Address:</label>
          <input type="text" id="address" name="address" placeholder='input your address' required />
        </div>
        <button className={styles.longButton} type="submit">Save</button>
    </form>
}