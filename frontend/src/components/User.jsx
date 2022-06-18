import { useContext } from 'react';
import FormsContext from '../contexts/FormsContext';
import Button from './Button';
import style from './User.module.css';
import UserRole from './UserRole';
import UserStatus from './UserStatus';
import BUTTON_TYPE from '../constants/buttonType';
import PencilIcon from './icons/PencilIcon';
import TrashIcon from './icons/TrashIcon';

const User = ({ id, name, userName, isActive, role }) => {
  const { editUserHandler, deleteHandler } = useContext(FormsContext);

  return (
    <div className={style.userContainer}>
      <div className={style.userInfo}>
        <p className={style.name}>{name}</p>
        <p className={style.userName}>{`@${userName}`}</p>
      </div>
      <UserStatus isActive={isActive} />
      <UserRole role={role} />
      <span>
        <Button
          type={BUTTON_TYPE.icon}
          clickHandler={() => editUserHandler(id)}
        >
          <PencilIcon />
        </Button>
      </span>
      <span className={style.trash}>
        <Button
          type={BUTTON_TYPE.icon}
          error={true}
          clickHandler={() => {
            deleteHandler(id);
          }}
        >
          <TrashIcon />
        </Button>
      </span>
    </div>
  );
};

export default User;
