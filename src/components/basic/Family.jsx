import React from 'react';

import FamilyMember from './FamilyMember'

export default props => {

    return (
        <div>
            <FamilyMember name="Valter Massatoshi" lastName={props.lastName} />
            <FamilyMember name="Walter" lastName="Yodono" />
            <FamilyMember name="Victor" lastName={props.lastName} />
            <FamilyMember name="Vinicius Massatoshi" {...props} />
        </div>
    )
}
