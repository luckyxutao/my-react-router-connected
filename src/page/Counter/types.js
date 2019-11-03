import creater from '../../utilis/typeCreater';
import keyMirror from 'keymirror';

let _types = keyMirror({
    INCREMENT:null,
    DECREMENT:null
});

export default creater(_types, 'Counter');