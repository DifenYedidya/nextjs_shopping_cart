import LongButton from '../components/buttons/button'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div>
          Name: 
          {/* <a>{{name}}</a> */}
        </div>
        <div>
          Email: 
          {/* <a>{{Email}}</a> */}
        </div>
        <div>
          Phone number: 
          {/* <a>{{phoneNumber}}</a> */}
        </div>
        <div>
          Address: 
          {/* <a>{{address}}</a> */}
        </div>
        <LongButton text="Please fill out the form"/>
      </div>
    </div>
  )
}
