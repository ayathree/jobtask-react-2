import axios from "axios";
import { useEffect, useState } from "react";

const User = () => {
    const [users, setUsers] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            const { data } = await axios(`https://602e7c2c4410730017c50b9d.mockapi.io/users`);
            setUsers(data);
            setLoading(false);
        };
        getData();
    }, []);

    const handleCardClick = (user) => {
        setSelectedUser(user);
    };

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <div>
            <div id="user" className="flex flex-col lg:flex-row justify-between ">
            <div className="grid lg:grid-cols-2 grid-cols-1 justify-between items-center gap-10">
                {loading ? (
                    <div className="loader">Loading...</div> // You can style this as needed
                ) : (
                    <>
                        {users.slice(9, showAll ? users.length : 17).map(user => (
                            <div key={user.id} className="card card-side bg-base-100 shadow-xl" onClick={() => handleCardClick(user)}>
                                <figure>
                                    <img className="avatar rounded-full"
                                        src={user.avatar}
                                        alt="Avatar" />
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title">{user.profile.username}</h2>
                                    <p className="card-title text-base">{user.jobTitle}</p>
                                </div>
                            </div>
                        ))}
                    </>
                )}
                 
            </div>
           
            {selectedUser && (
                <div className="ml-4 p-4 border border-gray-300 rounded-lg">
                    <h2 className="text-2xl font-bold mb-4">User Details</h2>
                    <img className="avatar rounded-full mb-4"
                        src={selectedUser.avatar}
                        alt="Avatar" />
                    <p><strong>Username:</strong> {selectedUser.profile.username}</p>
                    <p><strong>First Name:</strong> {selectedUser.profile.firstName}</p>
                    <p><strong>Last Name:</strong> {selectedUser.profile.lastName}</p>
                    <p><strong>Email:</strong> {selectedUser.profile.email}</p>
                    <p><strong>Job Title:</strong> {selectedUser.jobTitle}</p>
                    <p><strong>Bio:</strong> {selectedUser.Bio}</p>
                </div>
            )}
            
        </div>
        <div>
        {!loading && users.length > 10 && (
       <button 
           className="mt-4 p-2 bg-blue-500 text-white rounded"
           onClick={toggleShowAll}
       >
           {showAll ? "Show Less" : "Show All"} 
       </button>
   )}
        </div>
        </div>
    );
};

export default User;
