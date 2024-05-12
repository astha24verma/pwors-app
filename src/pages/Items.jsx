import React from 'react';
import { Link } from 'react-router-dom';

function Items() {
    return (
        <>
        <div class="bg-transparent bg-opacity-90 rounded-xl mt-10">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-25">
            <h2 class="text-4xl font-bold text-gray-900">My Items</h2>
      
            <div class="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="tops" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-2xl text-gray-500">
                <Link to="/top">
                    <span class="absolute inset-0 "></span>
                    Top Wears
                  </Link>
                </h3>
                <p class="text-base font-semibold text-gray-900">Work from home accessories</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Bottoms" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-2xl text-gray-500">
                <Link to="/bottom">
                    <span class="absolute inset-0"></span>
                    Bottom Wears
                  </Link>
                </h3>
                <p class="text-base font-semibold text-gray-900">Journals and note-taking</p>
              </div>
              <div class="group relative">
                <div class="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                  <img src="https://images.unsplash.com/photo-1603808033192-082d6919d3e1?q=80&w=715&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Footwears" class="h-full w-full object-cover object-center" />
                </div>
                <h3 class="mt-6 text-2xl text-gray-500">
                <Link to="/shoes">
                    <span class="absolute inset-0"></span>
                    Foot Wears
                  </Link>
                </h3>
                <p class="text-base font-semibold text-gray-900">Daily commute essentials</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    )
  }
  
  export default Items