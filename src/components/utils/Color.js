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

export default getColorClass;
