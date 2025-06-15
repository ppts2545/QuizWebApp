import React from "react";
import "./CreateAccount_form.css";
import { useForm } from "react-hook-form";
import handleSubmit from "../../Functions/handlerSubmit";

type FormData = {
  username: string;
  email: string;
  password: string;
};

const CreateAccountForm: React.FC = () => {

    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [name, setName] = React.useState("");

    return (
        <form onSubmit={handleSubmit}>
            <label>
            Email:
            <input type="text" onChange={(e) => setEmail(e.target.value)} />
            </label>
             <label>
            Name:
            <input type="text" onChange={(e) => setName(e.target.value)} />
            </label>
            <label>
            Password:
            <input type="password" onChange={(e) => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
}

export default CreateAccountForm;