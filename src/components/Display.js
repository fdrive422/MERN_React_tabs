import React from 'react';

const Display = (props) => {
    const { tabContent } = props;

    return (
        <div className='displayBox'>
            {tabContent}
        </div>
    )
}

export default Display;