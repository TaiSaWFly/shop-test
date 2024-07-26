const paginate = <T>(data: T[], pageNumber: number, pageSize: number): T[] => {
    const startIndex = (pageNumber - 1) * pageSize;
    return [...data].splice(startIndex, pageSize);
};

export default paginate;
