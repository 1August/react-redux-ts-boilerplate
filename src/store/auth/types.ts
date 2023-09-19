import { Token } from '../../schemas/Login';
import { User } from '../../schemas/UserSchema';
import { Action } from '@reduxjs/toolkit';

type ApiError = string
type ApiLoading = boolean
type ApiStatus = number

type PendingApiState = {
    loading: ApiLoading
}

type RejectedApiState = {
    error: ApiError
    status: ApiStatus
}

type FulfilledUserState = {
    user: User
    token: Token
}

export type {
    ApiStatus,
    ApiLoading,
    ApiError,
    RejectedApiState,
    PendingApiState,
    FulfilledUserState,
}

export type PendingAction = Action<PendingApiState>
export type RejectedAction = Action & {
    payload: RejectedApiState
}
