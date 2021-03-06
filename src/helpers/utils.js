export const parseDate = (date) => {
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const y = date.getFullYear();

    return `${m.length >= 10 ? m : `0${m}`}/${d}/${y}`;
  };
  