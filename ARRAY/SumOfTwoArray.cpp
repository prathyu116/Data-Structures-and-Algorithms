vector<int> reverse(vector<int> v){
    int start = 0;
    int end = v.size()-1;
    while(start<=end){
        swap(v[start],v[end]);
        start++;
        end--;
    }
    return v;
}

vector<int> findArraySum(vector<int>&a, int n, vector<int>&b, int m) {
	int i = n-1;
    int j = m-1; //last indexes of both the arrays
    vector<int> ans;
    int carry = 0;
    
    while(i>=0 && j>=0){
        int value1 = a[i];
        int value2 = b[j];
        int sum = value1+value2+carry;
        carry = sum/10;
        sum=sum%10;
        ans.push_back(sum);
        i--;
        j--;
    }
    //overlapping part of summing done, now three cases for addition
    
    //case 1 => first array big and left with left part
    
    while(i>=0){
        int sum = a[i]+ carry;
        carry = sum/10;
        sum=sum%10;
        ans.push_back(sum);
        i--;
    }
    
    //case 2=> second array big and left with left part.
    
    while(j>=0){
        int sum = b[j]+ carry;
        carry = sum/10;
        sum=sum%10;
        ans.push_back(sum);
        j--;
}
    
    //case = 3 => carry remains 999 & 999 case
    while(carry!=0){
        int sum = carry; 	//as it's the only thing remaining for summing
        carry = sum/10;
        sum=sum%10;
        ans.push_back(sum);
    }
   return reverse(ans);
    //our answer is coming reverses as we are running array from behind and all the cases so the vector is stored in reverse format => 0,2,4,0 is saving in it from right side, so reverse it
};
