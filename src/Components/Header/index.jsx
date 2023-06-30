import { createStyles, Header } from "@mantine/core";
import { Link } from "react-router-dom";
import Login from "../Login";

const useStyles = createStyles((theme) => ({
    navbar: {
    backgroundColor: theme.colors.blue[6],
    height: '100%',
    margin: '0',
    color: theme.colors.gray[0],
    display: 'flex',
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.md,
    },
    link: {
        padding: theme.spacing.sm,
    }
}));

function HeaderComponent(){
    const { classes } = useStyles();
    return(
        <Header data-testid="header">
            <nav className={classes.navbar} >
                <Link className={classes.link} to='/'>Home</Link>
                <Link className={classes.link} to='/settings'>Settings</Link>
            <Login />
            </nav>
        </Header>
    )
}

export default HeaderComponent;
