export const getDay = () => {
  const day = new Date().getDay();
  switch (day) {
    case 0:
      return "Minggu";
      break;
    case 1:
      return "Senin";
      break;
    case 2:
      return "Selasa";
      break;
    case 3:
      return "Rabu";
      break;
    case 4:
      return "Kamis";
      break;
    case 5:
      return "Jumat";
      break;
    case 6:
      return "Sabtu";
      break;
    default:
      return null;
      break;
  }
};

export const transDay = (indo) => {
  switch (indo) {
    case "Senin":
      return "monday";
      break;
    case "Selasa":
      return "tuesday";
      break;
    case "Rabu":
      return "wednesday";
      break;
    case "Kamis":
      return "thursday";
      break;
    case "Jumat":
      return "friday";
      break;
    case "Sabtu":
      return "saturday";
      break;
    case "Minggu":
      return "sunday";
      break;
    default:
      return null;
      break;
  }
};
