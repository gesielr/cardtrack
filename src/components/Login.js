import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import logo from "../assets/logocardtrack.png";

const Login = () => {
  const [cnpj, setCnpj] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar/ocultar senha
  const navigate = useNavigate();

  const formatCnpj = (value) => {
    const cnpjDigits = value.replace(/\D/g, "");
    return cnpjDigits
      .replace(/^(\d{2})(\d)/, "$1.$2")
      .replace(/^(\d{2}\.\d{3})(\d)/, "$1.$2")
      .replace(/^(\d{2}\.\d{3}\.\d{3})(\d)/, "$1/$2")
      .replace(/^(\d{2}\.\d{3}\.\d{3}\/\d{4})(\d)/, "$1-$2")
      .replace(/^(\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}).*/, "$1");
  };

  const validateInputs = () => {
    const newErrors = {};
    const cnpjRegex = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/;
    if (!cnpjRegex.test(cnpj)) {
      newErrors.cnpj = "CNPJ inválido. Use o formato 00.000.000/0000-00.";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.email = "Endereço de email inválido.";
    }
    const passwordRegex =
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/;
  
  if (!passwordRegex.test(password)) {
    newErrors.password =
      "A senha deve conter ao menos 6 caracteres, incluindo uma letra maiúscula, um número e um caractere especial.";
  }
  
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateInputs();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      navigate("/dashboard");
    }
  };

  const handleInputChange = (field, value) => {
    if (field === "cnpj") {
      setCnpj(formatCnpj(value));
      setErrors((prev) => ({ ...prev, cnpj: "" }));
    } else if (field === "email") {
      setEmail(value);
      setErrors((prev) => ({ ...prev, email: "" }));
    } else if (field === "password") {
      setPassword(value);
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        background:
          "url('https://source.unsplash.com/1600x900/?credit-card') no-repeat center center",
        backgroundSize: "cover",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          width: "100%",
          maxWidth: "400px",
        }}
      >
        <div className="text-center mb-4">
          <img src={logo} alt="CardTrack Logo" style={{ width: "150px" }} />
        </div>
        <h3 className="text-center mb-4">Conectar</h3>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formCNPJ">
            <Form.Label>CNPJ</Form.Label>
            <Form.Control
              type="text"
              placeholder="Digite seu CNPJ"
              value={cnpj}
              onChange={(e) => handleInputChange("cnpj", e.target.value)}
              isInvalid={!!errors.cnpj}
            />
            <Form.Control.Feedback type="invalid">
              {errors.cnpj}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formEmail">
            <Form.Label>Usuário ou email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPassword">
            <Form.Label>Senha</Form.Label>
            <div style={{ position: "relative" }}>
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => handleInputChange("password", e.target.value)}
                isInvalid={!!errors.password}
              />
              <div
                onClick={() => setShowPassword((prev) => !prev)}
                style={{
                  position: "absolute",
                  top: "50%",
                  right: "10px",
                  transform: "translateY(-50%)",
                  cursor: "pointer",
                  color: "#0d76b6",
                }}
              >
                {showPassword ? "🙈" : "👁️"}
              </div>
              <Form.Control.Feedback type="invalid">
                {errors.password}
              </Form.Control.Feedback>
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mb-3">
            <Form.Check type="checkbox" label="Lembrar" />
            <a href="#forgot-password" className="text-decoration-none">
              Esqueceu a senha?
            </a>
          </div>
          <Button variant="primary" type="submit" className="w-100">
            Conectar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
