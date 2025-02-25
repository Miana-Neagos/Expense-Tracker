export const getFormattedDate = (date: Date): string => {
    const month = date.toLocaleString("en-US", { month: "short" });
    return `${month}-${date.getDate()}-${date.getFullYear()}`;
};