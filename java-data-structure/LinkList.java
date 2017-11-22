import java.util.concurrent.LinkedBlockingDeque;

class Node {
    int data;
    Node next;

    public Node(int d) {
        data = d;
        next = null;
    }
}

public class LinkList {

    public Node head;

    public LinkedList() {
        head = null;
    }

    public void addToHead(int data) {
        Node add = new Node(data);
        add.next = head;
        head = add;
    }

    public void addToTail(int data) {
        Node add = new Node(data);
        if (head == null) {
            head = add;
            return;
        }

        Node temp = head;

        while (temp.next != null) {
            temp = temp.next;
        }
        temp.next = add;
    }

    public void reverse() {
        if (head == null || head.next == null)
            return;

        Node back, middle, front;
        back = null;
        middle = head;
        front = head.next;
        while (front != null) {
            middle.next = back;
            back = middle;
            middle = front;
            front = front.next;
        }
        middle.next = back;
        head = middle;
    }

    public int length() {
        if (head == null)
            return 0;

        Node temp = head;
        int count = 1;

        while (temp != null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    public Node findNthFromEnd(int n) {
        if (head == null || n <= 0)
            return null;

        Node front = head, back = head;

        for (int i = 0; i < n; i++) {
            if (front == null)
                return null;
            front = front.next;
        }
        while (front != null) {
            front = front.next;
            back = back.next;
        }
        return back;
    }

    // public Node Zip

    public boolean isCyclic() {
        if (head == null || head.next == null)
            return false;

        Node front = head.next.next;
        Node back = head;
        while (front != null && front != back) {
            front = front.next;
            if (front != null) {
                front = front.next;
                back = back.next;
            }
        }
        if (front == null)
            return false;
        return true;
    }

    public void createCycle(int n) {
        Node tail = findTail();
        Node startCycle = findNthFromEnd(n);

        if (startCycle == null) {
            // bad data
            return;
        }
        tail.next = startCycle;
    }

    public Node findTail() {
        if (head == null)
            return null;

        Node temp = head;
        while (temp.next != null)
            temp = temp.next;
        return temp;
    }

    public Node findStartOfCycle() {
        if (head == null || head.next == null)
            return null;
        Node front = head.next.next;
        Node back = head.next;
        while (front != null && front != back) {
            front = front.next.next;
            back = back.next;
        }
        if (front == null)
            return null;
        back = head;
        while (back != front) {
            back = back.next;
            front = front.next;
        }
        return back;
    }

    public Node findMiddle() {
        if (head == null)
            return null;
        if (head.next == null)
            return head;

        Node front = head;
        Node back = head;
        while (front != null) {
            front = front.next;
            if (front != null) {
                front = front.next;
                back = back.next;
            }
        }
        return back;
    }

    public void printSelf() {
        Node n = head;
        if (head == null) {
            System.out.println("Null");
            return ;
        }
        while (n.next != null) {
            System.out.print(n.data + " -> ");
            n = n.next;
        }
        System.out.println(n.data);
    }

    public LinkedList intialList(int[] nums) {
        LinkedList list = new LinkedList();
        for (int i = 0; i < nums.length; i++) {
            list.addToTail(nums[i]);
        }
        return list;
    }

    public static Node deleteDuplicates(Node head) {
        if(head == null || head.next == null) return head;
        
        Node cur = head;
        Node next = cur.next;
        System.out.println(cur.data + " " + next.data);
        while(next != null) {
            while(next != null && cur.data == next.data) {
                next = next.next;
            }
            cur.next = next;
            cur = next;
            if(next != null) next = cur.next;
        }
        return head;
        
    }

    public static void main(String[] args) {
        Solution test = new Solution();

        int[] nums = {1, 1};
        LinkedList list1 = test.initalLinkedList(nums);
        list1.printSelf();

        deleteDuplicates(list1.head);
        test.printLinkedList(list1.head);

        

    }
}

class Solution {

    public LinkedList initalLinkedList(int[] nums) {
        LinkedList l = new LinkedList();
        for (int i = 0; i < nums.length; i++) {
            l.addToTail(nums[i]);
        }
        return l;
    }

    public void printLinkedList(Node n) {
        if (n == null){
            System.out.print("Null");
            return ;
        }
        while (n.next != null) {
            System.out.print(n.data + " -> ");
            n = n.next;
        }
        System.out.println(n.data);
    }

    public Node zipMerge(LinkedList list1, LinkedList list2) {
        Node dummy = list1.head;
        Node h1 = list1.head, h2 = list2.head;
        if (h1 == null || h2 == null) {
            return (h1 == null) ? h2 : h1;
        }
        Node temp1 = h1.next, temp2 = h2.next;
        while (h1.next != null && h2.next != null) {
            h1.next = h2;
            h2.next = temp1;
            h1 = temp1;
            h2 = temp2;
            temp1 = h1.next;
            temp2 = h2.next;
        }
        h1.next = h2;
        if (h2.next == null) {
            h2.next = temp1;
        }

        return dummy;
    }
}
