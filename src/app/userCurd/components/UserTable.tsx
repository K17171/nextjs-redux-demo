"use client";

import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../../redux/store";
import { deleteUser } from "../../../redux/features/userSlice";
import { User } from "../../../redux/features/userSlice";


interface UserTableProps {
  onEdit: (user: User) => void;
}

const UserTable: React.FC<UserTableProps> = ({ onEdit }) => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="overflow-x-auto">
      <table className="table-auto w-full bg-white shadow-lg rounded-lg">
        <thead className="bg-gray-200">
          <tr>
            <th className="px-4 py-2">First Name</th>
            <th className="px-4 py-2">Last Name</th>
            <th className="px-4 py-2">Age</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone Number</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td className="border px-4 py-2">{user.firstName}</td>
              <td className="border px-4 py-2">{user.lastName}</td>
              <td className="border px-4 py-2">{user.age}</td>
              <td className="border px-4 py-2">{user.email}</td>
              <td className="border px-4 py-2">{user.number}</td>
              <td className="border px-4 py-2 space-x-2">
                <button
                  onClick={() => onEdit(user)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteUser(user.id))}
                  className="px-4 py-2 bg-red-500 text-white rounded-lg"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
