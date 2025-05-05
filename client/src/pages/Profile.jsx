import React, { useEffect, useState } from "react";
import { getWithToken } from "../api/fetch";
import { endPoint } from "../utils/url";
import Spinner from "../components/Loader";

function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  const getUser = async () => {
    try {

      const user = await getWithToken(endPoint.user)
      console.log(user)

      if (user.status != 200) {
        alert("Error")
      }

      setProfile(user.data)

      setTimeout(() => {
        setLoading(false)

      }, 1000);
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getUser()
  }, [])

  return (
    <div>
      Profile
      <button
        onClick={() => {
          localStorage.clear();
          window.location.href = '/';
          // getUser()
        }}
      >
        Logout
      </button>

      <h1>user Id: {profile?.userId}</h1>
      <h1>heading title: {profile?.title}</h1>
      <h1>text body: {profile?.body}</h1>

      {
        loading &&
        <Spinner loading={loading} />
      }
    </div>
  );
}

export default Profile;
