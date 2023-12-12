import { useNavigate } from "react-router-dom";
import { userLogin } from "../../api/api.service";
import { UserLogin } from "../../components/UserLogin/UserLogin";

export const UserLoginContainer = () => {
  const navigate = useNavigate();
  const userLoginRequest = async (email: string, password: string) => {
    try {
      const loginResponse = await userLogin(email, password);

      localStorage.setItem("token", loginResponse.token);

      navigate("/country");
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <UserLogin onSubmit={userLoginRequest} />
    </div>
  );
};
