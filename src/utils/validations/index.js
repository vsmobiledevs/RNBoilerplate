import Toast from 'react-native-tiny-toast';
import * as yup from 'yup';
import I18n from '../../translations';
import {character_format, phoneRegExp} from '../constants';

export const signupFormFields = {
  phone: '',
  firstName: '',
  lastName: '',
  email: '',
  code: '',
};
export const loginFormFields = {
  phone: '',
};
export const contactUsFields = {
  message: '',
  category: '',
};
//Edit Form
export const editFormFields = {
  phone: '',
  firstName: '',
  lastName: '',
  email: '',
  city: '',
  address: '',
  language: '',
};
//Login Schema

yup.addMethod(yup.string, 'phoneLength', function (errorMessage) {
  return this.test(`phone`, errorMessage, function (value) {
    const {path, createError} = this;

    let num = '';
    if (phoneRegExp.test(value)) {
      num = value;
    } else {
      let engNum = value
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
      num = engNum;
    }
    return (
      (num?.length === 9 && num.startsWith('7')) ||
      createError({
        path,
        message: errorMessage,
      })
    );
  });
});

yup.addMethod(yup.string, 'phoneNumber', function (errorMessage) {
  return this.test(`phone`, errorMessage, function (value) {
    const {path, createError} = this;
    if (character_format.test(value)) {
      return createError({
        path,
        message: errorMessage,
      });
    } else {
      return value;
    }
  });
});

yup.addMethod(yup.string, 'convertCodeToEnglish', function (errorMessage) {
  return this.test(`phone`, errorMessage, function (value) {
    if (phoneRegExp.test(value)) {
      return value;
    } else {
      let engCode = value
        .replace(/[٠-٩]/g, d => '٠١٢٣٤٥٦٧٨٩'.indexOf(d))
        .replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d));
      return engCode;
    }
  });
});

export const loginSchema = yup.object().shape({
  phone: yup
    .string()
    .phoneNumber(I18n.t('login_mobile_number_error_min'))
    .convertCodeToEnglish(I18n.t('login_mobile_number_error_min'))
    .min(9, I18n.t('login_mobile_number_error_min'))
    .max(9, I18n.t('login_mobile_number_error_min'))
    .phoneLength(I18n.t('login_mobile_number_error_min'))
    .required(I18n.t('login_mobile_number_error_required')),
});

//SignUp Schema

export const signupSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, I18n.t('login_mobile_number_error_phone'))
    .min(9, I18n.t('login_mobile_number_error_min'))
    .max(9, I18n.t('login_mobile_number_error_min'))
    .optional(),
  firstName: yup.string().required(I18n.t('signup_first_name_error_required')),
  lastName: yup.string().required(I18n.t('signup_last_name_error_required')),
  email: yup
    .string()
    .email(I18n.t('signup_email_error_format'))
    .optional(I18n.t('signup_email_error_required')),
  code: yup
    .string()
    .convertCodeToEnglish(I18n.t('login_mobile_number_error_phone'))
    .min(6, I18n.t('signup_code_error_min'))
    .max(6, I18n.t('signup_code_error_min'))
    .required(I18n.t('signup_code_error_required')),
});

//Login Schema
export const verifyCodeSchema = yup.object().shape({
  code: yup
    .string()
    .convertCodeToEnglish(I18n.t('login_mobile_number_error_phone'))
    .min(6, I18n.t('signup_code_error_min'))
    .max(6, I18n.t('signup_code_error_min'))
    .required(I18n.t('signup_code_error_required')),
});

//Edit Schema
export const profileSchema = yup.object().shape({
  phone: yup
    .string()
    .matches(phoneRegExp, I18n.t('login_mobile_number_error_phone'))
    .min(9, I18n.t('login_mobile_number_error_min'))
    .max(9, I18n.t('login_mobile_number_error_min'))
    .optional(),
  firstName: yup.string().required(I18n.t('signup_first_name_error_required')),
  lastName: yup.string().required(I18n.t('signup_last_name_error_required')),
  email: yup
    .string()
    .email(I18n.t('signup_email_error_format'))
    .optional(I18n.t('signup_email_error_required')),
  address: yup.string().required(I18n.t('edit_profile_error_address')),
});

//Contact Form Schema
export const contactusSchema = yup.object().shape({
  message: yup.string().required(I18n.t('contact_us_detail_error')),
  category: yup.string().required(I18n.t('contact_us_answer_error')),
});

//Response Validator
export const responseValidator = (response, msg) => {
  let errorCode = response.substring(32, 36);
  if (errorCode == 401) {
    Toast.show(I18n.t('backend_error'), {
      position: Toast.position.BOTTOM,
      duration: 3000,
    });
  } else if (errorCode == 400) {
    Toast.show(I18n.t('backend_error'), {
      position: Toast.position.BOTTOM,
      duration: 3000,
    });
  } else if (errorCode == 404) {
    Toast.show(I18n.t('backend_error'), {
      position: Toast.position.BOTTOM,
      duration: 3000,
    });
  } else if (errorCode == 500) {
    Toast.show(I18n.t('backend_error'), {
      position: Toast.position.BOTTOM,
      duration: 3000,
    });
  } else {
  }
};
