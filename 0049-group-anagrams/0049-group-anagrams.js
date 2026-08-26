var groupAnagrams = function(strs) {
    const map = new Map();

    for (let str of strs) {
        // Sort characters to create a common key
        let key = str.split('').sort().join('');

        // Create group if it doesn't exist
        if (!map.has(key)) {
            map.set(key, []);
        }

        // Add string to its anagram group
        map.get(key).push(str);
    }

    return Array.from(map.values());
};