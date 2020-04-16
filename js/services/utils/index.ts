// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// taken from https://davidwalsh.name/javascript-debounce-function
/**
 *
 * @param func function to be called after wait
 * @param wait time to wait before calling the function
 * @param context context in which the debounce is used. this helps in identifying the function to be cancelled and invoked
 * @param immediate if true the function is executed immediately
 */
function debounce(func: (...params: any[]) => void, wait: number = 500, context: any, immediate?: boolean) {
	if (!context) {
		return () => null;
	}
	return () => {
		let later = () => {
			context._debounceTimout = undefined;
			if (!immediate) {
				func.apply(null);
			}
		};
		let callNow = immediate && !context._debounceTimout;
		context._debounceTimout && clearTimeout(context._debounceTimout);
		context._debounceTimout = setTimeout(later, wait);
		if (callNow) {
			func.apply(null);
		}
	};
}

function searchInDataObject(data?: any[], input?: string) {
	if (!data || !Array.isArray(data)) {
		return [];
	}
	if (!input) {
		return data || [];
	}
	return data.filter(item => depthFirstSearch(item, input));
}

function depthFirstSearch(dataItem: any[] | any, input: string): boolean {
	if (!dataItem) {
		return false;
	}
	const type = typeof dataItem;
	// base case(s)
	if (type === 'string' || type === 'number' || type === 'boolean') {
		return dataItem
			.toString()
			.toLowerCase()
			.includes(input.toString().toLowerCase());
	}
	const dataItemCopy: any[] = Array.isArray(dataItem) ? dataItem : Object.values(dataItem);
	return dataItemCopy.some((item: any) => depthFirstSearch(item, input));
}

export default {
    debounce,
	searchInDataObject
};
