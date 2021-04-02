import React, { useState } from 'react';

export default () => {
    const [course, setCourse] = useState('Desenvolvimento de Sistemas');
    const [student, setStudent] = useState('Victor Yodono');

    return (
        <div>
            <h3>Curso: {course}</h3>
            <h3>Aluno: {student}</h3>
        </div>
    )
}
