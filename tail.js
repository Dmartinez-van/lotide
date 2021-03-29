const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`😀🟢 Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🤬🔴 Assertion Failed: [${actual}] === [${expected}]`);
  }
};

const tail = function(item) {
  let tailArray = [];
  for (let i = 1; i < item.length; i++) {
    tailArray.push(item[i]);
  }
  return tailArray;
};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);
assertEqual(tail(words).length, 2);
assertEqual(tail(words), ["Lighthouse", "Labs"]);

//assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
