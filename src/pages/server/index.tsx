import { useState } from "react";
// import { Node, NetworkHub } from "smoke-node";
import { WebContainer } from '@webcontainer/api';
import { Node } from 'smoke-node'



const ServerPage = () => {
  const [message, setMessage] = useState("");
  const node = new Node();

  const startServer =() => {
//     // Call only once
// const webcontainerInstance = await WebContainer.boot();
const app = node.rest.createServer()

    // const node = new Node({ hub: new NetworkHub("ws://localhost:5000") });
    // const app=node.rest.createServer();
    // console.log(node);
    
    app.get('/',(req, res) => {
      setMessage('Server started at ws://localhost:5000')
        res.headers['Content-Type'] = 'text/html'
        res.send(`<h1>hello world</h1>`)
      })
  };

  return (
    <>
      <div>
        <button onClick={()=>{startServer()}}>Click to start a server</button>
      </div>
      {message && message.length !== 0 && <p>{message}</p>}
    </>
  );
};
export default ServerPage;
