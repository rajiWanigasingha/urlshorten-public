export default function Loading() {
    return (
      <>
      <div className="w-full h-screen flex flex-col items-center justify-center">
        <div role="status" className="w-xl animate-pulse">
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[760px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[730px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[700px] mb-2.5"></div>
          <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-[760px]"></div>
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      </>
    );
  }
  