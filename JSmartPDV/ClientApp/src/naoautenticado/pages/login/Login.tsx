import './style.css'
import Logo from '../../../assets/vueLogo.png'
import { useEffect } from 'react'
import { TextField } from '@mui/material'
import { JSTextField } from '../../../UniversalComponents/MUI/TextField/CTextField'
export default function Login() {
  useEffect(() => {
    document.title = "JSmart - Login"
  },[])
  return (
    <div className='login'>
      <div className="card">
        <div className="content">
          <img className='logo' src={Logo} />
          <div className="inputs">
            <JSTextField label="Usuario"/>
            <JSTextField label="Senha"/>
          </div>
        </div>
      </div>
    </div>
  )
}
