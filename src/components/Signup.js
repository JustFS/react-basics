import React, { useState } from "react";

const Signup = () => {
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  return (
    <div className="signup">
      <h2>Inscrivez-vous</h2>
      <br />

      <label>Pseudo</label>
      <br />

      <input type="text" />
      <br />
      <br />
      <label>Mot de passe</label>
      <br />

      <input type="password" onChange={(e) => setPassword(e.target.value)} />
      {password.length < 8 && password.length > 3 && (
        <p>Le mot de passe être de 8 caractères minimum</p>
      )}
      <br />
      <br />
      <label>Confirmer mot de passe</label>

      <br />
      <input type="password" onChange={(e) => setConfirmPass(e.target.value)} />
      {confirmPass.length > 4 && password !== confirmPass && (
        <p>Les mots de passes ne correspondent pas</p>
      )}
    </div>
  );
};

export default Signup;
