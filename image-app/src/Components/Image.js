


import React, { useState } from 'react';
import photo from '/home/steve/Documents/phase2-challange/image-app/src/Assets/Logo.avif'

function ImageComponent() {
    let [width, setWidth] = useState(50);
    let [height, setHeight] = useState(50);

    let handleWidthChange = (e) => {
        setWidth(parseInt(e.target.value));
    };

    let handleHeightChange = (e) => {
        setHeight(parseInt(e.target.value));
    };

    return (
        <div>
            <h3>Adjust Image Size</h3>
            <label>Width:</label>
            <input
                type="range"
                min="10"
                max="200"
                value={width}
                onChange={handleWidthChange}
            />
            <label>Height:</label>
            <input
                type="range"
                min="10"
                max="200"
                value={height}
                onChange={handleHeightChange}
            />
            <br />
            <img
                src={photo}
                alt="Example"
                style={{ width: `${width}px`, height: `${height}px` }}
            />
            <p>car</p>
        </div>
    );
}

export default ImageComponent;
