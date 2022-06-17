import { useEffect, useState } from 'react';
import INITIAL_ERROR_VALUES from '../constants/initialErrorValues';
import INITIAL_USER_DATA from '../constants/initialUserData';
import findUserById from '../libs/api/findUserById';

const getUserDataById = async (id, setUserData, setUserNameField) => {
  try {
    const userData = await findUserById(id);

    if (userData) {
      setUserData(userData);
      setUserNameField(userData.userName);
    }
  } catch (err) {
    return err;
  }
};

const useUserForm = (id) => {
  const [userData, setUserData] = useState(INITIAL_USER_DATA);
  const [error, setError] = useState(INITIAL_ERROR_VALUES);
  const [isValidating, setValidating] = useState('initial');
  const [userNameField, setUserNameField] = useState('');

  const setName = (newValue) => {
    const newUserData = { ...userData, name: newValue };
    setUserData(newUserData);
  };

  const setUserName = (newValue) => {
    const newUserData = { ...userData, userName: newValue };
    setUserData(newUserData);
  };

  const setActive = (newValue) => {
    const newUserData = { ...userData, isActive: newValue };
    setUserData(newUserData);
  };

  const setRole = (newValue) => {
    const newUserData = { ...userData, role: newValue };
    setUserData(newUserData);
  };

  const setNameError = (newValue) => {
    const newError = { ...error, nameError: newValue };
    setValidating(false);
    setError(newError);
  };

  const setUserNameError = (newValue) => {
    const newError = { ...error, userNameError: newValue };
    setValidating(false);
    setError(newError);
  };

  useEffect(() => {
    if (id) {
      getUserDataById(id, setUserData, setUserNameField);
    }
  }, [id]);

  return {
    ...userData,
    ...error,
    isValidating,
    userNameField,
    setUserNameField,
    setUserData,
    setNameError,
    setUserNameError,
    setValidating,
    setName,
    setUserName,
    setActive,
    setRole,
  };
};

export default useUserForm;