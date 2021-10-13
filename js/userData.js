const getId = (name) => {
  if (name === "Luis") {
    return "I'm sick of you";
  } else {
    return Math.floor(Math.random() * (10 - 1 + 1)) + 1;
  }
};

const getUserId = (name) => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (name === "Luis") {
        reject("I'm sick of you");
      } else {
        resolve(Math.floor(Math.random() * (10 - 1 + 1)) + 1);
      }
    }, 2000);
  });

  return promise;
};

function getDataById() {}

function getFinesByDNI() {}

getUserId("Luis").then((successMessage) => {});
