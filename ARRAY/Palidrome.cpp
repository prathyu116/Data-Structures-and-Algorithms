 bool checkPalindrome(string a) {
    int s = 0;
    int e = a.length()-1;

    while(s<=e) {
        if(a[s] != a[e])
        {
            return 0;       
        }
        else{
            s++;
            e--;
        }
    }
    return 1;
}

/*

var isPalindrome = function(s) {
    // converting the value
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase()
    console.log(s)
};

var s = "A man, a @#plan, a10 canal: Panama"
isPalindrome(s)

*/
