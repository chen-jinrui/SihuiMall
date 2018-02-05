import Fetch from '@/config/fetch';
export default {
  // 获取数据 - 示例查询车辆列表
  getCarList(params, closeLoading) {
    return Fetch.fetchPost('JC16003', params, closeLoading);
  }
};
