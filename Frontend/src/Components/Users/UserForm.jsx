"use client";

import React, { useState } from "react";
import { Button, Label, TextInput, Alert } from "flowbite-react";

import { createUser } from "../../api/users";
import { validateUserForm } from "./userFormValidation";

const UserForm = ({ onClose, onUserAdded }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({});
  };

  const handleSubmit = async () => {
    const validationErrors = validateUserForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      const res = await createUser({ action: "createUser", ...formData });
      setSuccess(true);
      onUserAdded(res.data);
      onClose();
    } catch (err) {
      if (err.response?.data?.error) {
        setErrors({ general: err.response.data.error });
      } else {
        setErrors({ general: "An unexpected error occurred." });
      }
    }
  };

  return (
    <div>
      {success && <Alert color="success">User added successfully!</Alert>}
      {errors.general && <p className="text-red-500">{errors.general}</p>}

      {/* First Name */}
      <Label value="First Name" />
      <TextInput
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}

      {/* Last Name */}
      <Label value="Last Name" />
      <TextInput
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}

      {/* Username */}
      <Label value="Username" />
      <TextInput
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <p className="text-red-500">{errors.username}</p>}

      {/* Email */}
      <Label value="Email" />
      <TextInput
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      {errors.email && <p className="text-red-500">{errors.email}</p>}

      {/* Password */}
      <Label value="Password" />
      <TextInput
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <p className="text-red-500">{errors.password}</p>}

      <div className="flex justify-between mt-4">
        <Button onClick={handleSubmit}>Add User</Button>
        <Button color="gray" onClick={onClose}>
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default UserForm;
