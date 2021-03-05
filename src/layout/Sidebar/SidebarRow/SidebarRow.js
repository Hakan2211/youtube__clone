import React from "react";
import classnames from "classnames";

import classes from "./SidebarRow.module.css";

const SidebarRow = ({ selected, Icon, title }) => {
  return (
    <div
      className={[
        classnames(classes.sidebarRow, {
          [classes.selected]: selected,
        }),
      ].join(" ")}
    >
      <Icon className={classes.sidebarRow__icon} />
      <h2 className={classes.sidebarRow__title}>{title}</h2>
    </div>
  );
};

export default SidebarRow;
