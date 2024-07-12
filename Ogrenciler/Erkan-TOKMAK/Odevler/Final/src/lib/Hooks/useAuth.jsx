import {  useEffect, useState } from "react"
import { useSelector } from "react-redux";

const useAuth = () => {
    const [currentUser, setCurrentUser] = useState({});
    const user = useSelector((state) => state.user.user);

    useEffect(() => {
        if (user) {
            setCurrentUser(user)
        } else {
            setCurrentUser(null)
        }
    })


    return { currentUser }
}

export default useAuth