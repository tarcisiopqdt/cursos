import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/IconButton'

export default props => (
    <div role='form' className='todoForm'>

        <Grid cols='12 9 10'>
        <input id='decription' className='form-control' 
            placeholder='Adicione uma tarefa' type="text" />
        </Grid>
          
         <Grid cols='12 3 2'>
            <IconButton style='danger' icon='plus' />
        </Grid> 
      
    </div>
)