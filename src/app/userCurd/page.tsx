"use client";

import { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { User } from "../../redux/features/userSlice";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  return (
    <div className="p-6 space-y-4">
      <button
        onClick={() => {
          setEditUser(null);
          setShowForm(true);
        }}
        className="px-6 py-3 bg-green-500 text-white rounded-lg"
      >
        Add User
      </button>
      <UserTable
        onEdit={(user) => {
          setEditUser(user);
          setShowForm(true);
        }}
      />
      {showForm && (
        <UserForm
          existingUser={editUser}
          onClose={() => setShowForm(false)}
        />
      )}
    </div>
  );
}
