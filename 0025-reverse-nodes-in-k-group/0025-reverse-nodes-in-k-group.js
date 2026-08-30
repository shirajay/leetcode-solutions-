var reverseKGroup = function(head, k) {
    let dummy = new ListNode(0);
    dummy.next = head;

    let groupPrev = dummy;

    while (true) {
        // Find the kth node
        let kth = groupPrev;

        for (let i = 0; i < k; i++) {
            kth = kth.next;
            if (kth === null) {
                return dummy.next;
            }
        }

        let groupNext = kth.next;

        // Reverse the group
        let prev = groupNext;
        let curr = groupPrev.next;

        while (curr !== groupNext) {
            let next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }

        // Connect reversed group
        let temp = groupPrev.next;
        groupPrev.next = kth;
        groupPrev = temp;
    }
};