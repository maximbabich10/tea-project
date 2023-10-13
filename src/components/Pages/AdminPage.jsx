import React, { useState } from 'react';
import TeaCard from './TeaCard';

export default function AdminPage({allTeas}) {
    const [teas, setTeas] = useState(allTeas);
    // console.log(teas, allTeas);
    return (
        <div className="container">
            {teas?.map((tea) => (
            <TeaCard 
            tea={tea}
            key={tea.id}/>))}
        </div>
    );
}