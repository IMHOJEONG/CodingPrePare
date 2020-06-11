import React from 'react';
import classNames from 'classnames/bind';
import styles from './CSSModule.module.scss';

const cx = classNames.bind(styles);

const CSSModule = () => {
    return (
        
        <div className={cx('wrapper', 'inverted')}>
            {/* className= {[styles.wrapper, styles.inverted].join(' ')} 도 가능*/}
            저는 <span className="something">CSS module!</span>
        </div>
    )

}

export default CSSModule;