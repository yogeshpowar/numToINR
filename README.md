# numToINR
Convert number to Indian Currency string upto 2 decima

# Usage

1. See index.js
2. Set test to "true" if you want to assert

# Sample output

    /*
     * Convert number to Indian Currency string upto 2 decimal
     *
     * crores, lakhs, thousands
     *
     * 123456789 => 12,34,56,789
     * 999 => 999
     * 12345.567 => 12,345.57
     * 123457891011.56789 => 1,23,45,78,91,011.57 //rounds up to 2 decimal
     * 123457891011.1 => 1,23,45,78,91,011.10 //adds extra 0
     *
     */

