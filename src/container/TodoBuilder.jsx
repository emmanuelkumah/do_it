import React from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Header from "../components/UI/Header"
import Hero from "../components/UI/Hero"

function TodoBuilder() {
    return (
        <Router>
            <Grid container direction="column">
             <Grid item container > <Header /></Grid>
             <Grid item container xs={12}>
                 <Hero />
             </Grid>
             <Grid item container>
                <Grid item xs={0} sm={2}/>
                <Grid item xs={12} sm={8}>
                    <p>Pariatur ipsum labore nostrud ullamco velit minim. Eiusmod duis incididunt anim anim veniam proident 
                        
                        nulla sunt minim pariatur dolor minim cupidatat. Sint mollit qui eu esse reprehenderit velit velit. 
                        Irure id reprehenderit pariatur qui laborum dolore quis amet eiusmod tempor amet qui. 
                        Aliqua esse ea irure mollit aute esse. Nostrud et ut tempor adipisicing incididunt tempor laboris ut 
                        elit velit.Ex magna quis anim eiusmod nisi ad eu nostrud minim culpa laborum exercitation proident. 
                        Mollit dolore proident quis occaecat eu dolore id labore. Id aliqua occaecat reprehenderit cillum Lorem 
                        et ut fugiat Lorem sit aliquip. Excepteur cillum reprehenderit reprehenderit qui consequat proident.
                        Voluptate dolore laboris aliquip pariatur est nostrud cillum est excepteur magna tempor fugiat dolore.
                    </p>
                </Grid>
                <Grid item xs={0} sm={2} />
             </Grid>
         </Grid>
        </Router>
         
    )
}

export default TodoBuilder
