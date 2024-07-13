import {useState, useRef} from 'react'
import { useNavigate } from 'react-router-dom'

// styles
import styles from './Signup.module.css'
import {create_user} from "../../services/authService";

export default function Signup() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const displayNameRef = useRef()
  const [error, setError] = useState(null)
  const [isPending, setIsPending] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) =>  {
    e.preventDefault()
    setIsPending(true)
    try{
      await create_user(emailRef.current.value, passwordRef.current.value, displayNameRef.current.value)
      navigate('/')
      setIsPending(false)
    }catch(err){
      setError(err.message)
      setIsPending(false)
    }
  }

  return (
      <form onSubmit={handleSubmit} className={styles['signup-form']}>
        <h2>sign up</h2>
        <label>
          <span>email:</span>
          <input
              type="email"
              ref={emailRef}
          />
        </label>
        <label>
          <span>password:</span>
          <input
              type="password"
              ref={passwordRef}
          />
        </label>
        <label>
          <span>display name:</span>
          <input
              type="text"
              ref={displayNameRef}
          />
        </label>
        { !isPending && <button className="btn">sign up</button> }
        { isPending && <button className="btn" disabled>loading</button> }
        { error && <p>{error}</p> }
      </form>
  )
}