import './FilterCheckbox.css'

function FilterCheckbox({isChecked, onChange}) {
    return (
        <label className="filter-checkbox">
            <input
                className="filter-checkbox__checkbox"
                type="checkbox"
                checked={isChecked}
                onChange={onChange}
            />
            <span
                className={`filter-checkbox__slider ${
                    isChecked ? "" : "filter-checkbox__slider_no-active"
                }`}
            />
            Короткометражки
        </label>
    );
}

export default FilterCheckbox