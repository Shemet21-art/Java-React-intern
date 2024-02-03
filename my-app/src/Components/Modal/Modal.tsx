import Box from "@mui/material/Box";
import { Modal as MUIModal } from "@mui/material/";
import BaseInput from "../BaseInput/BaseInput";
import { ChangeEvent } from "react";
import { Button } from "@mui/material";

type PropsType = {
  open: boolean;
  onClose: () => void;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSave: () => void;
};

const styles = {
  btn: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
};

function Modal({ open, onClose, value, onChange, onSave }: PropsType) {
  return (
    <MUIModal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.btn}>
        <form>
          <BaseInput
            value={value}
            onChange={onChange}
            label={"Enter changes"}
          />
          <Button onClick={onSave}>Change</Button>
        </form>{" "}
      </Box>
    </MUIModal>
  );
}

export default Modal;
