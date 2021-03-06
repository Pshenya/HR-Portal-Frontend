import { userConstants } from '../CONSTANTS';
import { userService } from '../Services';
import { alertActions } from './';
import { history } from '../Components/Helpers';

export const userActions = {
    login,
    logout,
    register,
    getUserData,
    getAllUsers,
    postProfileData,
    getProfileData,
    getMyProfileData,
    updateProfileData,
    deleteProfileData
};

function login(email, password) {
    return dispatch => {
        dispatch(request({ email }));

        userService.login(email, password)
            .then(
                user => {
                    dispatch(success(user));
                    history.push('/');
                    window.location.reload();
                },
                error => {
                    console.log(error);
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => {
                    dispatch(success());
                    history.push('/register-profile');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function postProfileData(profile) {
    return dispatch => {
        dispatch(request(profile));

        userService.postProfileData(profile)
            .then(
                profile => {
                    dispatch(success());
                    history.push('/login');
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(profile) { return { type: userConstants.POST_PROFILE_REQUEST, profile } }
    function success(profile) { return { type: userConstants.POST_PROFILE_SUCCESS, profile } }
    function failure(error) { return { type: userConstants.POST_PROFILE_FAILURE, error } }
}

function updateProfileData(profile, userId) {
    return dispatch => {
        dispatch(request(profile));

        userService.updateProfileData(profile, userId)
            .then(
                profile => {
                    dispatch(success(profile));
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };

    function request(profile) { return { type: userConstants.UPDATE_PROFILE_REQUEST, profile } }
    function success() { return { type: userConstants.UPDATE_PROFILE_SUCCESS } }
    function failure(error) { return { type: userConstants.UPDATE_PROFILE_FAILURE, error } }
}

function deleteProfileData(userId) {
    return dispatch => {
        dispatch(request());

        userService.deleteProfileData(userId)
            .then(
                deleted => {
                    dispatch(success());
                },
                error => {
                    dispatch(failure(error.toString()));
                }
            );
    };
    function request() { return { type: userConstants.DELETE_PROFILE_REQUEST } }
    function success() { return { type: userConstants.DELETE_PROFILE_SUCCESS } }
    function failure(error) { return { type: userConstants.DELETE_PROFILE_FAILURE, error } }
}

function getUserData() {
    return dispatch => {
        dispatch(request());

        return userService.getUserData()
            .then(
                userData => dispatch(success(userData))
            )
            .catch(
                error => dispatch(failure(error.toString()))
            )
    };

    function request() { return { type: userConstants.GETUSER_REQUEST } }
    function success(userData) { return { type: userConstants.GETUSER_SUCCESS, userData } }
    function failure(error) { return { type: userConstants.GETUSER_FAILURE, error } }
}

function getAllUsers() {
    return dispatch => {
        dispatch(request());

        userService.getAllUsers()
            .then(profilesList => dispatch(success(profilesList)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: userConstants.GETALL_USERS_REQUEST} }
    function success(profilesList) { return { type: userConstants.GETALL_USERS_SUCCESS, profilesList } }
    function failure(error) { return { type: userConstants.GETALL_USERS_FAILURE, error } }
}

function getProfileData(userId) {
    return dispatch => {
        dispatch(request());

        userService.getProfileData(userId)
            .then(profileData => dispatch(success(profileData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: userConstants.GETPROFILE_REQUEST} }
    function success(profileData) { return { type: userConstants.GETPROFILE_SUCCESS, profileData } }
    function failure(error) { return { type: userConstants.GETPROFILE_FAILURE, error } }
}

function getMyProfileData(userId) {
    return dispatch => {
        dispatch(request());

        userService.getMyProfileData(userId)
            .then(myProfileData => dispatch(success(myProfileData)))
            .catch(error => dispatch(failure(error)))
    };

    function request() { return {type: userConstants.GETMYPROFILE_REQUEST} }
    function success(myProfileData) { return { type: userConstants.GETMYPROFILE_SUCCESS, myProfileData } }
    function failure(error) { return { type: userConstants.GETMYTPROFILE_FAILURE, error } }
}
