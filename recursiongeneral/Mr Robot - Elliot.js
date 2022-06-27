https://oj.masaischool.com/contest/4431/problem/24


var bag = [ ]
function decrypt(Str, Start, End)
{
 

    if (Start > End)
    {
        return;
    }

    let mid = Math.floor((Start + End)/2) ;

   bag.push(Str[mid])

    decrypt(Str, Start, mid - 1);

    decrypt(Str, mid + 1, End);

}
