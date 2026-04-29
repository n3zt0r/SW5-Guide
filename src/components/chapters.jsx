import React from 'react';
import Stage from 'components/stage';

export default function Chapters({ chapter }) {
    const { chapterName, stages } = chapter;

    return (
        <div className='chapters'>
            <h3 className='chapters-title'>{chapterName}</h3>

            {stages.map((stage, index) => (
                <Stage key={index} stage={stage} />
            ))}
        </div>
    );
}