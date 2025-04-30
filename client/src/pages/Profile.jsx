import React from "react";

function Profile() {
  return (
    <div>
      Profile{" "}
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
}

export default Profile;
