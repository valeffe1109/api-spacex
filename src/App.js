import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Popover from './components/Popover';
import Card from './components/Card';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles((theme) => ({
  cardWrapper: {
    padding: 16,
    display: 'grid',
    gridTemplateColumns: 'repeat(4, auto);',
    gap: 16
  }
}))

const App = () => {
  const classes = useStyles();
  const [showPopover, setShowPopover] = useState(false);
  const [data, setData] = useState([]);
  const [limit,setLimit] = useState(10);
  //Puoi fare la stessa cosa creando un oggetto filters con lo useState e li dentro imposti tuttto quanto limit , launch success , land success e launch year

  useEffect(() => {
    fetchData()
  }, [limit])

  const fetchData = async () => {
    //https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
    try {
      const { data } = await axios.get('https://api.spacexdata.com/v3/launches',{params:{limit:limit}});
      console.log(data);
      console.log('working');
      setData(data);
    } catch (err) {
      console.log(err)
    }
  }
  return <div>
    {/* <h1>Ciao sono App</h1>
    {showPopover && <Popover onClose={() => setShowPopover(!showPopover)}>
      <h1>Ciao sono il contenuto del modale</h1>
    </Popover>} */}

    <h1>Space X Missions</h1>
    <div>{limit}</div>
    <button onClick={()=>setLimit(limit+1)}>+</button>
    <div className={classes.cardWrapper}>
      {data.map((item) => (
        <Card src={item.links.mission_patch_small} />
      ))}
    </div>
  </div>
}

export default App;