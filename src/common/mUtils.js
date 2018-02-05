// 通用处理方法
/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window
    .localStorage
    .setItem(name, content);
};

/**
 * 获取localStorage
 */
export const getStore = name => {
  if (!name) return;
  return window
    .localStorage
    .getItem(name);
};

/**
 * 删除localStorage
 */
export const removeStore = name => {
  if (!name) return;
  window
    .localStorage
    .removeItem(name);
};

/**
 * 空对象判断方法
 */
export const notEmptyObject = e => {
  if (!e) return;
  let t;
  for (t in e) return !0;
  return !1;
};

