import { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 1000); // 1 segundos

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundColor: "#000",
      color: "#fff",
      fontSize: "2rem",
      flexDirection: "column",
      color: "violet"
    }}>
        <img src="img/logo_proyect.png" alt="Logo" style={{width: "100px"}}/>
        OD
    </div>
  );
};

const App = () => {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? <SplashScreen onFinish={() => setShowSplash(false)} /> : <MainApp />;
};

const MainApp = () => {
  return (
    <>
  
    </>
  );
};

export default App;
