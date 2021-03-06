import { useContext } from 'react';
import Button from './formsControls/Button';
import InputSearch from './formsControls/InputSearch';
import InputSelect from './formsControls/InputSelect';
import CheckBox from './formsControls/CheckBox';
import ORDER_FILTER from '../constants/orderFilter';
import BUTTON_TYPE from '../constants/buttonType';
import SHOW_FORMS_VALUES from '../constants/showFormsValues';
import FormsContext from '../contexts/FormsContext';

import style from './UserFilters.module.css';

const UserFilters = ({ filters, dispatch, showForm }) => {
  const { setShowUserCreateForm } = useContext(FormsContext);

  const selectOptions = !filters.onlyActive
    ? ORDER_FILTER
    : Object.values(ORDER_FILTER).filter(
        ({ value }) => value !== ORDER_FILTER.ACTIVE.value
      );

  if (showForm !== SHOW_FORMS_VALUES.usersFilters) {
    return null;
  }

  return (
    <div className={style.formFilterContainer}>
      <div className={style.formFilterUp}>
        <InputSearch
          searchTerm={filters.searchTerm}
          setSearchTerm={(term) =>
            dispatch({ type: 'searchTerm', value: term })
          }
        />
        <InputSelect
          options={selectOptions}
          value={filters.sortBy}
          setter={(order) => {
            dispatch({ type: 'sortBy', value: order });
          }}
        />
      </div>
      <div className={style.formFilterDown}>
        <CheckBox
          label='Mostrar sólo activos'
          value={filters.onlyActive}
          setter={(onlyActive) => {
            dispatch({ type: 'onlyActive', value: onlyActive });
          }}
        />
        <Button
          type={BUTTON_TYPE.primary}
          clickHandler={() => {
            setShowUserCreateForm();
          }}
        >
          Añadir usuario
        </Button>
      </div>
    </div>
  );
};

export default UserFilters;
