const API = "https://personal-finance-manager-xrk9.onrender.com";

const handleRegister = async (e) => {
  e.preventDefault();
  const response = await fetch(`${API}/api/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, email, password }),
  });

  const data = await response.json();
  if (response.ok) {
    alert("Registration Successful! Please Login.");
    navigate("/login");
  } else {
    alert(data.message);
  }
};