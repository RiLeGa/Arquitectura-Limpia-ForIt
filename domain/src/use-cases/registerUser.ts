import type { User, UserRole } from "../entities/User.ts";

export function RegisterUser  ({ name, email, password }: Omit<User, 'id' | 'role'> & { role?: UserRole }): void {
  // Validación simple de email
  if (typeof email !== 'string' || !email.includes('@')) {
    throw new Error('Invalid email format');
  }
  // Validar que los campos no estén vacíos ni sean inválidos
  if (
    typeof name !== 'string' || !name.trim() ||
    typeof email !== 'string' || !email.trim() ||
    typeof password !== 'string' || !password.trim()
  ) {
    throw new Error('Complete all fields');
  }
    // Validar longitud mínima de la contraseña
  if (password.length < 8) {
    throw new Error('Password must be at least 8 characters long');
  }
  // Validar que la contraseña tenga al menos una letra mayúscula y un número
  const uppercaseRegex = /[A-Z]/;
  const numberRegex = /[0-9]/;
  if (!uppercaseRegex.test(password)) {
    throw new Error('Password must contain at least one uppercase letter');
  }
  if (!numberRegex.test(password)) {
    throw new Error('Password must contain at least one number');
  }
  const newUser   = {
    id: Math.random().toString(36).substring(2, 15),
    name,
    email,
    password,
    role: 'user' as UserRole
  };
  console.log(newUser );
}
