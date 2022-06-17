import { useContext } from 'react';
import ROLE_OPTIONS from '../constants/roleOptions';
import FormsContext from '../contexts/FormsContext';
import Button from './Button';
import style from './User.module.css';

const STYLE_CLASS = {
  status: style.status,
  teacher: style.roleTeacher,
  student: style.roleStudent,
  other: style.roleOther,
};

const getRoleValue = (role) => {
  switch (role) {
    case ROLE_OPTIONS.TEACHER.value:
      return ROLE_OPTIONS.TEACHER.text;
    case ROLE_OPTIONS.STUDENT.value:
      return ROLE_OPTIONS.STUDENT.text;
    default:
      return ROLE_OPTIONS.OTHER.text;
  }
};

const User = ({ id, name, userName, isActive, role }) => {
  const activeUser = isActive ? 'Activo' : 'Inactivo';
  const roleClassName = `${style.role} ${STYLE_CLASS[role]}`;
  const roleValue = getRoleValue(role);

  const { editUserHandler, delteHandler } = useContext(FormsContext);

  return (
    <div className={style.userContainer}>
      <div className={style.userInfo}>
        <p className={style.name}>{name}</p>
        <p className={style.userName}>{`@${userName}`}</p>
      </div>
      <p className={STYLE_CLASS.status}>{activeUser}</p>
      <p className={roleClassName}>{roleValue}</p>
      <Button clickHandler={() => editUserHandler(id)}>Editar</Button>
    </div>
  );
};

export default User;