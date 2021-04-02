import React, { useState } from 'react';

export default props => {

    const [name, setName] = useState('Victor Yodono');

    return (
        <div>
            <button onClick={() => {
                props.onClick(name)
            }}>
                Fornecer informações do Aluno
            </button>
        </div>
    )
}
