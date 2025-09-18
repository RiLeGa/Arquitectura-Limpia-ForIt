import { describe, test, expect } from 'vitest';
import { RegisterUser } from './registerUser.ts';

describe('RegisterUser ', () => {
  test('should register a newUser  with valid data', () => {
    const payload = {
      name: 'John Doe',
      email: 'doejohn@any.com',
      password: 'securePassword123'
    };
    expect(() => RegisterUser (payload)).not.toThrow();
  });
  
  test('should throw error with invalid email', () => {
    const payload = {
      name: 'John Doe',
      email: 123456789, 
      password: 'securePassword123'
    };
    expect(() => RegisterUser (payload)).toThrow('Invalid email format');
  });
  test('should throw error with empty fields', () => {
    const payload = {
      name: '',
      email: 'doejohn@any.com', 
      password: 'securePassword123'
    };
    expect(() => RegisterUser (payload)).toThrow('Complete all fields');
  });
  test('should throw error if password is less than 8 characters', () => {
  const payload = {
    name: 'John Doe',
    email: 'doejohn@any.com',
    password: 'Abc123' 
  };
  expect(() => RegisterUser (payload)).toThrow('Password must be at least 8 characters long');
});
test('should throw error if password does not contain uppercase letter', () => {
  const payload = {
    name: 'John Doe',
    email: 'doejohn@any.com',
    password: 'password123' 
  };
  expect(() => RegisterUser (payload)).toThrow('Password must contain at least one uppercase letter');
});
test('should throw error if password does not contain a number', () => {
  const payload = {
    name: 'John Doe',
    email: 'doejohn@any.com',
    password: 'Password' 
  };
  expect(() => RegisterUser (payload)).toThrow('Password must contain at least one number');
});
});
