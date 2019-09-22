const getColorClass = color => {
  switch (color) {
    case "danger":
    case "primary":
    case "info":
    case "warning":
    case "secondary":
    case "success":
    case "dark":
      return color;

    default:
      return "dark";
  }
};

const getCurrentColor = () => {
  let color = getComputedStyle(document.documentElement).getPropertyValue(
    "--algorand-color"
  );
  return color;
};

export { getCurrentColor };
export default getColorClass;
