import { redirect } from "next/dist/client/components/navigation";

export default function AccountPage() {
    return (
        redirect("/Account/Signin")
    );
}
