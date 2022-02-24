import { useState } from "react";
import { TextField, Button, Typography } from "@material-ui/core";

import BackgroundMap from "../../assets/map.jpg";
import navigationService, { routes } from "../../services/navigationService";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLoginHandler = () => {
        navigationService.navigateTo(routes.DEFAULT);
    };

    return (
        <div
            style={{
                flex: 1,
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                backgroundImage: `url(${BackgroundMap})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
            }}
        >
            <div
                style={{
                    width: "50%",
                    height: "50%",
                    margin: "auto",
                    display: "flex",
                    backgroundColor: "white",
                    justifyContent: "space-around",
                    flexDirection: "column",
                    borderRadius: 10,
                }}
            >
                <Typography
                    variant={"h2"}
                    color={"primary"}
                    style={{ alignSelf: "center", fontWeight: "bold" }}
                >
                    GEOPREDICT
                </Typography>

                <TextField
                    label={"Email"}
                    style={{ width: "60%", alignSelf: "center" }}
                    variant={"outlined"}
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />

                <TextField
                    label={"Senha"}
                    type={"password"}
                    style={{ width: "60%", alignSelf: "center" }}
                    variant={"outlined"}
                    value={password}
                    onChange={({ target }) => setPassword(target.value)}
                />

                <Button
                    color={"primary"}
                    style={{ width: "30%", alignSelf: "center" }}
                    variant={"contained"}
                    onClick={onLoginHandler}
                >
                    Entrar
                </Button>
            </div>
        </div>
    );
};

export default Login;
