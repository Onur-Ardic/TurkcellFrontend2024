import { clearUser } from "@/redux/slice/authSlice";
import { useDispatch } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { usePathname, useRouter } from "next/navigation";

const Logout = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const activeUrl = usePathname();
  const activeLang = activeUrl.split("/")[1];

  const handleLogout = () => {
    dispatch(clearUser());
    router.push(`/${activeLang}`);
  };

  return (
    <button className="btn btn-lg btn-success" onClick={handleLogout}>
      Logout
      <CiLogout />
    </button>
  );
};

export default Logout;
