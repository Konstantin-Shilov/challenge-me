/**
 * Хелпер для генерация имен action NAME / LOADING / SUCCESS / FAIL
 *
 * @param {String} name
 * @returns {{LOADING: string, SUCCESS: string, FAIL: string, NAME: string}}
 */
export default (name) => ({
  LOADING: `${name}_PENDING`,
  SUCCESS: `${name}_FULFILLED`,
  FAIL: `${name}_REJECTED`,
  NAME: name,
  toString() {
    return name;
  },
});
