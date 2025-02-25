export function createDarkMode() {
  
  let value: boolean = $state(localStorage.getItem('darkMode') === 'true' || false);

  return {
    get value() {
      return value;
    },
    toggle() {
      value = !value;
      localStorage.setItem('darkMode', value.toString());
    }
  }
};