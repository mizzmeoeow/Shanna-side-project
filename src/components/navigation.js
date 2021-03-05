import React from 'react';
import { NavLink } from 'react-router-dom';

export default function() {
    return (
        <div>
            <div>
                <NavLink exact to="/">Beginning</NavLink>
            </div>
            <div>
                <NavLink to="/middle">Middle</NavLink>
            </div>
            <div>
                <NavLink to="/end">End</NavLink>
            </div>
        </div>
    )
}