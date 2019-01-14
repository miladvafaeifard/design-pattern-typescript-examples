export enum TodoEnum {
    TEXT = 'text',
	DONE = 'done',
	INDEX = 'index',
}

export interface Todo { 
    readonly [TodoEnum.TEXT]: string;
	readonly [TodoEnum.DONE]: boolean;
	readonly [TodoEnum.INDEX]: number;
}


// The common interface for all iterators.
export interface TodoIterator<T> {
	next(): T;
	hasNext(): boolean;
}

// the concrete iterator class
export class TodoOrderIterator<IteratorType> implements TodoIterator<IteratorType> {
	private collection: IteratorType[] = [];
	private position: number = 0;

	constructor(collection: IteratorType[]) {
		this.collection = collection;
	}

	public next(): IteratorType {
		if (this.position < this.collection.length) {
			var result = this.collection[this.position];
			this.position += 1;
			return result;
		} else {
			return;
		}
	}

	public hasNext(): boolean {
		return this.position < this.collection.length;
	}
}

// the aggregator iterator interface
export interface AggregatorIterator<T> {
	createIterator(): TodoIterator<T>;
}

// the concrete aggregator class
export class TodoCollection implements AggregatorIterator<Todo> {
    private todos: Todo[];
    constructor(todos: Todo[]){
        this.todos = todos;
    }
    createIterator(): TodoIterator<Todo> {
        return new TodoOrderIterator(this.todos);
	}
}