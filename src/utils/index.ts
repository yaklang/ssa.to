import moment from "moment";

export const formatTimestamp = (i: number, onlyTime?: boolean) => {
  if (onlyTime) {
    return formatTime(i);
  }
  return moment.unix(i).format("YYYY-MM-DD HH:mm:ss");
};

export const formatTime = (i: number) => {
  return moment.unix(i).format("HH:mm:ss");
};

export const formatDate = (i: number) => {
  return moment.unix(i).format("YYYY-MM-DD");
};

export const randomString = (length: number) => {
  let chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var result = "";
  for (var i = length; i > 0; --i)
    result += chars[Math.floor(Math.random() * chars.length)];
  return result;
};

export const sessionStorageUtil = {
  setItem(key, value) {
    try {
      // 将值转为 JSON 字符串存储
      const jsonValue = JSON.stringify(value);
      sessionStorage.setItem(key, jsonValue);
    } catch (error) {
      console.error("Error setting sessionStorage item:", error);
    }
  },

  getItem(key) {
    try {
      const value = sessionStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    } catch (error) {
      console.error("Error getting sessionStorage item:", error);
      return null;
    }
  },

  removeItem(key) {
    try {
      sessionStorage.removeItem(key);
    } catch (error) {
      console.error("Error removing sessionStorage item:", error);
    }
  },

  clear() {
    try {
      sessionStorage.clear();
    } catch (error) {
      console.error("Error clearing sessionStorage:", error);
    }
  },
};
