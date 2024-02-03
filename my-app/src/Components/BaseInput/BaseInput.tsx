import { TextField } from "@mui/material";

type Props = {
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: any;
};

function BaseInput({ label, onChange, value }: Props) {
  return (
    <TextField
      variant="filled"
      label={label}
      onChange={onChange}
      value={value}
    />
  );
}
export default BaseInput;
