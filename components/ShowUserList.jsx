import { getUsers } from "@/actions/user";

const ShowUserList = async () => {
  const users = await getUsers();
  return (
    <div>
      <h2 className="text-xl mb-2">All Users</h2>

      {users?.length > 0 ? (
        <ul className="border">
          {users.map((user) => (
            <li key={user.id}>{user.name}- {user.email}</li>
          ))}
        </ul>
      ) : (
        "No Users found"
      )}
    </div>
  );
};

export default ShowUserList;
