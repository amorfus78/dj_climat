import LoginFormulaire from "@/web/components/LoginFormulaire.jsx";

const Login = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-green-200 to-green-500">
      <div className="relative flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500 mt-14 mb-5">
          Connexion
        </h1>
        <LoginFormulaire />
      </div>
    </main>
  );
};

export default Login;
