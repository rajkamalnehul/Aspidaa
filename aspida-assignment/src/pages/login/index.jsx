import React, { useState } from "react";
import { loginUser } from "../../services/auth";
import OutlinedInput from "../../components/inputs/outlinedInput";
import FilledButton from "../../components/buttons/filledButton";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../store/slices/user";
import { useDispatch } from "react-redux";
import { getPath } from "../../utils/getPath";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (email, password) => {
    setLoading(true);
    loginUser(email, password)
      .then((user) => {
        setLoading(false);
        dispatch(updateUser({ ...user, isAuthenticated: true }));
        const userRole = user.role;
        navigate(getPath(userRole));
        console.log("Logged in:", user);
      })
      .catch((error) => {
        setLoading(false);
        alert("user not found");
        console.error("Login failed:", error.message);
      });
  };

  return (
    <div className="w-full h-screen grid place-items-center p-6 md:p-10">
      <div className="w-full md:max-w-[400px] p-4 flex flex-col gap-6 border border-[#D9D9D9] rounded-lg">
        <p className="text-lg font-medium ">Sign In to your account</p>
        <div>
          <p>Email</p>
          <OutlinedInput
            label={"Email"}
            type={"Email"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <p>Password</p>
          <OutlinedInput
            label={"Password"}
            type={"Password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <FilledButton
          label={loading ? "Please wait..." : "Submit"}
          onClick={() => handleSubmit(email, password)}
        />
      </div>
      <div className="w-full md:max-w-[400px] p-4 flex flex-col gap-2 text-sm text-[#fd00005c]">
        <p>Credentials:</p>
        <ul>
          <li>Super Admin: Email - rajkamalnehul@gmail.com | Pass- mango</li>
          <li>Admin: Email - desmithjhon@gmail.com | Pass- mango</li>
          <li>User: Email - nehul@gmail.com | Pass- mango</li>
        </ul>
      </div>
    </div>
  );
}

export default Login;
