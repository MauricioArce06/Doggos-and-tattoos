import mayorEdad from "../utils/edad";

export default function validarRegister({
  name,
  email,
  birthDay,
  nDni,
  perfilPicture,
  username,
  password,
}) {
  let userErrors = {};

  const edad = mayorEdad(birthDay);
  const nDni2 = nDni.toString();

  if (!name) userErrors.name = "No name was entered.";
  if (name.length < 4 || name.length > 10)
    userErrors.name = "The name must be between 4 and 10 characters";
  if (!email) userErrors.email = "No email was entered";
  if (!email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/))
    userErrors.email = "Invalid email";
  if (!birthDay) userErrors.birthDay = "No date of birth was entered.";

  if (edad < 18) userErrors.birthDay = "You must be of legal age";

  if (!nDni) userErrors.nDni = "No DNI was entered.";

  if (!nDni2.match(/^[0-9]*$/)) userErrors.nDni = "Only numbers allowed";

  if (nDni2.length > 8 || nDni2.length < 8)
    userErrors.nDni = "The DNI must be 8 digits";
  if (!perfilPicture)
    userErrors.perfilPicture = "No URL was entered for the profile photo";
  if (
    !perfilPicture.match(
      /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-/]))?/
    )
  ) {
    userErrors.perfilPicture = "Invalid URL ";
  }
  if (!username) userErrors.username = "No username was entered";
  if (username.length < 4 || username.length > 10)
    userErrors.username = "The username must be between 4 and 10 characters";
  if (!password) userErrors.password = "No password was entered";
  return userErrors;
}
