import AddUserForm from "@/components/AddUserForm";
import ShowUserList from "@/components/ShowUserList";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full h-screen">
      <div className="text-center space-y-4">
        <h1 className="text-xl">Server Actions</h1>
        <AddUserForm />
        <hr />
        <ShowUserList />
      </div>
    </div>
  );
}
