import React, { useContext, useState } from 'react';
import Food from '../../../assets/food.png'
import Logo from '../../../assets/Logo.svg'
import './style.css'
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import { JSFormControl } from '../../../JSCommon/Components/JSTextField';

import { IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { api } from '../../../Common/Api/AxiosApi';
import { LoadingDialogContext } from '../../../JSCommon/Dialogs/LoadingDialog/LoadingDialogContext';
import { toast } from 'react-toastify';
import { GeralContext } from '../../../Common/Context/GeralContext';
import { useNavigate } from 'react-router-dom';
interface CamposErro{
  usuario: boolean
  senha: boolean
}

export default function Login() {
  const [password, setPassword] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [showPassword, setShowPassword] = React.useState(false);
  const {AbrirDialogoLoading,FechaDialogoLoading} = useContext(LoadingDialogContext)
  const {Login} = useContext(GeralContext)
  const [error,setError] = useState<CamposErro>({senha: false, usuario:false})
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const VerifyValues = () => {
    let status = true;
    const regex = /[a-zA-Z0-9]/;
    let emailCheck = false
    let passwordCheck = false

    if (!regex.test(email)) {
      toast.error("Preencha o campo Usuario");
      status = false;
      emailCheck = true;
    }
    if (!regex.test(password)) {
      toast.error("Preencha o campo Senha");
      status = false;
      passwordCheck = true;
    } 

    setError({usuario: emailCheck,senha: passwordCheck})

    return status;
  };

  const SendLogin = async () => {
    if(!VerifyValues()) return;
    setError({usuario: false,senha: false})

    const body = {
      email: email,
      password: password,
    }
    AbrirDialogoLoading("Realizando Login...")
    try{
      var response = await (await api.post('api/user/auth',body)).data
      sessionStorage.setItem("acess_token",response)
      Login()
      navigate('/pdv/venda')
    }
    finally{
      FechaDialogoLoading()
    }
  }
  return (
    <div className="main-login">
      <div className="left">
        <img src={Food} alt="Food" />
      </div>
      <div className="right">
        <div className="login-card">
          <img src={Logo} alt="Logo Chefs" />
          <span className="ger-label">
            Gerencie sua loja de forma facil e rapida.
          </span>
          <div className="inputs">
          <JSFormControl  error={error.usuario} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Usuario</InputLabel>
              <OutlinedInput
               
                onChange={(e) => setEmail(e.target.value)}
                id="outlined-adornment-password"
                startAdornment={
                  <InputAdornment position="start">
                    <PersonIcon />
                  </InputAdornment>
                }
                label="Usuario"
              />
            </JSFormControl>
            <JSFormControl  error={error.senha} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
              
                id="outlined-adornment-password"
              onChange={(e ) => setPassword(e.target.value)}

                type={showPassword ? 'text' : 'password'}
                startAdornment={
                  <InputAdornment position="start">
                    <KeyIcon />
                  </InputAdornment>
                }
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </JSFormControl>
          </div>
          <div className="button-login p-ripple" onClick={() => SendLogin()}>
            <span>Entrar</span>
          </div>
        </div>
      </div>
    </div>
  )
}
