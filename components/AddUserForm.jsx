import { addUser } from "@/actions/user";

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
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddUserForm;
