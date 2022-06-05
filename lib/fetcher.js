const fetcher = (input, init) => fetch(input, init).then(r => r.json());

export default fetcher;
