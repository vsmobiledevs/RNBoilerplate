import * as TYPES from '../../types';

export const getFaqsRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_FAQS_REQUEST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};

export const getVideoURLRequest = (cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_VIDEO_URL_REQUEST_REQUEST,
    cbSuccess,
    cbFailure,
  };
};
export const getProfileData = (params,cbSuccess, cbFailure) => {
  return {
    type: TYPES.GET_PROFILE_INFO_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};

export const updateProfileRequest = (params,cbSuccess, cbFailure) => {
  return {
    type: TYPES.SAVE_PROFILE_INFO_REQUEST_REQUEST,
    params,
    cbSuccess,
    cbFailure,
  };
};