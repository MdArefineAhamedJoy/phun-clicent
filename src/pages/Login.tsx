import { Button } from "antd";
import { FieldValues } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import PHForm from "../components/form/PHForm";
import PHInput from "../components/form/PHInput";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hooks";
import { toast } from "sonner";
import { verifiedToken } from "../utils/verifiedToken";
import { setUsers, TUser } from "../redux/features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [addLogin] = useLoginMutation();
  const defaultValues = {
    id : "hello",
    password : "ami"
  }
  const onSubmit = async (data: FieldValues) => {
    console.log(data);
    toast.loading("Loading....", { id: "login" });
    const userInfo = {
      id: data.id,
      password: data.password,
    };
    const response = await addLogin(userInfo).unwrap();

    const user = verifiedToken(response.data.accessToken) as TUser;

    dispatch(setUsers({ user: user, token: response.data.accessToken }));
    navigate(`/${user.role}/dashboard`);
    toast.success("succes", { id: "login" });
  };
  return (
    <PHForm onSubmit={onSubmit} defaultValues={defaultValues}>
      <h1>this is login page</h1>
      <div>
        <div>
          <label htmlFor="id">Id </label>
          <PHInput type={"text"} name={"id"} />
        </div>
        <div>
          <label htmlFor="password">Password : </label>
          <PHInput type={"text"} name={"password"} />
        </div>
      </div>
      <Button htmlType="submit">submit</Button>
    </PHForm>
  );
};

export default Login;
