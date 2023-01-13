import testFlow1 from './test-flow';
import testFlow2 from './test-flow2';

const empty: any[] = []
const flow: any[] = empty.concat(
    testFlow1,
    testFlow2
);

export default flow;