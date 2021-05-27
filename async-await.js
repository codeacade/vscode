func = async() => {
  console.log("As1");
  await new Promise(resolve => {setTimeout(() => {resolve("resolve_content")}, 2000)}); // no .then(console.log) needed !?
  console.log("As2");
}

func()

// >As1
// >"resolve_content"
// >As2
// ----------------------------------------------------------------------------------------------------
// async / await with external Promise function promiseF1():

promiseF1 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content"), 2000)})}

async mainFun() {
  console.log("As1");
  await promiseF1();
  console.log("As2");
  
// >As1
// >"resolve_content"
// >As2 
// --------------------------------------------------------------------------------------------------
// async / await CHAIN with MANY external Promise functions:

promiseF1 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_1"), 2000)})}
promiseF2 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_2"), 4000)})}
promiseF3 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_3"), 1000)})}

async mainFun() {
  console.log("As1");
  await promiseF1();
  console.log("As2");
  await promiseF2();
  console.log("As3");
  await promiseF3();
  console.log("As4");
  
// >As1                      //  2 seconds wait
// >"resolve_content_1"
// >As2                      //  4 seconds wait
// >"resolve_content_2"
// >As3                      //  1 second wait
// >"resolve_content_3"
// >As4 
// ----------------------------------------------------------------------------------------------------
// async / await with Primusae.all() FUNCTION:

promiseF1 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_1"), 2000)})}
promiseF2 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_2"), 4000)})}
promiseF3 = () => {return new Promise(resolve => {setTimeout(() => r("resolve_content_3"), 1000)})}

async mainFun() {
  console.log("As1");
  await Promise.all ( [promiseF1(), promiseF2(), promiseF3()] )
  console.log("As2");
  
// >As1                      //  7 seconds wait
// >"resolve_content_1"
// >"resolve_content_2"
// >"resolve_content_3"
// >As2

  
  
