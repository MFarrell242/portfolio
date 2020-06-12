import React from 'react';
import API from '../utils/API';
import "./projStyles.css";

export default function projLister() {
    const samples = [];
    API.getSamples()
        .then(res => res.map(item => samples.push(item)));

    return (
        <div>
            {samples.map(item => (
                <div className="projDispBox">
                    <div className="titleZone">
                        <h3 className="projName">{item.name}</h3>
                    </div>
                    <div className="descZone">
                        <p>{item.description}</p>
                    </div>
                    <div className="linkZone">
                        <a href={item.hubLink}>Repo link</a>
                        <a href={item.depLink}>Live link</a>
                    </div>
                </div>
            ))}
        </div>
    )
}