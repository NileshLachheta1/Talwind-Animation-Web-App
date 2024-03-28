import React from "react";

function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-900 flex px-32 items-center gap-5">
      <div className="cardcontainer w-1/2 h-[50vh]">
        <div className="card relative rounded-xl w-full h-full bg-[#004D43] flex items-center justify-center">
            <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;copyrightact</button>
        </div>
      </div>
      <div className="cardcontainer w-1/2 h-[50vh] flex gap-5">
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212d2b] flex items-center justify-center">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;copyrightact</button>
        </div>
        <div className="card relative rounded-xl w-1/2 h-full bg-[#212d2b] flex items-center justify-center">
        <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
            <button className="absolute left-10 bottom-10 px-5 py-1 rounded-full border-2">&copy;copyrightact</button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
