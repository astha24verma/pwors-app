// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';



function Dashboard() {
    return (
        <>
            <nav style={{ position: 'fixed', top: 0, left: 0, width: '100%', backgroundColor: '#fff' }}>
                <ul style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px', listStyleType: 'none', margin: 0 }}>
                    <li style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}><Link to="/top">Top</Link></li>
                    <li style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}><Link to="/bottom">Bottom</Link></li>
                    <li style={{ padding: '10px 20px', backgroundColor: '#f0f0f0', borderRadius: '5px' }}><Link to="/shoes">Shoes</Link></li>
                </ul>
            </nav>
            <div style={{ paddingTop: '60px' }}>
                {/* Add your dashboard content here */}
            </div>
        </>
    );
}

export default Dashboard;