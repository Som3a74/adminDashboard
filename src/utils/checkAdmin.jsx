import { useEffect, useState } from "react";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../firebase";
import { useAuth } from "../Context/AuthContext";

export default function useCheckAdmin() {
    const [isAdmin, setisAdmin] = useState(null)
    const { currentUser } = useAuth();

    let userEmail = currentUser?.email
    useEffect(() => {
        async function checkUser() {
            try {
                const querySnapshot = await getDocs(collection(db, "Roles"));
                querySnapshot.forEach((doc) => {
                    if (userEmail == doc.data().email) {
                        setisAdmin(true)
                    } else {
                        setisAdmin(false)
                    }
                });
            } catch (error) {
                console.error("Error checking admin status: ", error);
                setisAdmin(false);
            }
        }
        // to async function work
        if (userEmail) {
            checkUser();
        }
    }, [userEmail]);

    return isAdmin
}
