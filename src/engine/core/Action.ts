// engine/core/Action.ts

/** 孩子在课堂上的操作 */
export type Action =
  /** 增加对象，例如苹果数量 +2 */
  | { type: 'ADD'; value: number }

  /** 减少对象，例如苹果数量 -1 */
  | { type: 'REMOVE'; value: number }

  /** 重置状态，例如重新开始一题 */
  | { type: 'RESET' };
