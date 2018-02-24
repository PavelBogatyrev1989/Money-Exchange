// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    denominations = [50, 25, 10, 5, 1];
    exchange = [0, 0, 0, 0, 0];
    current = 0;

    if (currency <= 0) {
        return {};
    }

    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } else {
        while (currency != 0) {
            if (currency - denominations[current] >= 0) {
                exchange[current]++;
                currency = currency - denominations[current];
            }
            else {
                current++;
            }
        }
        result = {
            "H": exchange[0],
            "Q": exchange[1],
            "D": exchange[2],
            "N": exchange[3],
            "P": exchange[4]
        };

        if (exchange[0] == 0) {
            delete result["H"];
        }
        if (exchange[1] == 0) {
            delete result["Q"];
        }
        if (exchange[2] == 0) {
            delete result["D"];
        }
        if (exchange[3] == 0) {
            delete result["N"];
        }
        if (exchange[4] == 0) {
            delete result["P"];
        }

        return result;

    }
}




