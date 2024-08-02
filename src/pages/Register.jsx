import { Button, Label, TextInput } from "flowbite-react";
import { Divider } from "../components/Divider";
import { FcGoogle } from "react-icons/fc";
import useForm from "../hooks/useForm";

export const Register = () => {
  const { handleChange, handleSubmit, handleSignUpWithGoogle } = useForm();

  return (
    <form
      onSubmit={handleSubmit}
      className="flex max-w-xl mx-auto mt-10 flex-col gap-6 p-4"
    >
      <h2 className="text-center text-4xl font-semibold">Create Account</h2>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" className="text-lg" value="Your email" />
        </div>
        <TextInput
          id="email"
          type="email"
          placeholder="example@example.com"
          onChange={handleChange}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" className="text-lg" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          placeholder="*****"
          onChange={handleChange}
        />
      </div>
      <Button color={"blue"} type="submit">
        Register
      </Button>
      <Divider text={"OR"} />

      <Button
        color={"white"}
        className="border-2"
        type="button"
        onClick={handleSignUpWithGoogle}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <FcGoogle size={25} />
          <span className="text-gray-500">Sing Up with Google </span>
        </div>
      </Button>
    </form>
  );
};
