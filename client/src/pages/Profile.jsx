import React, { useEffect, useState } from "react";
import { getWithToken, updateWithToken } from "../api/fetch";
import { endPoint } from "../utils/url";
import Spinner from "../components/Loader";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)

  const [name, setName] = useState('')
  const [role, setRole] = useState('')


  const getUser = async () => {
    try {

      const user = await getWithToken(endPoint.profile)


      if (!user.status) {
        alert("Error")
      }

      setProfile(user)
      setName(user?.content?.name)
      setRole(user?.content?.role)

      setTimeout(() => {
        setLoading(false)

      }, 1000);
    } catch (error) {
      console.log(error.message)
    }
  }


  const update = async () => {
    try {

      if (!name || !role) {
        alert('Please fill all fields')
        return
      }
      const data = {
        name: name,
        role: role
      }


      const update = await updateWithToken(endPoint.updateProfile, data)

      if (!update.status) {
        alert("error")
        return

      }

      setProfile(update)

    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    setName(user?.name)
    setRole(user?.role)
    // getUser()
  }, [])

  return (
    <div>
      Profile
      <button
        onClick={() => {
          localStorage.clear();
          navigate('/');
        }}
      >
        Logout
      </button>

      <h1>user name: {user?.name}</h1>
      <h1>usr role: {user?.role}</h1>
      <h1>user email: {user?.email}</h1>
      <img src={user?.profie_pic} className="w-16  border p-2 bg-slate-100 rounded-full ml-10" alt="" srcset="" />


      <div className="flex justify-center items-center flex-col" >

        <input type="text" className="border border-gray p-1" placeholder="name..." name="name" value={name} onChange={(e) => setName(e.target.value)
        } />
        <input type="text" placeholder="role..." className="border border-gray p-1" name="role" value={role} onChange={(e) => setRole(e.target.value)
        } />
        <button className="bg-rose-500 p-2 rounded-sm" onClick={() => update()} >Update</button>
      </div>


      {/* {
        loading &&
        <Spinner loading={loading} />
      } */}
    </div>
  );
}

export default Profile;
