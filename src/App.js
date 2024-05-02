import React, { useState, useRef, useEffect } from "react";

import LoginModal from "./LoginModal";

import "./App.css";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const loginButtonRef = useRef(null);

  useEffect(() => {
    if (!isOpen) {
      loginButtonRef.current?.focus();
    }
  }, [isOpen]);

  return (
    <div className="App-container">
      <p>You are logged out!</p>

      <button onClick={() => setIsOpen(true)} ref={loginButtonRef}>
        Login
      </button>

      {isOpen && <LoginModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default App;
