import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { IoIosChatbubbles } from "react-icons/io";
import {
  FaFacebook,
  FaTwitter,
  FaPinterest,
  FaPlus,
  FaYoutube,
} from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { MdOutlineEmail } from "react-icons/md";

function BlogContent() {
  return (
    <div className="container   mx-auto mt-5 w-full">
      <div className="bg-white w-full px-5 py-5">
        <div className="flex text-sm">
          <a className="hover:text-orange-500" href="">
            Home
          </a>
          <div className="grid content-center">
            <FaAngleRight />
          </div>
          <a className="hover:text-orange-500" href="">
            Labtops
          </a>
        </div>
        <h1 className="font-bold text-3xl">
          Here’s What People Think of iOS 13 New Dark Mode
        </h1>
        <div className="flex justify-between mt-5">
          <div className="flex">
            <img
              className="rounded-full w-10 h-10 object-cover object-center"
              src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
            <div className="grid content-center ml-5">
              <h1>
                by <span className="text-orange-500">John Doe</span> - August
                02, 2021
              </h1>
            </div>
          </div>
          <div className="text-2xl text-orange-500 grid grid-cols-2 content-center">
            <IoIosChatbubbles />
            <span className="text-base text-black font-semibold">10</span>
          </div>
        </div>
        <div className="w-full my-5">
          <img
            className="w-full"
            src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXJzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
          <div className="mt-5">
            <h3>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h3>
          </div>
        </div>
        <div>
          <div className="bg-gray-100 w-full px-5 py-3">
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
            <h3 className="font-bold">- John Doe</h3>
          </div>
        </div>
        <div className="mt-5">
          <h3>
            It was popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </h3>
        </div>
        <div className="mt-5">
          <div className="w-full px-5 py-3">
            <ul className="ml-5">
              <li className="list-disc">Lorem Ipsum has been the industry's</li>
              <li className="list-disc">
                The generated Lorem Ipsum is therefore always
              </li>
              <li className="list-disc">
                Making this the first true generator
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-5">
          <h3>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English.
          </h3>
        </div>
        <div className="mt-5">
          <h3>
            It uses a dictionary of over 200 Latin words, combined with a
            handful of model sentence structures, to generate Lorem Ipsum which
            looks reasonable. The generated Lorem Ipsum is therefore always free
            from repetition, injected humour, or non-characteristic words etc.
          </h3>
        </div>
        <div className="mt-5">
          <h3>
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable. If you are going to use a passage of Lorem Ipsum, you
            need to be sure there isn't anything embarrassing hidden in the
            middle of text.
          </h3>
        </div>
        <div className="flex mt-5">
          <div className="bg-black text-white p-1 text-xs grid content-center rounded-md mr-2">
            <button>Tags</button>
          </div>
          <div className="bg-gray-200 p-1 text-xs grid content-center rounded-md mr-2 hover:text-orange-500">
            <button>Laptops</button>
          </div>
          <div className="bg-gray-200 p-1 text-xs grid content-center rounded-md mr-2 hover:text-orange-500">
            <button>Mobile</button>
          </div>
        </div>
        <div className="flex mt-5">
          <div className=" flex mr-2">
            <div className="iconfacebookbg p-2  text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaFacebook />
              </a>
            </div>
            <div className="bg-sky-700 text-white w-full px-2 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Facebook</a>
            </div>
          </div>
          <div className=" flex mr-2">
            <div className="bg-sky-300 p-2 text-white rounded-tl-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div className="bg-sky-400 text-white w-full px-4 py-2 rounded-tr-md rounded-br-md text-center">
              <a href="">Twitter</a>
            </div>
          </div>
          <div className=" flex mr-2">
            <div className="bg-green-400 px-3 text-white text-lg rounded-md rounded-bl-md content-center justify-center">
              <a href="">
                <BiSolidPhoneCall />
              </a>
            </div>
          </div>
          <div className=" flex mr-2">
            <div className="bg-red-500 px-3 text-white text-lg rounded-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaPinterest />
              </a>
            </div>
          </div>
          <div className=" flex mr-2">
            <div className="bg-gray-400 px-3 text-white text-lg rounded-md rounded-bl-md content-center justify-center">
              <a href="">
                <MdOutlineEmail />
              </a>
            </div>
          </div>
          <div className=" flex mr-2">
            <div className="bg-gray-300 px-3 text-gray-500 text-lg rounded-md rounded-bl-md content-center justify-center">
              <a href="">
                <FaPlus />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full mt-5 px-5 py-5 flex">
        <img
          className="rounded-full w-20 h-20 object-cover object-center"
          src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjZ8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="ml-5">
          <h1 className="font-bold">John Doe</h1>
          <p className="text-sm mt-2">
            Pro Blogger Templates is a site where you find unique and
            professional blogger templates, Improve your blog now for free.
          </p>
          <div className="flex mt-2">
            <div className="mr-2 iconfacebook">
              <a href="">
                <FaFacebook />
              </a>
            </div>
            <div className="mr-2 text-sky-400">
              <a href="">
                <FaTwitter />
              </a>
            </div>
            <div className="mr-2 text-green-400">
              <a href="">
                <BiSolidPhoneCall />
              </a>
            </div>
            <div className="mr-2 text-red-500">
              <a href="">
                <FaPinterest />
              </a>
            </div>
            <div className="mr-2 text-red-600">
              <a href="">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full mt-5 flex">
        <div className="w-full my-2">
          <div className="flex justify-between mx-5 mt-2 text-sm">
            <h3 className="font-bold">YOU MIGHT LIKE</h3>
          </div>
          <div className="flex">
            <div className="bg-orange-500 my-2 ml-4 h-1 w-20 "></div>
            <div className="bg-gray-200 my-2 mr-4 h-1 w-full "></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3">
            <div className="hover:text-orange-500 p-5">
              <div className="relative overflow-hidden scaleimg">
                <img
                  className="object-cover object-center w-full"
                  src="https://images.unsplash.com/photo-1524749292158-7540c2494485?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXBwbGUlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="bg-orange-500 w-16 text-center text-white absolute bottom-0">
                  APPLE
                </div>
              </div>
              <h3 className="font-bold text-sm mt-2">
                18 Practices for Building Responsive Web Applications
              </h3>
              <p className="text-gray-400 text-sm">August 02, 2021</p>
            </div>
            <div className="hover:text-orange-500 p-5">
              <div className="relative overflow-hidden scaleimg">
                <img
                  className="object-cover object-center w-full"
                  src="https://images.unsplash.com/photo-1468436139062-f60a71c5c892?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8YXBwbGUlMjBjb21wdXRlcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="bg-orange-500 w-16 text-center text-white absolute bottom-0">
                  APPLE
                </div>
              </div>
              <h3 className="font-bold text-sm mt-2">
                Apple Macbook Pro is the Best One Yet By Consumer
              </h3>
              <p className="text-gray-400 text-sm">August 02, 2021</p>
            </div>
            <div className="hover:text-orange-500 p-5">
              <div className="relative overflow-hidden scaleimg">
                <img
                  className="object-cover object-center w-full"
                  src="https://images.unsplash.com/photo-1547082299-de196ea013d6?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTN8fGNvbXB1dGVyfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="bg-orange-500 w-16 text-center text-white absolute bottom-0">
                  APPLE
                </div>
              </div>
              <h3 className="font-bold text-sm mt-2">
                Catch the Best iPhone X Deals Plus Your Favorite gadgets
              </h3>
              <p className="text-gray-400 text-sm">August 02, 2021</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white w-full mt-5 flex p-5">
        <div className="w-full ">
          <div className="flex justify-between text-sm">
            <h3 className="font-bold">3 COMMENTS</h3>
          </div>
          <div className="flex">
            <div className="bg-orange-500 my-2 h-1 w-20 "></div>
            <div className="bg-gray-200 my-2 h-1 w-full "></div>
          </div>
          <div>
            <p className="mt-5">
              To be published, comments must be reviewed by the administrator. *
            </p>
            <hr className="mt-5" />
            <div className="mt-5">
              <div className="flex">
                <img
                  className="rounded-full w-10 h-10 object-cover object-center"
                  src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold text-md">John Doe</h3>
                  <p className="text-xs text-gray-400">August 03, 2021</p>
                </div>
              </div>
              <p className="mt-2 text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle
                oftext.
              </p>
              <a
                className="text-orange-500 font-bold text-sm  hover:underline hover:underline-offset-4"
                href=""
              >
                Reply
              </a>
            </div>
            <hr className="mt-5" />
            <div className="mt-5">
              <div className="flex">
                <img
                  className="rounded-full w-10 h-10 object-cover object-center"
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHVzZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold text-md">Anonymous</h3>
                  <p className="text-xs text-gray-400">August 03, 2021</p>
                </div>
              </div>
              <p className="mt-2 text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle
                oftext.
              </p>
              <a
                className="text-orange-500 font-bold text-sm  hover:underline hover:underline-offset-4"
                href=""
              >
                Reply
              </a>
            </div>
            <hr className="mt-5" />
            <div className="mt-5">
              <div className="flex">
                <img
                  className="rounded-full w-10 h-10 object-cover object-center"
                  src="https://images.unsplash.com/photo-1504593811423-6dd665756598?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHBlcnNvbnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
                  alt=""
                />
                <div className="ml-3">
                  <h3 className="font-bold text-md">John Doe</h3>
                  <p className="text-xs text-gray-400">August 03, 2021</p>
                </div>
              </div>
              <p className="mt-2 text-sm">
                If you are going to use a passage of Lorem Ipsum, you need to be
                sure there isn't anything embarrassing hidden in the middle
                oftext.
              </p>
              <a
                className="text-orange-500 font-bold text-sm  hover:underline hover:underline-offset-4"
                href=""
              >
                Reply
              </a>
            </div>
            <hr className="mt-5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogContent;
