import SignUpFormulaire from "@/web/components/SignUpFormulaire.jsx";

const SignUp = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-gradient-to-r from-green-200 to-green-500">
      <div className="relative flex flex-col items-center p-10 bg-white rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-green-500 mt-14 mb-5">
          Inscription
        </h1>
        <SignUpFormulaire />
      </div>
    </main>
  );
};

export default SignUp;
