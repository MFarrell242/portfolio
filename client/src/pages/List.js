import React from 'react';
import projLister from "../components/projects";
import "../styles/list.css";

export default function List() {
    return (
        <div className="listBox">
            <h2 className="listIntro">A few examples of my work:</h2>
            <ul>
                <li className="listItem"><a href="/">Hiragana Heroes</a>  <a href="https://github.com/MFarrell242/Hiragana_Heroes">Github</a></li>
                <li className="listItem"><a href="/">Myooz</a>  <a href="https://github.com/HoomieJanell/project_2">Github</a></li>
                <li className="listItem">This very website <a href="https://github.com/MFarrell242/portfolio">Github</a></li>
            </ul>
        </div>
    )
}