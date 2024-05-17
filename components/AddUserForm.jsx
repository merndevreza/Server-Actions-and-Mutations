import { addUser } from "@/actions/user";
import FormSubmitButton from "./FormSubmitButton";

const AddUserForm = () => {
  const addUserWithFlag=addUser.bind(null,"Pro")
  return (
    <form action={addUserWithFlag}>
      <input type="hidden" name="type" value="Developer" />
      <div className="mb-3">
        <input type="text" name="name" placeholder="Name" />
      </div>
      <div>
        <input type="email" name="email" placeholder="Email" />
      </div>
      <FormSubmitButton/>
    </form>
  );
};

export default AddUserForm;
