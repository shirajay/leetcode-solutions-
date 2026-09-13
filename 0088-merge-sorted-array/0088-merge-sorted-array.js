var merge = function(nums1, m, nums2, n) {
    let i = m - 1;       // nums1 નો છેલ્લો actual element
    let j = n - 1;       // nums2 નો છેલ્લો element
    let k = m + n - 1;   // nums1 માં છેલ્લી position

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k] = nums1[i];
            i--;
        } else {
            nums1[k] = nums2[j];
            j--;
        }

        k--;
    }
};