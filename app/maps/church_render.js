"use client";
import React from 'react'
import { useState } from 'react'



export default function Church_Render(churches) {

    const newchurches = churches['churches']
    const [forminput, setFormInput] = useState('');


    function myFunction(e) {
        console.log("This is e", e)
        setFormInput(e.target.value)
        var filter, ul, li, a, i, txtValue;
        var input = e.target.value;
        console.log("This is input", input)
        filter = input.toUpperCase();
        console.log("This is filter");
        ul = document.getElementById("myUL");
        li = ul.getElementsByTagName("li");
        for (i = 0; i < li.length; i++) {
            a = li[i].getElementsByTagName("a")[0];
            txtValue = a.textContent || a.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                li[i].style.display = "";
            } else {
                li[i].style.display = "none";
            }
        }
      }


    return (

        

<div>
              <form>
                <input id='myInput' value={forminput} onChange={e => myFunction(e)} placeholder="Search for your church..."/ >
              </form>
                  <ul id="myUL" role="list" className="divide-y divide-gray-100">
                      {newchurches.map((newchurch) => (
                          <li className="flex justify-between gap-x-6 py-5">
                            <div className="min-w-0">
                            <p className="text-sm font-semibold leading-6 text-gray-900">
                            
                              <a href={newchurch.map_url} rel="noreferrer noopener" target="_blank">{newchurch.name}</a></p>
                              </div>
                              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end"> 
                            <div className="mt-1 flex items-center gap-x-1.5">
                            <button
                            type="button" href={newchurch.map_url}
                            className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                        <a href={newchurch.map_url} rel="noreferrer noopener" target="_blank">
                            Access Maps</a>
                            </button>
                            </div>
                            </div>
                          </li>
                      ))}

                  </ul>
                    
              </div>
              );
            }