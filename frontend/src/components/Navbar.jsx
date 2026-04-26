import {Link} from "react-router-dom";
export default ()=>(
<div style={{padding:10,background:"#fff",display:"flex",gap:20}}>
<Link to="/dashboard">Dashboard</Link>
<Link to="/workouts">Workouts</Link>
<Link to="/journal">Journal</Link>
</div>)