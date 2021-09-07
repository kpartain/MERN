import React from "react";
import {
    Paper,
    FormControl,
    InputLabel,
    OutlinedInput,
    Button,
} from "@material-ui/core";
import { teal } from "@material-ui/core/colors";
const styles = {
    paper: {
        width: "20rem",
        padding: "1rem",
    },
    input: {
        marginBottom: ".5rem",
        height: "8vh",
        backgroundColor: "teal",
    },
    button: {
        width: "100%",
    },
    area: {
      height: "6vh"
    }
};
function App() {
    return (
        <div className="App">
            <Paper elevation={7} style={styles.paper}>
                <h2>Login Form</h2>
                <form>
                    <FormControl variant="outlined small" style={styles.input}>
                        <InputLabel>Username</InputLabel>
                        <OutlinedInput style={styles.area} type="text" />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>E-mail</InputLabel>
                        <OutlinedInput style={styles.area} type="email" />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput style={styles.area} type="password" />
                    </FormControl>
                    <FormControl variant="outlined" style={styles.input}>
                        <InputLabel>Password</InputLabel>
                        <OutlinedInput style={styles.area} type="password" />
                    </FormControl>
                    <Button type="submit" variant="contained" color="primary">
                        Register
                    </Button>
                </form>
            </Paper>
        </div>
    );
}

export default App;
