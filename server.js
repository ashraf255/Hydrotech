const str = "Uneasy barton seeing remark happen his has";

const slug = (str) => {
  const words = str.split(" ");

  let lowercaseWords = [];
  for (let i = 0; i < words.length; i++) {
    lowercaseWords.push(words[i].toLowerCase());
  }

  return lowercaseWords.join("-");
};

console.log(slug(str));
