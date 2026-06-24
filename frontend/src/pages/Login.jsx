import { useState } from "react";
import { supabase } from "../lib/supabase";
import { useNavigate } from "react-router-dom";


export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  async function handleLogin(e) {

    e.preventDefault();


    const { error } = await supabase.auth.signInWithPassword({

      email,
      password

    });


    if (error) {

      alert(error.message);

    } else {

      navigate("/dashboard");

    }

  }



  return (

    <div className="
          min-h-screen
          flex
          items-center
          justify-center
          bg-gray-100
        ">


      <form
        onSubmit={handleLogin}
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


        <h1 className="text-4xl font-bold text-center">
          Login
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
          "
        >
          Login
        </button>
      </form>
    </div>
  )
}