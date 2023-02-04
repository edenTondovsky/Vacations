import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import UserModel from "../../../Models/user-model";
import authService from "../../../Services/AuthService";
import notify from "../../../Utils/Notify";
import "./Register.css";

function Register(): JSX.Element {

    const { register, handleSubmit, formState } = useForm<UserModel>();
    const navigate = useNavigate();

    async function send(user: UserModel) {
        try {
            await authService.register(user);
            notify.success("Welcome" + user.firstName);
            navigate("/home");
        }
        catch (err: any) {
            notify.error(err);
        }
    }

    return (
        <div className="Register">
            <h2>Register </h2>

            <form onSubmit={handleSubmit(send)}>  

            <label>First Name:</label>
                <input type="text" {...register("firstName", UserModel.firstNameValidation)} />
                <span className="Err">{formState.errors.firstName?.message}</span>
                
                <label>Last Name:</label>
                <input type="text" {...register("lastName", UserModel.lastNameValidation)} />
                <span className="Err">{formState.errors.lastName?.message}</span>

                <label>Email:</label>
                <input type="email" {...register("email", UserModel.emailValidation)} />
                <span className="Err">{formState.errors.email?.message}</span>

                <label>Password:</label>
                <input type="password" {...register("password", UserModel.passwordValidation)} />
                <span className="Err">{formState.errors.password?.message}</span>

                <button>register</button>
            </form>


        </div>
    );
}

export default Register;
