const countQtySliders = (length: number, slidesToShow: number) => {
    let qtySliders = 1;
    const result = length - slidesToShow;
    if (result > 0) qtySliders = qtySliders + result;
    return qtySliders;
};

export default countQtySliders;
