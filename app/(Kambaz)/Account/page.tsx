import { redirect } from "next/dist/client/components/navigation";
import Signin from "./Signin/page";
import AccountLayout from "./Layout";

export default function AccountPage() {
    return (
        <AccountLayout>
            <Signin />
        </AccountLayout>
    );
}
