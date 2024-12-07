"use client";

import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser, editUser } from "../../../redux/features/userSlice";
import { User } from "../../../redux/features/userSlice";
import { useEffect, useId } from "react";

interface UserFormProps {
    existingUser?: User | null;
    onClose: () => void;
}

const UserForm: React.FC<UserFormProps> = ({ existingUser, onClose }) => {
    const id = useId();
    const dispatch = useDispatch();
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<User>();

    useEffect(() => {
        if (existingUser) reset(existingUser);
    }, [existingUser, reset]);

    const onSubmit = (data: User) => {
        if (existingUser) {
            dispatch(editUser({ ...data, id: existingUser.id }));
        } else {
            dispatch(addUser({ ...data, id: id }));
        }
        reset();
        onClose();
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg p-6 shadow-lg w-full max-w-lg"
                onClick={(e) => e.stopPropagation()}
            >
                <h2 className="text-2xl font-bold mb-4">
                    {existingUser ? "Edit" : "Add"} User
                </h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-1">First Name</label>
                        <input
                            {...register("firstName", { required: "First Name is required" })}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {errors.firstName && (
                            <p className="text-red-500 text-sm">{errors.firstName.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1">Last Name</label>
                        <input
                            {...register("lastName", { required: "Last Name is required" })}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {errors.lastName && (
                            <p className="text-red-500 text-sm">{errors.lastName.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1">Age</label>
                        <input
                            type="number"
                            {...register("age", { required: "Age is required", valueAsNumber: true })}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {errors.age && (
                            <p className="text-red-500 text-sm">{errors.age.message}</p>
                        )}
                    </div>
                    <div>
                        <label className="block mb-1">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: /^\S+@\S+$/i,
                            })}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {errors.email && <p className="text-red-500 text-sm">Invalid Email</p>}
                    </div>
                    <div>
                        <label className="block mb-1">Number</label>
                        <input
                            {...register("number", { required: "Number is required" })}
                            className="w-full border rounded-lg px-3 py-2"
                        />
                        {errors.number && (
                            <p className="text-red-500 text-sm">{errors.number.message}</p>
                        )}
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                        >
                            Save
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserForm;
