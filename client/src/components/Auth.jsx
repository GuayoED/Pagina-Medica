import React, {useState} from "react";
import Cookies from "universal-cookie";
import axios from "axios";

import signinImage from '../assets/signup.jpg'

const initialState = {
    fullName: '',
    username: '',
    password: '',
    confirmPassword: '',
    phoneNumber: '',
    avatarURL: '',
}

const Auth = () => {
    const [form, setForm] = useState(initialState)
    const [isSignup, setisSignup] = useState(true);

    const handleChange = (e) => {
        setForm({...form, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(form);
    }

    const switchMode = () => {
        setisSignup((prevIsSignUp) => !prevIsSignUp) 
    }

    return (
        <div className="auth__form-container">
            <div className="auth__form-container_fields">
                <div className="auth__form-container_fields-content">
                    <p>{isSignup ? 'Registrate' : "Inicia Sesion"}</p>
                    <form onSubmit={handleSubmit}>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="fullName">Nombre Completo</label>
                                <input 
                                    name="fullName"
                                    type="text"
                                    placeholder="Nombre Completo"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="username">Usuario</label>
                                <input 
                                    name="username"
                                    type="text"
                                    placeholder="Usuario"
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="phoneNumber">Numero de Telefono</label>
                                <input 
                                    name="phoneNumber"
                                    type="text"
                                    placeholder="Numero de Telefono"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                                <label htmlFor="avatarURL">URL del Avatar</label>
                                <input 
                                    name="avatarURL"
                                    type="text"
                                    placeholder="URL del Avatar"
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_input">
                                <label htmlFor="password">Contraseña</label>
                                <input 
                                    name="password"
                                    type="password"
                                    placeholder="Contraseña"
                                    onChange={handleChange}
                                    required
                                />
                        </div>
                        {isSignup && (
                            <div className="auth__form-container_fields-content_input">
                            <label htmlFor="confirmPassword">Confirma la Contraseña</label>
                            <input 
                                name="confirmPassword"
                                type="password"
                                placeholder="Confirma la Contraseña"
                                onChange={handleChange}
                                required
                            />
                            </div>
                        )}
                        <div className="auth__form-container_fields-content_button">
                            <button>{!isSignup ? ' Inicia Sesion' : ' Registrate'}</button>
                        </div>
                    </form>
                    <div className="auth__form-container_fields-account">
                        <p>
                            {isSignup
                             ? "Ya tienes una cuenta?"
                             : "No tienes una cuenta?"
                            }
                            <span onClick={switchMode} >
                            {isSignup ? ' Inicia Sesion' : ' Registrate'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="auth__form-container_image">\
                <img src={signinImage} alt="sign in" />
            </div>
        </div>
    )
}

export default Auth