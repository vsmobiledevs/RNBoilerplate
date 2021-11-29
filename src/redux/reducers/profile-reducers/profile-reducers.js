import * as TYPES from '../../types';

const initialState = {
  error: null,
  loading: false,
  isSuccess: false,
  isFailure: false,
  getFaqs: [],
  video_url: '',
  profiledata: null,

};

const profileReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case TYPES.GET_FAQS_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        getFaqs: payload,
      };
    case TYPES.GET_FAQS_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        getFaqs: [],
      };
    case TYPES.GET_VIDEO_URL_REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        video_url: payload,
      };
    case TYPES.GET_VIDEO_URL_REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        video_url: null,
      };
    case TYPES.SET_PROFILE_LOADER:
      return {
        ...state,
        loading: true,
      };
    case TYPES.GET_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        profiledata: payload,
      };
    case TYPES.GET_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        profiledata: null,
      };
    case TYPES.SAVE_PROFILE_INFO_SUCCESS:
      return {
        ...state,
        loading: false,
        profiledata: payload,
      };
    case TYPES.SAVE_PROFILE_INFO_FAILURE:
      return {
        ...state,
        loading: false,
        profiledata: null,
      };

    default:
      return state;
  }
};

export default profileReducer;
