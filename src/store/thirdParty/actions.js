import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {ActionTypes as AppActionsTypes} from '../app/types';
import {ActionTypes as ThirdPatyActionsTypes} from '../thirdParty/types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const thirdPartySignIn = payload => async dispatch => {
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    dispatch({
      type: AppActionsTypes.USER_AUTHENTICATED,
      payload: {
        authenticated: true,
      },
    });
    dispatch({
      type: ThirdPatyActionsTypes.THIRD_PARTY_USER_DETAILS,
      payload: {
        name: userInfo.data.user.name,
        email: userInfo.data.user.email,
        photo: userInfo.data.user.photo,
      },
    });
    await AsyncStorage.setItem('isLoggedIn', JSON.stringify(true));
  } catch (error) {
    console.error('Error authenticating user:', error);
  }
};
