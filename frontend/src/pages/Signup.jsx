import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";


export default function Signup() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function handleSignup(e) {

    e.preventDefault();

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });


    if (error) {

      alert(error.message);

    } else {

      alert("Account created!");

      navigate("/dashboard");

    }

  }


  return (

    <div className="
      min-h-screen
      flex items-center justify-center
      bg-gray-100
    ">

      <form
        onSubmit={handleSignup}
        className="
          bg-white
          shadow-xl
          rounded-3xl
          p-10
          w-full
          max-w-md
          space-y-6
        "
      >

        <h1 className="
          text-4xl
          font-bold
          text-center
        ">
          Create Account
        </h1>


        <input

          type="email"

          placeholder="Email"

          value={email}

          onChange={(e) => setEmail(e.target.value)}

          className="
            w-full
            border
            rounded-full
            px-6
            py-3
          "

        />


        <input

          type="password"

          placeholder="Password"

          value={password}

          onChange={(e) => setPassword(e.target.value)}

          className="
            w-full
            border
            rounded-full
            px-6
            py-3
          "

        />


        <button

          className="
            w-full
            bg-black
            text-white
            py-3
            rounded-full
            hover:bg-gray-700
          "

        >
          Sign Up

        </button>


      </form>

    </div>

  );

}