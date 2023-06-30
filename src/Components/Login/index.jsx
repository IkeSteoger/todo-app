import { useContext, useState } from "react";
import { AuthContext } from "../../Context/Auth";
import { When } from "react-if";
import { TextInput } from "@mantine/core";



function Login(){
    const { login, logout, isLoggedIn } = useContext(AuthContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        login(username, password);
        e.target.reset();
    }

    return(
        <>
            <When condition={isLoggedIn}>
                <button onClick={logout}>Logout</button>
            </When>
            <When condition={!isLoggedIn}>
                <form onSubmit={handleSubmit}>
                    <label> username:
                        <TextInput placeholder='Username' onChange={(e) => setUsername(e.target.value)} />
                    </label>
                    <label> password:
                        <TextInput placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </When>
        </>
    )
}

export default Login;
