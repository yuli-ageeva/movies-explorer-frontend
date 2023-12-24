import {
    FOUR_COLUMNS,
    FOUR_COLUMNS_MIN_WIDTH,
    FOUR_COLUMNS_ROWS_COUNT,
    FOUR_COLUMNS_STEP,
    ONE_COLUMN,
    ONE_COLUMN_ROWS_COUNT,
    ONE_COLUMN_STEP,
    THREE_COLUMNS,
    THREE_COLUMNS_MIN_WIDTH,
    THREE_COLUMNS_ROWS_COUNT,
    THREE_COLUMNS_STEP,
    TWO_COLUMNS,
    TWO_COLUMNS_MIN_WIDTH,
    TWO_COLUMNS_ROWS_COUNT,
    TWO_COLUMNS_STEP
} from "../constants/constants";

class GridParams {
    constructor(columns, rows, step) {
        this.columns = columns
        this.rows = rows
        this.step = step
    }

}

export default function gridParams(width) {
    if (width >= FOUR_COLUMNS_MIN_WIDTH) {
        return new GridParams(FOUR_COLUMNS, FOUR_COLUMNS_ROWS_COUNT, FOUR_COLUMNS_STEP)
    } else if (width >= THREE_COLUMNS_MIN_WIDTH) {
        return new GridParams(THREE_COLUMNS, THREE_COLUMNS_ROWS_COUNT, THREE_COLUMNS_STEP)
    } else if (width >= TWO_COLUMNS_MIN_WIDTH) {
        return new GridParams(TWO_COLUMNS, TWO_COLUMNS_ROWS_COUNT, TWO_COLUMNS_STEP)
    } else return new GridParams(ONE_COLUMN, ONE_COLUMN_ROWS_COUNT, ONE_COLUMN_STEP)
}
