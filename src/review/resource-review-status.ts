/**
 * 资源审核状态
 */
export enum ResourceReviewStatus {
  /**
   * 新增待审核
   */
  ADD_WAIT_REVIEW = 'ADD_WAIT_REVIEW',

  /**
   * 新增审核中
   */
  ADD_REVIEWING = 'ADD_REVIEWING',

  /**
   * 新增通过
   */
  ADD_RESOLVE = 'ADD_RESOLVE',

  /**
   * 新增拒绝
   */
  ADD_REJECTED = 'ADD_REJECTED',

  /**
   * 编辑待审核
   */
  EDIT_WAIT_REVIEW = 'EDIT_WAIT_REVIEW',
  /**
   * 审核中
   */
  EDIT_REVIEWING = 'EDIT_REVIEWING',
  /**
   * 审核通过
   */
  EDIT_RESOLVE = 'EDIT_RESOLVE',
  /**
   * 审核拒绝
   */
  EDIT_REJECTED = 'EDIT_REJECTED',
}
