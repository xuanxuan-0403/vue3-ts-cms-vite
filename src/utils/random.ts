const random = (x: number, y: number) => {
    return Math.round(Math.random() * (y - x) + x);
};

export { random };
