import { useForm } from "react-hook-form";

import { useHistory } from "react-router-dom";
const Login = () => {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const OnLogin = (collect) => {
    console.log(collect);
  };

  const redirect = () => {
    history.push("/dashboard");
  };

  return (
    <div className="mdiv">
      <h1> Login Here...</h1>
      <form onSubmit={handleSubmit(OnLogin)}>
        <div>
          <p>Email:</p>
          <input
            type="email"
            className="input"
            placeholder="enter email"
            name="email"
            {...register("email", { required: true })}
          />
          {errors.email && <span>email is required</span>}
        </div>
        <div>
          <p>Password:</p>
          <input
            type="password"
            className="input"
            autoComplete="off"
            placeholder="enter password"
            name="password"
            {...register("password", { required: true })}
          />
          {errors.password && <span> password is required</span>}
        </div>
        <button onClick={redirect} id="btn">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
