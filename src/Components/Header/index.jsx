import { createStyles, Header } from "@mantine/core";
import { Link } from "react-router-dom";

const useStyles = createStyles((theme) => ({
    navbar: {
    backgroundColor: theme.colors.blue[6],
    height: '100%',
    margin: '0',
    color: theme.colors.gray[0],
    display: 'flex',
    padding: theme.spacing.sm,
    fontSize: theme.fontSizes.sm,
    // fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    },
    link: {
        padding: theme.spacing.sm,
        // fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif'
    }
}));

function HeaderComponent(){
    const { classes } = useStyles();
    return(
        <Header data-testid="header">
            <nav className={classes.navbar} >
                <Link className={classes.link} to='/'>Home</Link>
                <Link className={classes.link} to='/settings'>Settings</Link>
            </nav>
        </Header>
    )
}

export default HeaderComponent;
