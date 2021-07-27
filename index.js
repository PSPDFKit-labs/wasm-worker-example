import { wrap } from "comlink";
import AddWorker from "./add.worker";
const addWorker = wrap(new AddWorker());
import SubWorker from "./sub.worker";
const subWorker = wrap(new SubWorker());

(async function() {
  const result = await addWorker(1, 4);
  alert(result);
})();

(async function() {
  const result = await subWorker(4, 1);
  alert(result);
})();

