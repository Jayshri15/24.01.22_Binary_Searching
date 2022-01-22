function reverse(a)
    {
        var i, k, n = a.length;
        var t;
        for (i = 0; i < n / 2; i++)
        {
            t = a[i];
            a[i] = a[n - i - 1];
            a[n - i - 1] = t;
        }
    }
var arr = [ 1, 5, 8, 9, 6, 7, 3, 4, 2, 0 ] ;
var n = arr.length;
arr.sort();
reverse(arr);
console.log("Array after sorting : " + arr);
for (var i = 0; i < n; ++i)
{
}
         


// Output

// Array after sorting : 9,8,7,6,5,4,3,2,1,0