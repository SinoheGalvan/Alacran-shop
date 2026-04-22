import React, { useState } from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import './App.css';

// Este es el componente al que redirigiremos
const handleRedirect = () => {
  window.open("https://utd-emprendimiento-lagos.atlassian.net/jira/software/projects/ASP/boards/34", "_blank", "noopener,noreferrer");
};
const Dashboard = ({ user }) => (
  <div className="App-header">
    <img src="/formal_profile.jpeg" className="avatar" />
    <h1>Bienvenido(a), {user.name}</h1>
    <h2>EVALUACIÓN PARCIAL 3</h2>
    <div className="links-container">
      <a 
          href="http://partial2.atwebpages.com/ERS.pdf" 
          download="Mi_Manual_Personalizado.pdf"
      >
        <button>DESCARGAR DOCUMENTO ERS DEL PROYECTO</button>
      </a>

      <button onClick={handleRedirect}>
        TABLERO JIRA PROYECTO ALACRAN SHOP
      </button>

      <button onClick={() => window.location.reload()}>
        CERRAR SESIÓN PARCIAL 3
      </button>
    </div>
  </div>
);

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);

  // Sustituye con tu Client ID real de Google Cloud Console
  const clientId = "902559992061-pn7r2lojbmqaobtccicga0o9q6nh3nm0.apps.googleusercontent.com";

  const onSuccess = (response) => {
    console.log("Login Success:", response);
    // Aquí normalmente decodificarías el JWT (token) para obtener los datos del usuario
  
    setUserData({ name: "Jose Sinohe" }); 
    setIsLoggedIn(true);
  };

  const onError = () => {
    console.log("Login Failed");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        {isLoggedIn ? (
          <Dashboard user={userData} />
        ) : (
          <header className="App-header">
            <div><img src="/formal_profile.jpeg" className='avatar'/></div>        
            <h1>ANÁLISIS Y DISEÑO DE SOFTWARE</h1>
            <h2>Alumno(a): Jose Sinohe Galvan Rios</h2>
            
            {/* BOTÓN DE LOGIN */}
           

            <a className="links-container" href="https://www.linkedin.com/in/jose-sinohe-galvan-rios-7b3ab83a4" target="_blank" rel="noopener noreferrer">
              LINKED IN DE MI PROFILE
            </a><br />
            <a className="links-container" href="http://partial2.atwebpages.com/documentacionp1.html" target="_blank" rel="noopener noreferrer">
              DOCUMENTACION PARCIAL 1
            </a><br />        
            <a className="links-container" href="http://partial2.atwebpages.com/documentacionp2.html" target="_blank" rel="noopener noreferrer">
              DOCUMENTACION PARCIAL 2
            </a> 
             <div className="google-btn-container">
              <GoogleLogin 
                onSuccess={onSuccess} 
                onError={onError}
                useOneTap
              />
            </div>
          </header>
        )}
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;