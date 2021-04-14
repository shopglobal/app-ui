import React from 'react';

import './styles/token-button.scss';

const LongShort = ({ isLong, isWrap, handleLong }) => {

    const changePosition = (bool) => {
        handleLong(bool)
    }

    return (<>
        {isWrap && <div className="wrap-btns">
            <div className="grad-wrap  wrap-btn  " onClick={() => changePosition(true)}>
                <div className={`grad  ${isLong === true && "checked"}`}>
                    LONG
                </div>

            </div>
            <div className="grad-wrap wrap-btn " onClick={() => changePosition(false)}>
                <div className={`grad ${isLong === false && "checked"}`}>
                    SHORT
                </div>

            </div>

        </div>}
    </>);
}

export default LongShort;