import LoginFormulaire from "@/web/components/LoginFormulaire.jsx";
import Link from "next/link";

const Home = () => {
  return (
    <>
      Hello World
      <div></div>
      <Link href="/login">Login</Link>
      <Link href="/signUp">Sign Up</Link>
    </>
  );
};

export default Home;
