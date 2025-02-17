function generateArray(size, min = 0, max = 100) {
    let arr = [];
    for (let i = 0; i < size; i++) {
        arr.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return arr;
}

// QuickSort algorithm
function quickSort(arr) {
    if (arr.length <= 1) return arr;
    const pivot = arr[arr.length - 1];
    const left = [], right = [];
    for (let i = 0; i < arr.length - 1; i++) {
        arr[i] < pivot ? left.push(arr[i]) : right.push(arr[i]);
    }
    return [...quickSort(left), pivot, ...quickSort(right)];
}

// Merge Sort algorithm
function mergeSort(arr) {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}

function merge(left, right) {
    let result = [], i = 0, j = 0;
    while (i < left.length && j < right.length) {
        result.push(left[i] < right[j] ? left[i++] : right[j++]);
    }
    return result.concat(left.slice(i), right.slice(j));
}

// Linear search
function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}

// Binary search
function binarySearch(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (arr[mid] === target) return mid;
        if (arr[mid] < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}

// Find maximum value
function findMax(arr) {
    return Math.max(...arr);
}

// Find minimum value
function findMin(arr) {
    return Math.min(...arr);
}

// Calculate average value
function calculateAverage(arr) {
    return arr.reduce((sum, num) => sum + num, 0) / arr.length;
}

// Function to reverse an array
function reverseArray(arr) {
    return arr.slice().reverse();
}

// Function to remove duplicates
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

// Function to shuffle an array
function shuffleArray(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Function to merge two sorted arrays
function mergeSortedArrays(arr1, arr2) {
    return merge(quickSort(arr1), quickSort(arr2));
}

// Function to rotate array to the left
function rotateLeft(arr, times) {
    for (let i = 0; i < times; i++) {
        arr.push(arr.shift());
    }
    return arr;
}

// Function to rotate array to the right
function rotateRight(arr, times) {
    for (let i = 0; i < times; i++) {
        arr.unshift(arr.pop());
    }
    return arr;
}

// Function to measure execution time
function measureTime(fn, arr, ...args) {
    const start = performance.now();
    const result = fn(arr, ...args);
    const end = performance.now();
    return { result, time: end - start };
}

// Function to check if an array is sorted
function isSorted(arr) {
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < arr[i - 1]) return false;
    }
    return true;
}

// Function to partition an array into even and odd numbers
function partitionEvenOdd(arr) {
    return {
        even: arr.filter(num => num % 2 === 0),
        odd: arr.filter(num => num % 2 !== 0)
    };
}

// Function to find the median
function findMedian(arr) {
    const sorted = quickSort([...arr]);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
}

// Function to find the mode (most frequent element)
function findMode(arr) {
    const freq = {};
    let maxCount = 0, mode;
    for (let num of arr) {
        freq[num] = (freq[num] || 0) + 1;
        if (freq[num] > maxCount) {
            maxCount = freq[num];
            mode = num;
        }
    }
    return mode;
}

// Function to generate a Fibonacci sequence
function generateFibonacci(n) {
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

// Function to check if a number is prime
function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

// Function to generate prime numbers up to a limit
function generatePrimes(limit) {
    let primes = [];
    for (let i = 2; i <= limit; i++) {
        if (isPrime(i)) primes.push(i);
    }
    return primes;
}

// Main function to demonstrate all features
function main() {
    const size = 50;
    const max = 100;
    const array = generateArray(size, 0, max);

    console.log("Original Array:", array);
    console.log("Sorted with QuickSort:", quickSort([...array]));
    console.log("Sorted with MergeSort:", mergeSort([...array]));

    const target = array[Math.floor(Math.random() * array.length)];
    console.log(`Searching for ${target}...`);
    console.log(`Linear Search result: ${linearSearch(array, target)}`);
    console.log(`Binary Search result: ${binarySearch(quickSort([...array]), target)}`);

    console.log(`Max Value: ${findMax(array)}`);
    console.log(`Min Value: ${findMin(array)}`);
    console.log(`Average Value: ${calculateAverage(array).toFixed(2)}`);
    console.log(`Median Value: ${findMedian(array)}`);
    console.log(`Mode Value: ${findMode(array)}`);

    console.log("Reversed Array:", reverseArray(array));
    console.log("Unique Elements:", removeDuplicates(array));
    console.log("Shuffled Array:", shuffleArray([...array]));

    const { even, odd } = partitionEvenOdd(array);
    console.log("Even Numbers:", even);
    console.log("Odd Numbers:", odd);

    console.log("Rotated Left by 3:", rotateLeft([...array], 3));
    console.log("Rotated Right by 3:", rotateRight([...array], 3));

    console.log("Fibonacci Sequence (10 terms):", generateFibonacci(10));
    console.log("Prime Numbers up to 50:", generatePrimes(50));

    console.log("Checking if Array is Sorted:", isSorted(array));
}

main();