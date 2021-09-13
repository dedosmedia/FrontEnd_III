import {Link} from 'react-router-3';

export default function HomeScreen(props){
    return (
        <>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/dog">Perritos</Link></li>
                <li><Link to="/cat">Gatitos</Link></li>
            </ul>
            <br/>
            <h2><span>Tenemos</span></h2>

            {props.children }
        </>
    )
}