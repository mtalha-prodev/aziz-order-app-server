import React from "react";

function Icons({ icon, iconStyle }) {
  return (
    <span className={iconStyle.footerIcon}>
      <i className={`${icon} text-sm text-slate-800 hover:text-white`}></i>
    </span>
  );
}

export default Icons;
