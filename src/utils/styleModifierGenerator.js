import isArray from 'lodash/isArray';
import concat from 'lodash/concat';
import compact from 'lodash/compact';
/**
 * @example
 * const classNamesV = generateClassNameWithModifer('default_button', ['blue', 'icon']);
 * // classNamesV = default_button default_button--blue default_button--icon
 * <div className={classNamesV} >
 *   ...
 * </div>
 * @param origin, String
 * @param styleModifier, Array or String
 * @returns {*}
 */
const generateStyleModifier = (origin, styleModifier) => {
  if (styleModifier) {
    if (isArray(styleModifier)) {
      return compact(styleModifier).map(modifier => `${origin}--${modifier}`).join(' ');
    }
    return styleModifier ? `${origin}--${styleModifier}` : null;
  }
  return null;
};
export const generateClassNameWithModifier = (origin, styleModifier) => (
  compact(concat(origin, generateStyleModifier(origin, styleModifier))).join(' ')
);

/*export const generateIconClass = (classIcon) => (
  classIcon ? concat('fa', `fa-${classIcon}`).join(' ') : 'fa'
);*/

export const generateIconClass = (classIcon) => {
  if (isArray(classIcon)) {
    const iconWithoutFa = compact(classIcon).map(icon => `fa-${icon}`).join(' ');
    return concat('fa', iconWithoutFa).join(' ');
  }
  return classIcon ? concat('fa', `fa-${classIcon}`).join(' ') : 'fa';
};