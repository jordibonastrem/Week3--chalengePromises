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
      const id = getId("Jordi");
    });
  });
};

function getDataById() {}

function getFinesByDNI() {}
