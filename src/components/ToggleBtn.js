import React from 'react';

import { FaAngleDoubleDown } from 'react-icons/fa';
import { FaAngleDoubleUp } from 'react-icons/fa';

export default function ToggleBtn({ handleToggle, visible }) {
    return (
        <>
            <button className="btn-primary btn"
                onClick={handleToggle}>
                {visible ?
                    <span>Покажи<FaAngleDoubleDown /></span> :
                    <span>Скрии<FaAngleDoubleUp /></span>}
            </button>

        </>
    )
}
