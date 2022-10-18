const isPrime = (number) => {
    if (number < 2) return false;
  
    let sqrt = parseInt(Math.sqrt(number));
  
    for (let i = 2; i <= sqrt; i++) {
      if (number % i === 0) return false;
    }
  
    return true;
  };
  
  const countPrimeNumbers = (number) => {
    const array = [2];
  
    for (let i = 3; i < number; i += 2) {
      if (isPrime(i)) array.push(i);
    }
  
    return array.length;
  };
  
  let t0 = performance.now();
  countPrimeNumbers(100);
  let t1 = performance.now();
  
  console.log(
    `Execution time of printing countPrimeNumbers was ${t1 - t0} milliseconds.`
  );
  