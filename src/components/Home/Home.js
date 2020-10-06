import React, {useEffect, useState} from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCopyright } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
    const [events, setEvents] = useState([]);

    //Event Loading
    useEffect(() => {
        fetch('https://thawing-beyond-31671.herokuapp.com/allEvents')
        .then(res => res.json())
        .then(data => setEvents(data));
    }, [])

    return (
        <main>
            <Header/>
            <section id="home" className="container py-5 text-center">
                <h4 className="text-primary mb-4"> <strong> Click on events to become volunteer </strong> </h4>
                <div className="row">
                    {
                        events.map(event =>
                        <div key={event._id} className="col-sm-6 col-md-4 col-xl-3 my-3">
                            <Link className="td" to={"/register/"+event.name}>
                                <div className="card h-100 bg-success text-warning shadow">
                                    <div className="card-image-top">
                                        <img src={event.photo} alt="" width="100%" height="300px" />
                                    </div>
                                    <div className="card-body">
                                        <h3>{event.name}</h3>
                                    </div>
                                </div>
                            </Link>
                        </div>)
                    }
                </div>
            </section>
            
            <footer style={{backgroundColor:'goldenrod'}}  className="mt-3 py-3 text-center">
                <h5> <FontAwesomeIcon icon={faCopyright}/>  Copyright 2020. All Rights Reserved To : <a href="https://www.facebook.com/naim.islam.399">Md. Faizur Rahman Khan</a></h5>
            </footer>
        </main>
    );
};

export default Home;