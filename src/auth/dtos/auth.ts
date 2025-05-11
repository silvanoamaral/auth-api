export interface LoginDto {
  email: string;
  password: string;
  name: string;
}

export interface LogoutDto {
  userId: string;
  token: string;
}
export interface RefreshTokenDto {
  userId: string;
  refreshToken: string;
}

export interface VerifyEmailDto {
  userId: string;
  verificationToken: string;
}

export interface ResetPasswordDto {
  userId: string;
  passwordResetToken: string;
  newPassword: string;
}

export interface ProfileDto {
  userId: string;
  name?: string;
  email?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  zip?: string;
}

export interface RegisterDto {
  email: string;
  password: string;
  name: string;
}

export interface AuthDto {
    email: string;
    password: string;
    name?: string;
    phone?: string;
    address?: string;
    city?: string;
    state?: string;
    country?: string;
    zip?: string;
    role?: string;
    isActive?: boolean;
    isVerified?: boolean;
    isDeleted?: boolean;
    createdAt?: Date;
    updatedAt?: Date;
    lastLogin?: Date;
    token?: string;
    refreshToken?: string;
    expiresIn?: number;
    refreshTokenExpiresIn?: number;
    passwordResetToken?: string;
    passwordResetExpires?: Date;
    verificationToken?: string;
    verificationExpires?: Date;
    verificationTokenSentAt?: Date;
    verificationTokenUsedAt?: Date;
    verificationTokenUsed?: boolean;
    verificationTokenSent?: boolean;
}