import NavbarComponent from "./../../components/NavbarComponent";
import AuthButton from "@/app/components/logInOut";
export default function UserPage() {
  return (
    <div className="p-2 flex flex-col gap-10">
      <NavbarComponent />
      <h1 className="text-2xl text-white text-center">User Dashboard</h1>
      <div className="bg-orange-600/50 items-center p-10 border-white border-4 rounded-3xl ">
        {" "}
        <AuthButton />
      </div>
      {/* User-specific content goes here */}
      <div className="border-4 border-white bg-orange-400 p-20 rounded-3xl m-10">
      <h1 className="text-2xl text-white text-center">User Bookmarks : </h1>
      </div>
    </div>
  );
}
