import React, { useEffect, useRef } from "react";

import useOnClickOutside from "./useOnClickOutside";

import "./LoginModal.css";

const LoginModal = ({ onClose }) => {
  const clickOutsideRef = useOnClickOutside(onClose);
  const usernameInputRef = useRef(null);

  useEffect(() => {
    usernameInputRef.current?.focus();
  }, []);

  return (
    <div className="LoginModal-overlay-container">
      <form
        className="LoginModal-container"
        onSubmit={(e) => {
          e.preventDefault();
        }}
        ref={clickOutsideRef}
      >
        <button
          type="button"
          className="LoginModal-closeButton"
          onClick={onClose}
        >
          X
        </button>

        <h2>Login</h2>

        <p>
          <label htmlFor="username" className="LoginModal-label">
            Username:{" "}
          </label>
          <input type="text" id="username" ref={usernameInputRef} />
        </p>

        <p>
          <label htmlFor="password" className="LoginModal-label">
            Password:{" "}
          </label>
          <input type="password" id="password" />
        </p>

        <button type="submit">Let me in</button>
      </form>
    </div>
  );
};

export default LoginModal;
