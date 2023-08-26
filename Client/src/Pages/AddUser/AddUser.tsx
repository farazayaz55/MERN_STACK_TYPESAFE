/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Modal from "react-modal";
import { UserModel } from "../../Models/UserModel";
import { createUser } from "../../React-Query/userApiCalls";
import "./AddUser.scss";
import { errorFunction } from "../../React-Query/ErrorMsg";

Modal.setAppElement('#root');

const AddUser: React.FC<{ isOpen: boolean; onClose: () => void }> = ({
  isOpen,
  onClose,
}) => {
  const queryClient = useQueryClient();

  const createUserMutation = useMutation({
    mutationFn: createUser,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError:errorFunction
  });

  const formSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formDataObject: UserModel = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      password: formData.get("password") as string,
      confirmPassword: formData.get("confirm_password") as string,
      file: formData.get("fileUpload") as File,
    };

    createUserMutation.mutate(formDataObject);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Form Modal"
      style={{ content: { maxHeight: "500px", maxWidth: "500px" } }}
    >
      <form onSubmit={formSubmit}>
        <label>Enter Name</label>
        <input type="text" name="name" placeholder="Enter Name" required />
        <label>Enter Email</label>
        <input type="text" name="email" placeholder="Enter Email" required />
        <label>Enter Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          required
        />
        <label>Confirm Password</label>

        <input
          type="password"
          name="confirm_password"
          placeholder="Confirm Password"
          required
        />
        <label>Upload File</label>

        <input
          type="file"
          name="fileUpload"
          placeholder="Upload File"
          required
        />
        <button type="submit">Submit</button>
      </form>
    </Modal>
  );
};

export default AddUser;
