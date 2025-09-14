import { redirect } from "next/navigation";
import KambazLayout from "./Layout";
import AccountPage from "./Account/page";
import Signin from "./Account/Signin/page";

export default function Kambaz() {
  return (
    redirect("/Account/Signin")
  );
}
