import React from 'react';

// Rename the local Home component to avoid conflicts
type HomeProps = {}

const LocalHome = (props: HomeProps) => {
    return (
        <div className='text-black'>index</div>
    )
}
export default LocalHome;