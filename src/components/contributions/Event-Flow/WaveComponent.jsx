import React from 'react';
import wave from '../../../assets/images/waves.png';

export default function WaveComponent() {
    return (
        <div className="absolute hidden sm:block sm:top-[-2rem] md:top-[-2.9rem] lg:-top-24 -z-10">
            {/* The image is set to cover the entire container */}
            <img src={wave} alt="Wave Background"  />
        </div>
    );
}
