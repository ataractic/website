import { useState, useEffect } from "https://esm.sh/preact@10.19.2/hooks";

const arr: string[] = [
  `ataractic`,
  `---------`,
  `ataractic`,
  `---------`,
  `a--------`,
  `at-------`,
  `ata------`,
  `atar-----`,
  `atara----`,
  `atarac---`,
  `ataract--`,
  `ataracti-`,
  `ataractic`,
  `---------`,
];

// const arr: string[] = [
//   `mystère`,
//   `myst.re`,
// ];

export function Logo() {
  const [text, setText] = useState("---------");
  let i = 0;

  function rotateText() {
    setText(arr[i]);
    i += 1;
    if (i >= arr.length) {
      i = 0;
    }
  }

  useEffect(() => {
    setInterval(() => {
      rotateText();
    }, 500);
  }, [])

  return (
    <a
      id="logo"
      class="text-white font-bold hover:text-black hover:bg-white"
      href="/"
    >
      {text}
    </a>
  );
}
