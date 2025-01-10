import { Input } from "antd";
import { Controller } from "react-hook-form";

type TInputValueProps = {
  type : string 
  name : string
}

const PHInput = ({ type, name } : TInputValueProps) => {
  return (
    <div>
      <Controller
        name={name}
        render={({ field }) => <Input {...field} type={type} id={name} />}
      />
    </div>
  );
};

export default PHInput;
