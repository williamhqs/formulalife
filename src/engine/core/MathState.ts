export interface MathState {
  /** 当前对象数量，例如苹果数量 */
  objects: number;

  /** 参与运算的数字，例如 [3, 2] */
  operands?: number[];

  /** 当前运算结果，例如 5 */
  result?: number;
}
