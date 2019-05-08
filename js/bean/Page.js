/*
 * @Author: Tony
 * @Date: 2019-05-08 21:40:43
 * @Last Modified by: Tony
 * @Last Modified time: 2019-05-08 23:49:53
 */
export const PAGE_SIZE = 10;//默认pagesize
const PAGE_NUM = 1;

export default class Page {
  constructor(pageNum = PAGE_NUM, ) {
    this.pageSize = PAGE_SIZE;
    this.pageNum = pageNum;
  }
}