/*
    Version 1.0

    Copyright 2017- Yogesh Ashok Powar <yogesh@orowealth.com>

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var test = false;
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
var numToINR = function(amt) {
    if (!amt)
        return null;

    var str = String(amt).split(".");
    var cnt = -2;
    var output = "";
    for (i = str[0].length - 1; i >= 0; i--) {
        if (++cnt &&  cnt % 2 === 0) {
            output += ",";
        }
        output += str[0][i];
    }
    var ret = output.split("").reverse().join("");
    if (str.length == 2) {
        if (str[1].length > 2) {
            ret += "." + Math.round(str[1]/ Math.pow(10, str[1].length - 2));
        } else {
            if (str[1].length == 2) {
                ret += "." + str[1];
            } else {
                ret += "." + str[1] + "0";
            }
        }
    }
    //console.log(amt + " => " + ret);
    return ret;
};
if (test) {
    var assert = require('assert');

    assert.equal(numToINR(123456789), "12,34,56,789");
    assert.equal(numToINR(999), "999");
    assert.equal(numToINR(1000), "1,000");
    assert.equal(numToINR(12345.567), "12,345.57");
    assert.equal(numToINR(123457891011.567891011), "1,23,45,78,91,011.57");
    assert.equal(numToINR(123457891011.1), "1,23,45,78,91,011.10");
}
