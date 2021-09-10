import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const useStyle = makeStyles((theme)=>({

}))

function loginPage() {
  const classes = useStyle();
  return(   
    <Container fixed>
     <Grid container spacing={3}>
       <Grid item lg={12} xs={12}>
       <TextField id="outlined-basic" label="Outlined" variant="outlined" />
       </Grid>
       <Grid item lg={12} xs={12}>
            <TextField id="outlined-basic" label="User Name" variant="outlined"/>
        </Grid>
       <Link href='/username'><button>login</button></Link>
     </Grid>
    </Container>
    )
}
export default loginPage;

