import React from 'react';

const Card=({id,name,email}) =>{

    // const{id,name,email}=props;
    return (
        <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?size=200x200`} />
            <div>
                <p>{name}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Card;