import { isValidEmail } from "../../utils/validators";

export function validateUserForm(formData) {
  const errors = {};
  const { firstName, lastName, username, email, password } = formData;

  if (!firstName.trim()) errors.firstName = "First name is required";
  if (!lastName.trim()) errors.lastName = "Last name is required";

  if (!username.trim()) errors.username = "Username is required";

  if (!email.trim()) {
    errors.email = "Email is required";
  } else if (!isValidEmail(email)) {
    errors.email = "Invalid email address";
  }

  if (!password.trim()) {
    errors.password = "Password is required";
  } else if (password.trim().length < 8) {
    errors.password = "Password must be at least 8 characters long";
  }

  return errors;
}
