"use client";

import { useState } from "react";
import UserForm from "./components/UserForm";
import UserTable from "./components/UserTable";
import { User } from "../../redux/features/userSlice";
import Link from "next/link";

export default function Page() {
  const [showForm, setShowForm] = useState(false);
  const [editUser, setEditUser] = useState<User | null>(null);

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between space-x-4">
        <button
          onClick={() => {
            setEditUser(null);
            setShowForm(true);
          }}
          className="px-6 py-3 bg-green-500 text-white rounded-lg"
        >
          Add User
        </button>
        <Link href="/" className="px-6 py-3 bg-blue-500 text-lg font-medium rounded-lg hover:bg-blue-600 transition">
          Back to Home
        </Link>
      </div>
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
