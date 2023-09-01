
class GridParams {
    constructor(columns, rows, step) {
        this.columns = columns
        this.rows = rows
        this.step = step
    }

}

export default function gridParams(width) {
    if (width >= 1280) {
        return new GridParams(4,4,1)
    } else if (width >= 990) {
        return new GridParams(3,4,1)
    } else if (width >= 654) {
        return new GridParams(2,4,1)
    } else return new GridParams(1,5,2)
}
