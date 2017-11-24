class QElement {
    constructor(element, priority)
    {
        this.element = element;
        this.priority = priority;
    }
}
 
// PriorityQueue class
class PriorityQueue {
 
    // An array is used to implement priority
    constructor()
    {
        this.items = [];
    }
 
    // functions to be implemented
    // enqueue(item, priority)
    add(element, priority) {
        let qElement = new QElement(element, priority);
        let contain = false;

        for (let i = 0; i < this.items.length; i++) {
            if (this.items[i].priority > qElement.priority) {
                this.items.splice(i, 0, qElement);
                contain = true;
                break;
            }
        }
        if (!contain) {
            this.items.push(qElement);
        }
    }

    poll() {
        if (this.isEmpty()) {
            return "Empty";
        }
        return this.items.shift();
    }

    peek() {
        if (this.isEmpty()) {
            return "Empty";
        }
        return this.items[0];
    }
    // dequeue()
    // front()
    // isEmpty()
    isEmpty() {
        return this.items.length === 0;
    }
    // printPQueue()
    printPQueue() {
        let str= "";
        for (let i = 0; i < this.items.length; i++) {
            str += this.items[i].element + " ";
        }
        return str;
    }
}