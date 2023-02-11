import React, { useState } from "react";
import { Alert, Input, Button } from "antd";
import { Link } from "react-router-dom";

export const Login = () => {
    const [signedIn, setSignedIn] = useState(!!localStorage.getItem("signedIn"));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //const [isSignedIn, setIsSignedIn] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === "michaelcarpenter" && password === "carpenter352") {
        localStorage.setItem("signedIn", true);
        localStorage.getItem("username", username);
      setSignedIn(true);
    } else {
      setError(true);
    }
  };

  return (
    <div>
      {signedIn ? (
        <div>
            <h1>Welcome {username || "Michael Carpenter"}</h1>
            <p>You are now signed in!</p>
            <Button type="primary" htmlType="button">
                <Link to="/my-account">Go to Dashboard</Link>
            </Button>
        </div>
      ) : (
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "250px",
            padding: "30px",
            border: "1px solid #ccc",
            borderRadius: "10px",
          }}
          onSubmit={handleSubmit}
        >
          <h2 style={{ marginBottom: "30px" }}>Sign In</h2>
          {error && (
            <Alert
              style={{ marginBottom: "30px" }}
              message="Incorrect username or password. Please try again."
              type="error"
            />
          )}
          <Input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            placeholder="Enter username"
            style={{ marginBottom: "30px" }}
          />
          <Input.Password

            value={password}
            onChange={(event) => setPassword(event.target.value)}
            placeholder="Enter password"
            style={{ marginBottom: "30px" }}
            />
            <Button type="primary" htmlType="submit">
            Sign In
            </Button>
        </form>
        )}
    </div>
    );
};