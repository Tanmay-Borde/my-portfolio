import React from "react";
import { useLocation } from "react-router-dom";

export default function Archive() {
    const location = useLocation();

    React.useEffect(() => {
        const handleHashChange = () => {
            window.scrollTo(0, 0);
        };

        handleHashChange();
        window.addEventListener('hashchange', handleHashChange);

        return () => {
            window.removeEventListener('hashchange', handleHashChange);

        };
    }, [location.hash]);
    return (
        <div>
            <h1>
                <center>
                    <div style={{ textAlign: 'center', height: '50vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <h1 style={{ fontSize: '48px', fontWeight: 'bold', letterSpacing: '2px', color: 'white' }}>{`Coming Soon..!`}</h1>
                        <p style={{ fontSize: '18px', color: 'grey', lineHeight: '1.5' }}>{`An archive of some of the best creations of Humanity. Stay tuned for updates!`}</p>
                    </div>
                </center>
            </h1>
        </div>
    )
}