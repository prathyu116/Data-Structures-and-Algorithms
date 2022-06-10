https://www.codingninjas.com/codestudio/problems/aggressive-cows_1082559?source=youtube&campaign=love_babbar_codestudio2&utm_source=youtube&utm_medium=affiliate&utm_campaign=love_babbar_codestudio2
https://takeuforward.org/data-structure/aggressive-cows-detailed-solution/
After sorting the array, we set a minimum distance, then we keep on increasing until accommodation of all cows is not possible. 
We stop just before that to get our answer, 
which in this example is 3. 
For checking if the cows can fit or not, we are simply iterating over our n stalls, and for every stall with the said minimum distance, 
we place our cow. After we are done, if all cows have been accommodated, we return true,
otherwise false. Let’s observe the time complexity of our brute force algorithm here,
we are increasing distance in each step (which in the worst case of two cows gets as high as m = array[n-1]-array[0]), and in that step, we are 
checking if our cows can “fit”, so we are iterating again for each step to check.

import java.util.*;
class TUF {
    static boolean isCompatible(int inp[], int dist, int cows) {
        int n = inp.length;
        int k = inp[0];
        cows--;
        for (int i = 1; i < n; i++) {
            if (inp[i] - k >= dist) {
                cows--;
                if (cows == 0) {
                    return true;
                }
                k = inp[i];
            }
        }
        return false;
    }
    public static void main(String args[]) {
        int n = 5, m = 3;
        int inp[] = {1,2,8,4,9};
        Arrays.sort(inp);
        int maxD = inp[n - 1] - inp[0];
        int ans = Integer.MIN_VALUE;
        for (int d = 1; d <= maxD; d++) {
            boolean possible = isCompatible(inp, d, m);
            if (possible) {
                ans = Math.max(ans, d);
            }
        }
        System.out.println("The largest minimum distance is " + ans);
    }
}


Output: The largest minimum distance is 3

Time complexity: O(n* m)

Space Complexity: O(1) 


------------------------------------------------------------------------Binary Search--------------------------------------------------
if we keeping of cows 4 distance we canT  place 3 cows



bool isPossible(vector<int> &stalls, int k, int mid) {
    
    int cowCount = 1;
    int lastPos = stalls[0];
    
    for(int i=0; i<stalls.size(); i++ ){
        
        if(stalls[i]-lastPos >= mid){
            cowCount++;
            if(cowCount==k) //because 3 stall ea ulloo 
            {
                return true;
            }
            lastPos = stalls[i];
        }
    }
    return false;
}

int aggressiveCows(vector<int> &stalls, int k)
{
    sort(stalls.begin(), stalls.end());
    
   	int s = 0;
    int maxi = -1;
    for(int i=0; i<stalls.size(); i++) {
        maxi = max(maxi, stalls[i]);
    }
    int e = maxi;
    int ans = -1;
    int mid = s + (e-s)/2;
    
    while(s<=e) {
        if(isPossible(stalls, k, mid)) {
            ans = mid;
            s = mid + 1;
        }
        else
        {
            e = mid - 1;
        }
        mid = s + (e-s)/2;
    }
    return ans;
}
