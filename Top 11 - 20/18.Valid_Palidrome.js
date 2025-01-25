function isValidPalindrome(s) {
    let low = 0, high = s.length - 1;

    while (low < high) {
        const charLow = s[low].toLowerCase();
        const charHigh = s[high].toLowerCase();

        if (!((charLow >= "0" && charLow <= "9") || (charLow >= "a" && charLow <= "z"))) {
            low++;
        } else if (!((charHigh >= "0" && charHigh <= "9") || (charHigh >= "a" && charHigh <= "z"))) {
            high--;
        } else {
            if (charLow !== charHigh) {
                return false;
            }
            low++;
            high--;
        }
    }

    return true;
};
