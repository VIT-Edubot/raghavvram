
import React from 'react';

function Employe(props) {
    return (
        <div>
            <div>
                <b>NAME:</b> <span>{props.name}</span>
            </div>
            <div>
                <b>Position:</b> <span>{props.pos}</span>
            </div>
            <div>
                <b>Department:</b> <span>{props.dept}</span>
            </div>
        </div>
    );
}

export default Employe;


