func = async() => {
  console.log("As1");
  await new Promise(resolve => {setTimeout(() => {resolve("resolve_content")}, 2000)}); // no .then(console.log) needed !?
  console.log("As2");
}

func()

// >As1
// >"resolve_content"
// >As2
