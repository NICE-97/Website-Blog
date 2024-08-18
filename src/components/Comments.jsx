import React from "react";

function Comments() {
  return (
    <div className="container flex mx-auto mt-5 w-full">
      <div className="bg-white w-full">
        <div className="flex justify-between mx-5 mt-2 text-sm">
          <h3 className="font-bold">COMMENTS</h3>
        </div>
        <div className="flex">
          <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
          <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
        </div>
        <div className="p-2 justify-items-center">
          <div className="px-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1">
            <div className="flex justify-center">
              <div className="content-center p-2 flex-none">
                <img
                  className="w-16 h-16 rounded-full object-cover object-center "
                  src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="content-center p-2 grow ">
                <h3 className="font-bold text-sm">John Doe</h3>
                <p className="text-xs">
                  If you are going to use a passage of Lorem Ipsum, ...
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="content-center p-2 flex-none">
                <img
                  className="w-16 h-16 rounded-full object-cover object-center "
                  src="https://images.unsplash.com/photo-1494708001911-679f5d15a946?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjh8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
              </div>
              <div className="content-center p-2  grow">
                <h3 className="font-bold text-sm">Anonymous</h3>
                <p className="text-xs">
                  The generated Lorem Ipsum is therefore always free...
                </p>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="content-center p-2 flex-none">
                <img
                  className="w-16 h-16 rounded-full object-cover object-center "
                  src="https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt=""
                />
              </div>
              <div className="content-center p-2  grow">
                <h3 className="font-bold text-sm">Jame bond</h3>
                <p className="text-xs">
                  If you are going to use a passage of Lorem Ipsum, ...
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comments;
