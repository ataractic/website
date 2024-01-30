import { useState, useEffect } from "https://esm.sh/preact@10.19.2/hooks";

const arr: string[] = [
  `ataractic.net`,
  `-------------`,
  `ataractic.net`,
  `-------------`,
  `a------------`,
  `at-----------`,
  `ata----------`,
  `atar---------`,
  `atara--------`,
  `atarac-------`,
  `ataract------`,
  `ataracti-----`,
  `ataractic----`,
  `ataractic.---`,
  `ataractic.n--`,
  `ataractic.ne-`,
  `ataractic.net`,
  `-------------`,
];

export function Logo() {
  const [text, setText] = useState("-------------");
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
    <div
      id="logo"
      class="font-bold text-white"
    >
      {text}
    </div>
  );
}
