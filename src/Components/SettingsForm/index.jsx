import { useContext } from 'react';
import { SettingsContext } from '../../Context/Settings';
import { Switch, createStyles, Button, Card, Grid, TextInput, NumberInput } from '@mantine/core';
import { IconSettings } from '@tabler/icons-react';

const useStyles = createStyles((theme) => ({
    h1: {
      backgroundColor: theme.colors.gray[8],
      color: 'white',
      fontSize: '20px',
      fontWeight: 'bold',
      margin: '16px auto',
      padding: '16px',
      width: '80%',
      fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    },
    span: {
        fontWeight: '500',
        fontSize: '14px',
        fontFamily: 'apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
    }

  }));

const SettingsForm = (event) => {
    
    const { pageItems, setPageItems, showCompleted, setShowCompleted, sort, setSort } = useContext(SettingsContext);
    const { classes } = useStyles();
    
    return(
      <>
        <h1 className={classes.h1}><IconSettings />Manage Settings</h1>
        <Grid>
            <Card shadow="sm" padding="lg" radius="md" withBorder>
                {/* ADD onSubmit HERE??? */}
                <form>
                    <h3>Update Settings</h3>
                    <label>
                        <Switch label='Show Completed ToDos'type="checkbox" name="completed" checked={showCompleted} onChange={(event) => setShowCompleted(event.target.checked)} />
                    </label>
                    <label>
                        <span className={classes.span}>
                            Items per page
                        </span>
                        <NumberInput placeholder={pageItems} onChange={(event) => setPageItems(event.target)} />
                    </label>
                    <label>
                        <span className={classes.span}>
                            Sort Keyword
                        </span>
                        <TextInput placeholder={sort} onChange={(event) => setSort(event.target.value)} />
                    </label>
                    <label>
                        <Button type="submit">Show New Settings</Button>
                    </label>
                </form>
            </Card>
            </Grid>
      </>
    )
}

export default SettingsForm;