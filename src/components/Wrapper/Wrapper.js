import React from 'react';
import classes from './Wrapper.module.scss';

const Wrapper = props => {
  return (
    <div className={classes.wrapper}>
      <span className={classes.tags}>
        &lt;html&gt;
      <br />
        &nbsp;&nbsp;&lt;body&gt;</span>

      {props.children}
      <br />
      <br />
      <span className={classes.tags}>
        &nbsp;&nbsp;&lt;/body&gt;
                <br />
        &lt;/html&gt;
            </span>
    </div>
  );
};

export default Wrapper;
