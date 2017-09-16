class Node {
    int data;
    Node next;

    public Node(int d) {
        data = d;
        next = null;
    }
}

public class LinkedList {

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
        if(head == null) {
            head = add;
            return;
        }

        Node temp = head;

        while(temp.next !=null) {
            temp = temp.next;
        }
        temp.next = add;
    }

    public void reverse() {
        if(head == null || head.next == null) return;

        Node back, middle, front;
        back = null;
        middle = head;
        front = head.next;
        while(front.next != null) {
            middle.next = back;
            back = middle;
            middle = front;
            front = front.next;
        }
        middle.next = back;
        head = middle;
    }

    public int length() {
        if(head == null) return 0;

        Node temp = head;
        int count = 1;

        while(temp != null) {
            temp = temp.next;
            count++;
        }
        return count;
    }

    public int findNthFromEnd(int n) {
        if(head == null || n <= 0) return Integer.MIN_VALUE;

        Node front = head, back = head;

        for(int i = 0; i<n; i ++) {
            if(front == null) return Integer.MIN_VALUE;
            front = front.next;
        }
        while(front != null) {
            front = front.next;
            back = back.next;
        }
        return back.data;
    }

    // public Node Zip

    public boolean isCyclic() {
        if(head ==null || head.next == null) return false;

        Node front = head.next.next;
        Node back = head;
        while(front != null && front != back) {
            front = front.next;
            if(front != null) {
                front = front.next;
                back = back.next;
            }
        }
        if(front == null) return false;
        else return true;
    }

    public static void main(String[] args) {
        LinkedList testLL = new LinkedList();
        testLL.addToHead(5);
        testLL.addToHead(7);
        testLL.addToHead(8);
        testLL.reverse();
        System.out.println(testLL.head.data);
    }
}
