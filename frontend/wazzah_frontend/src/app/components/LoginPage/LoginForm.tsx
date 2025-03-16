"use client";

import React, { useState } from "react";
import { InputField } from "./InputField";
import { Button } from "./Button";

interface LoginFormProps {
  onLogin?: (username: string, password: string) => Promise<void>;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (error) setError("");
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (error) setError("");
  };

  const handleLogin = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    // Validate fields
    if (!username || !password) {
      setError("Please fill in all fields");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      if (onLogin) {
        await onLogin(username, password);
      } else {
        // Default implementation if no onLogin prop is provided
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Logging in with:", username);
      }
    } catch (err) {
      setError("Invalid username or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <InputField
        type="text"
        placeholder="Username"
        value={username}
        onChange={handleUsernameChange}
        icon={<i className="ti ti-user text-gray-400" />}
      />

      <InputField
        type="password"
        placeholder="Password"
        value={password}
        onChange={handlePasswordChange}
        icon={<i className="ti ti-key text-gray-400" />}
      />

      {error && <div className="mt-0 text-sm text-red-600">{error}</div>}

      <Button onClick={handleLogin} isLoading={isLoading}>
        {isLoading ? "Logging in..." : "Login"}
      </Button>

      <div className="flex gap-4 items-center mx-0 my-4">
        <div className="flex-1 h-px bg-gray-200" />
        <span className="text-sm text-gray-500">or</span>
        <div className="flex-1 h-px bg-gray-200" />
      </div>

      <Button
        variant="outline"
        icon={<i className="ti ti-brand-google text-xl text-red-500" />}
      >
        Continue with Google
      </Button>
    </div>
  );
};
