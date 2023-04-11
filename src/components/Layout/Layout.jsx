import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Navigaion } from '../Navigation/Navigation';
import { Triangle } from 'react-loader-spinner';

export default function Layout() {
  return (
    <>
      <Navigaion />
      <div>
        <Suspense
          fallback={
            <div>
              <h1> Loading</h1>
              <Triangle
                height="80"
                width="80"
                color="#000000"
                ariaLabel="triangle-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
              />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </div>
    </>
  );
}
