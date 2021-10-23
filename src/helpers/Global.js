class GlobalFunctions {

    static formatMoney(money) {

        Number.prototype.formatMoney = function (c, d, t) {

            var n = this;
            c = isNaN(c = Math.abs(c)) ? 2 : c;
            d = d === undefined ? "." : d;
            t = t === undefined ? "," : t;
            var s = n < 0 ? "-" : "",
                i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
                j = (j = i.length) > 3 ? j % 3 : 0;
            return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
        };

        return money.formatMoney()
    };
    static cartItemsCount(items) {
        return items && items.reduce((acc, item) => acc + item.quantity, 0)
    };

    static cartPriceCalc(items) {
        return items && items.reduce((acc, item) => acc + item.price * item.quantity, 0)
    };
    static nameSlicer(value, len) {
        return value.trim().length > len ? value.trim().slice(0, len) + '...' : value
    };

}


export default GlobalFunctions;