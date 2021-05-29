const today = new Date();
const day = today.getDay();
const todayIs = document.querySelector(".today-is");
const UL = document.querySelector("ul");
const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const subject = {
  CG: {
    title: "Computer Graphics",
    link: "https://meet.google.com/zxw-vpbw-eas",
  },
  CA: {
    title: "Computer Architecture",
    link: "https://meet.google.com/fqy-wcve-qfk",
  },
  NM: {
    title: "Numerical Method",
    link: "https://meet.google.com/bdu-fgwz-rpu",
  },
  STAT: {
    title: "Statistics II",
    link: "https://meet.google.com/pht-ttpv-hyb",
  },
  DSA: {
    title: "DSA",
    link: "https://meet.google.com/grj-qgaa-xeq",
  },
};

loadAllFunctions();

function loadAllFunctions() {
  display();
}

function display() {
  if (day === 6) {
    noClass(day);
  } else if (day === 0 || day === 1 || day === 2) {
    subFirst(day);
  } else {
    subLast(day);
  }
}

function noClass(day) {
  console.log("Today is HOliday");
  alert("No classes today");
  let element = `<li><a href="#">Null</a></li>`;
  UL.innerHTML = `${element}`;
  todayIs.children[0].innerHTML = days[day];
}

function subFirst(day) {
  let element = `<li><a href="${subject.CG.link}">${subject.CG.title}</a></li>
        <li><a href="${subject.CA.link}">${subject.CA.title}</a></li>`;
  UL.innerHTML = `${element}`;
  todayIs.children[0].innerHTML = days[day];
}

function subLast(day) {
  let element = `<li><a href="${subject.NM.link}">${subject.NM.title}</a></li>
        <li><a href="${subject.STAT.link}">${subject.STAT.title}</a></li>
        <li><a href="${subject.DSA.link}">${subject.DSA.title}</a></li>`;
  UL.innerHTML = `${element}`;
  todayIs.children[0].innerHTML = days[day];
}
