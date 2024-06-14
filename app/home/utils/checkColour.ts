export const checkColour = (type: string): string => {
    switch (type) {
      case "Travel":
        return "orange";
      case "Booking":
        return "red";
      case "Hotel":
        return "blue";
      case "Stays":
        return "green";
      default:
        return "purple";
    }
  };
  