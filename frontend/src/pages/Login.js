const API = "https://personal-finance-manager-xrk9.onrender.com";

const handleLogin = async (e) => {
  e.preventDefault();

  const response = await fetch(`${API}/api/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  const data = await response.json();

  if (response.ok) {
    localStorage.setItem("token", data.token);
    alert("Login Successful!");
    navigate("/dashboard");
  } else {
    alert(data.message);
  }
};