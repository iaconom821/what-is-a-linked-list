class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  iterate(callback) {
    let node = this.head
    while (node){
      callback(node)
      node = node.next 
    } 
    return this.head 
  }

  // print each node's value on its own line
  // use your iterate method to be DRY! Don't get caught in the code rain, brrr.
  print() {
    this.iterate(node=>console.log(node.value))
  }

  // find the node with the target value and return it
  // if not found return null, use your iterate method to be DRY!
  find(target) {
    let found = null
    this.iterate(node => {
      if(node.value === target){
        // console.log(node)
        found = node 
      }})
    
    return found
  }

  // add the node to the start of the list, no nodes should be removed
  addFirst(node) {
    node.next = this.head
    this.head = node
  }

  // add node to end of list, no nodes should be removed
  // you may wish to use the iterate method
  addLast(node) {
    let lastNode
    if(this.head === null){
      this.head = node
    } else {
      this.iterate((checkNode)=>{
      if (checkNode.next === null) {
        lastNode = checkNode
      }
    })
  
    lastNode.next = node 
    }
  }

  // remove the first Node in the list and update head
  // and return the removed node
  removeFirst() {
    let firstNode = this.head
    if(this.head) {this.head = this.head.next}

    return firstNode
  }

  // remove the tail node, iterate may be helpful
  // return the node you just removed
  removeLast() {
    let lastNode
    this.iterate(check => {
      if(check.next.next === null){
        lastNode = check.next
        check.next = null
      }
    })
    
    return lastNode
  }

  // replace the node at the given index with the given node
  replace(idx, node) {
    let count = 0
    let insertedNode
    this.iterate(check => {
      if(idx === 0){
        node.next = check.next 
        this.head = node 
        insertedNode = node
      } else if ((count + 1) === idx){
        if(check.next) {node.next = check.next.next}
        check.next = node
        insertedNode = node 
      }
      count += 1
    })

    return insertedNode
  }

  // insert the node at the given index
  // no existing nodes should be removed or replaced
  insert(idx, node) {
    let count = 0
    this.iterate(check => {
      if(idx === 0){
        node.next = check
        this.head = node 
      } else if ((count + 1) === idx){
        node.next = check.next
        check.next = node 
      }
      count += 1
    })
  }

  // remove the node at the given index, and return it
  remove(idx) {
    let count = 0
    let removedNode 
    this.iterate(check => {
      if(idx === 0){
        removedNode = this.head
        this.head = this.head.next
        removedNode.next = null 
      } else if ((count + 1) === idx){
        removedNode = check.next 
        check.next = check.next.next
        removedNode.next = null 
      }

      count += 1
    })

    return removedNode
  }

  clear(){
    this.head = null 
  }
}

class Node {
  constructor(value = null, next = null) {
    this.value = value;
    this.next = next;
  }
}

if (require.main === module) {
  // add your own tests in here
  // new_nodes1 = new Node('Hamtaro', new Node('Walter White'))
  // new_nodes2 = new Node('Coffee', new Node('Manhattan', new Node('Brandy Sour')))
  // new_list1 = new LinkedList(new_nodes1)
  // new_list2 = new LinkedList(new_nodes2)

  // new_list1.print()
  // new_list2.print()

  // console.log(new_list1.find('potato'))
  // console.log(new_list2.find('Manhattan'))

  // new_list1.addFirst(new Node('orange'))

  // console.log(new_list1)

  // new_list2.addLast(new Node('LITea'))

  // new_list2.print()

  // console.log(new_list2.removeFirst())

  // new_list2.print() 

  // console.log(new_list1.removeLast())

  // new_list1.print()

  // console.log(new_list2.replace(1, new Node('Zombie')))

  // new_list2.print()

  // new_list2.insert(1, new Node('FLDRPep'))

  // new_list2.print()

  // console.log(new_list2.remove(2))

  // new_list2.print()

  // new_list1.clear()

  // new_list1.print()

  // console.log(new_list1.head) 

  // console.log(new_list1.head.value, new_list1.head.next.value)
  // console.log(new_list2.head.value, new_list2.head.next.value, new_list2.head.next.next.value)
}

module.exports = {
  Node, LinkedList
};
