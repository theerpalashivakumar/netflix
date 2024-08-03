export const checkValidateData = (email, password,name) => {
  const emailValid = /^[a-zA-Z0-9._%±]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/.test(
    email
  );
  const passwordValid =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/.test(password);
    const nameValid = /^[A-z]*$|^[A-z]+\s[A-z]*$/
.test(name)

  if (!emailValid) return "Email is not Valid";
  if (!passwordValid) return "Password is not valid";
  if (!nameValid) return "name is not valid"
  return null;
};
