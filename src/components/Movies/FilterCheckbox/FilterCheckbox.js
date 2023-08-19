import './FilterCheckbox.css'
import {useState} from "react";

function FilterCheckbox() {
  const [isChecked, setIsChecked] = useState(false);
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <label className="filter-checkbox">
      <input
        className="filter-checkbox__checkbox"
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <span
        className={`filter-checkbox__slider ${
          isChecked ? "filter-checkbox__slider_no-active" : ""
        }`}
      />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox